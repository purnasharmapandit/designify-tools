
import { useState, useEffect } from 'react';
import QRCode from 'qrcode';

export type QRCodeErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
export type QRCodeOutputFormat = 'png' | 'svg' | 'jpg';

export type QRCodeContentType = 
  // Popular
  | 'website' 
  | 'text' 
  | 'social' 
  | 'app_download' 
  | 'batch_upload'
  // Business Links
  | 'file_upload' 
  | 'payment' 
  | 'music' 
  | 'wifi' 
  | 'form' 
  | 'zoom' 
  | 'location' 
  | 'google_form'
  // Contacts
  | 'phone' 
  | 'email' 
  | 'email_message' 
  | 'sms'
  // Custom Landing Pages
  | 'contact_details' 
  | 'event_page' 
  | 'social_links' 
  | 'coupon' 
  | 'detail_page';

export interface QRCodeCenterElement {
  type: 'logo' | 'text';
  content: string;
  size?: number;
}

export interface QRCodeOptions {
  contentType: QRCodeContentType;
  content: string;
  size: number;
  color: string;
  bgColor: string;
  errorCorrectionLevel: QRCodeErrorCorrectionLevel;
  margin: number;
  outputFormat: QRCodeOutputFormat;
  centerElement?: QRCodeCenterElement | null;
}

const defaultOptions: QRCodeOptions = {
  contentType: 'website',
  content: '',
  size: 200,
  color: '#000000',
  bgColor: '#FFFFFF',
  errorCorrectionLevel: 'M',
  margin: 4,
  outputFormat: 'png',
  centerElement: null
};

export function useQRCode(options: Partial<QRCodeOptions> = {}) {
  const [qrOptions, setQrOptions] = useState<QRCodeOptions>({
    ...defaultOptions,
    ...options
  });
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  useEffect(() => {
    if (!qrOptions.content) {
      setQrCodeUrl('');
      setError(null);
      return;
    }

    generateQRCode();
  }, [qrOptions]);

  const generateQRCode = async () => {
    try {
      setIsGenerating(true);
      setError(null);

      const qrCodeOptions = {
        errorCorrectionLevel: qrOptions.errorCorrectionLevel,
        margin: qrOptions.margin,
        width: qrOptions.size,
        color: {
          dark: qrOptions.color,
          light: qrOptions.bgColor
        }
      };

      // Prepare content based on content type
      const formattedContent = formatContentByType(qrOptions.content, qrOptions.contentType);
      
      let dataUrl;
      
      if (qrOptions.outputFormat === 'svg') {
        dataUrl = await QRCode.toString(formattedContent, {
          ...qrCodeOptions,
          type: 'svg'
        });
        // Convert SVG string to data URL
        dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(dataUrl)}`;
      } else {
        dataUrl = await QRCode.toDataURL(formattedContent, {
          ...qrCodeOptions,
          type: qrOptions.outputFormat
        });
      }

      setQrCodeUrl(dataUrl);
    } catch (err) {
      setError('Failed to generate QR code. Please try again.');
      console.error('QR code generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const formatContentByType = (content: string, type: QRCodeContentType): string => {
    switch (type) {
      case 'website':
        if (!content.startsWith('http://') && !content.startsWith('https://')) {
          return `https://${content}`;
        }
        return content;
        
      case 'email':
        return `mailto:${content}`;
        
      case 'phone':
        return `tel:${content}`;
        
      case 'sms':
        return `sms:${content}`;
        
      case 'wifi':
        try {
          // Format: WIFI:S:SSID;T:WPA;P:password;;
          const wifiData = JSON.parse(content);
          return `WIFI:S:${wifiData.ssid};T:${wifiData.encryption || 'WPA'};P:${wifiData.password};;`;
        } catch (e) {
          return content;
        }
        
      case 'payment':
        try {
          const paymentData = JSON.parse(content);
          if (paymentData.type === 'paypal') {
            return `https://paypal.me/${paymentData.id}`;
          } else if (paymentData.type === 'upi') {
            return `upi://pay?pa=${paymentData.id}`;
          }
          return content;
        } catch (e) {
          return content;
        }
        
      case 'social':
        // For social media, ideally we would format based on platform
        // For now, return as is
        return content;
        
      case 'zoom':
        // Ensure the Zoom link is properly formatted
        if (!content.startsWith('http://') && !content.startsWith('https://')) {
          return `https://${content}`;
        }
        return content;
        
      case 'google_form':
        // Ensure the Google Form link is properly formatted
        if (!content.startsWith('http://') && !content.startsWith('https://')) {
          return `https://${content}`;
        }
        return content;
        
      // For other types, we would implement specific formatters
      default:
        return content;
    }
  };

  const updateOptions = (newOptions: Partial<QRCodeOptions>) => {
    setQrOptions((prevOptions) => {
      // If content type changes, reset content unless explicitly provided
      if (newOptions.contentType && newOptions.contentType !== prevOptions.contentType) {
        return {
          ...prevOptions,
          ...newOptions,
          content: newOptions.content !== undefined ? newOptions.content : ''
        };
      }
      
      return {
        ...prevOptions,
        ...newOptions
      };
    });
  };

  const downloadQRCode = () => {
    if (!qrCodeUrl) return;
    
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `qrcode.${qrOptions.outputFormat === 'svg' ? 'svg' : qrOptions.outputFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return {
    qrCodeUrl,
    error,
    isGenerating,
    options: qrOptions,
    updateOptions,
    generateQRCode,
    downloadQRCode
  };
}
