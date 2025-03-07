
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ColorPicker } from "@/components/ui/color-picker";
import { 
  QRCodeOptions, 
  QRCodeErrorCorrectionLevel, 
  QRCodeOutputFormat 
} from "@/hooks/use-qrcode";

interface QRCodeFormProps {
  options: QRCodeOptions;
  onUpdateOptions: (options: Partial<QRCodeOptions>) => void;
  onDownload: () => void;
}

const QRCodeForm: React.FC<QRCodeFormProps> = ({ options, onUpdateOptions, onDownload }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onUpdateOptions({ [name]: value });
  };

  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="content">QR Code Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Enter URL or text..."
              value={options.content}
              onChange={handleInputChange}
              className="min-h-24"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="size">Size (px)</Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="size"
                  min={100}
                  max={500}
                  step={10}
                  value={[options.size]}
                  onValueChange={(values) => onUpdateOptions({ size: values[0] })}
                  className="flex-1"
                />
                <span className="text-sm font-medium w-12 text-right">
                  {options.size}px
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="margin">Margin</Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="margin"
                  min={0}
                  max={10}
                  step={1}
                  value={[options.margin]}
                  onValueChange={(values) => onUpdateOptions({ margin: values[0] })}
                  className="flex-1"
                />
                <span className="text-sm font-medium w-12 text-right">
                  {options.margin}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ColorPicker
              id="color"
              label="QR Code Color"
              value={options.color}
              onChange={(value) => onUpdateOptions({ color: value })}
            />
            
            <ColorPicker
              id="bgColor"
              label="Background Color"
              value={options.bgColor}
              onChange={(value) => onUpdateOptions({ bgColor: value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="errorCorrectionLevel">Error Correction Level</Label>
              <Select
                value={options.errorCorrectionLevel}
                onValueChange={(value) => 
                  onUpdateOptions({ 
                    errorCorrectionLevel: value as QRCodeErrorCorrectionLevel 
                  })
                }
              >
                <SelectTrigger id="errorCorrectionLevel">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">Low (7%)</SelectItem>
                  <SelectItem value="M">Medium (15%)</SelectItem>
                  <SelectItem value="Q">Quartile (25%)</SelectItem>
                  <SelectItem value="H">High (30%)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="outputFormat">Output Format</Label>
              <Select
                value={options.outputFormat}
                onValueChange={(value) => 
                  onUpdateOptions({ 
                    outputFormat: value as QRCodeOutputFormat 
                  })
                }
              >
                <SelectTrigger id="outputFormat">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="png">PNG</SelectItem>
                  <SelectItem value="svg">SVG</SelectItem>
                  <SelectItem value="jpg">JPG</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={onDownload} 
            className="w-full"
            disabled={!options.content}
          >
            Download QR Code
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default QRCodeForm;
