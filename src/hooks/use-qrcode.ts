
import { useState, useEffect } from 'react';
import QRCode from 'qrcode';

export type QRCodeErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
export type QRCodeOutputFormat = 'png' | 'svg' | 'jpg';

export interface QRCodeOptions {
  content: string;
  size: number;
  color: string;
  bgColor: string;
  errorCorrectionLevel: QRCodeErrorCorrectionLevel;
  margin: number;
  outputFormat: QRCodeOutputFormat;
}

const defaultOptions: QRCodeOptions = {
  content: '',
  size: 200,
  color: '#000000',
  bgColor: '#FFFFFF',
  errorCorrectionLevel: 'M',
  margin: 4,
  outputFormat: 'png'
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

  const updateOptions = (newOptions: Partial<QRCodeOptions>) => {
    setQrOptions((prevOptions) => ({
      ...prevOptions,
      ...newOptions
    }));
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
