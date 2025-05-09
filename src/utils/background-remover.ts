
import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js to use browser cache and download models as needed
env.allowLocalModels = false;
env.useBrowserCache = true;

// Remove.bg API key
const REMOVE_BG_API_KEY = 'Mp4psLr1FTj5QQnvAnXpuZbQ';
const REMOVE_BG_API_URL = 'https://api.remove.bg/v1.0/removebg';

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

// Function to remove background using Remove.bg API
const removeBackgroundWithApi = async (file: File, fileFormat: string = 'png'): Promise<Blob> => {
  try {
    console.log('Starting background removal with Remove.bg API...');
    
    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('size', 'auto');
    formData.append('format', fileFormat);
    
    const response = await fetch(REMOVE_BG_API_URL, {
      method: 'POST',
      headers: {
        'X-Api-Key': REMOVE_BG_API_KEY,
      },
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Remove.bg API error: ${errorData.errors?.[0]?.title || response.statusText}`);
    }
    
    const blob = await response.blob();
    console.log('Successfully received processed image from Remove.bg API');
    return blob;
  } catch (error) {
    console.error('Error using Remove.bg API:', error);
    throw error;
  }
};

// Fallback function using Hugging Face model
export const removeBackgroundWithHuggingFace = async (imageElement: HTMLImageElement, refinementLevel: number = 50): Promise<Blob> => {
  try {
    console.log('Starting background removal with Hugging Face model...');
    const segmenter = await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
      device: 'cpu',
    });
    
    // Convert HTMLImageElement to canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    // Resize image if needed and draw it to canvas
    resizeImageIfNeeded(canvas, ctx, imageElement);
    
    // Get image data as base64
    const imageData = canvas.toDataURL('image/jpeg', 0.9);
    
    // Process the image with the segmentation model
    console.log('Processing with segmentation model...');
    const result = await segmenter(imageData);
    
    if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
      throw new Error('Invalid segmentation result');
    }
    
    // Create a new canvas for the masked image
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;
    const outputCtx = outputCanvas.getContext('2d');
    
    if (!outputCtx) throw new Error('Could not get output canvas context');
    
    // Draw original image
    outputCtx.drawImage(canvas, 0, 0);
    
    // Apply the mask
    const outputImageData = outputCtx.getImageData(
      0, 0,
      outputCanvas.width,
      outputCanvas.height
    );
    const data = outputImageData.data;
    
    // Get the sensitivity factor from refinement level (0-100)
    const sensitivityFactor = Math.max(0, Math.min(1.5, 1.5 * (refinementLevel / 100)));
    
    // Apply mask to alpha channel with refinement level adjustment
    for (let i = 0; i < result[0].mask.data.length; i++) {
      // Invert the mask value (1 - value) to keep the subject instead of background
      // Apply the sensitivity factor to refine the mask edges
      const maskValue = result[0].mask.data[i];
      const adjustedMaskValue = Math.pow(maskValue, sensitivityFactor);
      const alpha = Math.round((1 - adjustedMaskValue) * 255);
      data[i * 4 + 3] = alpha;
    }
    
    outputCtx.putImageData(outputImageData, 0, 0);
    
    // Convert canvas to blob
    return new Promise((resolve, reject) => {
      outputCanvas.toBlob(
        (blob) => {
          if (blob) {
            console.log('Successfully created final blob with Hugging Face model');
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        'image/png',
        1.0
      );
    });
  } catch (error) {
    console.error('Error removing background with Hugging Face:', error);
    throw error;
  }
};

// Main function that tries Remove.bg API first, then falls back to local model
export const removeBackground = async (imageElement: HTMLImageElement, refinementLevel: number = 50, fileFormat: string = 'png'): Promise<Blob> => {
  try {
    // Get the file from the image element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');
    
    resizeImageIfNeeded(canvas, ctx, imageElement);
    
    // Convert canvas to file
    return new Promise((resolve, reject) => {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          reject(new Error('Failed to create blob from image'));
          return;
        }
        
        const file = new File([blob], 'image.png', { type: 'image/png' });
        
        try {
          // Try with Remove.bg API first
          const resultBlob = await removeBackgroundWithApi(file, fileFormat);
          resolve(resultBlob);
        } catch (apiError) {
          console.warn('Remove.bg API failed, falling back to Hugging Face model:', apiError);
          
          try {
            // Fallback to local model
            const fallbackBlob = await removeBackgroundWithHuggingFace(imageElement, refinementLevel);
            resolve(fallbackBlob);
          } catch (fallbackError) {
            reject(fallbackError);
          }
        }
      }, 'image/png', 0.95);
    });
  } catch (error) {
    console.error('Error in removeBackground:', error);
    throw error;
  }
};

export const loadImage = (file: File): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(new Error('Failed to load image: ' + e));
    img.src = URL.createObjectURL(file);
  });
};
