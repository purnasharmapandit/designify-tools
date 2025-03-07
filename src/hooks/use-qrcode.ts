
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
  | 'attendance' 
  | 'event' 
  | 'zoom' 
  | 'location' 
  | 'review' 
  | 'business_card' 
  | 'google_form' 
  | 'newsletter'
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

      // For now, simple QR code generation without center element
      // This would need a custom library implementation or post-processing for center elements
      
      let dataUrl;
      
      if (qrOptions.outputFormat === 'svg') {
        dataUrl = await QRCode.toString(qrOptions.content, {
          ...qrCodeOptions,
          type: 'svg'
        });
        // Convert SVG string to data URL
        dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(dataUrl)}`;
      } else {
        dataUrl = await QRCode.toDataURL(qrOptions.content, {
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
        // Format: WIFI:S:SSID;T:WPA;P:password;;
        try {
          const wifiData = JSON.parse(content);
          return `WIFI:S:${wifiData.ssid};T:${wifiData.encryption || 'WPA'};P:${wifiData.password};;`;
        } catch (e) {
          return content;
        }
      // For other types, we would implement specific formatters
      default:
        return content;
    }
  };

  const updateOptions = (newOptions: Partial<QRCodeOptions>) => {
    setQrOptions((prevOptions) => {
      // If content type changes, we might want to format the content
      if (newOptions.contentType && newOptions.contentType !== prevOptions.contentType) {
        const formattedContent = newOptions.content || prevOptions.content;
        return {
          ...prevOptions,
          ...newOptions,
          content: formatContentByType(formattedContent, newOptions.contentType)
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
