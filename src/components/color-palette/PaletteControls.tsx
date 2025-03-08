
import React from "react";
import { RefreshCw, Download, Copy, Info, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ExportFormat } from "@/types/color-palette";

interface PaletteControlsProps {
  onGenerate: () => void;
  onCopy: () => void;
  onExport: () => void;
  onShowShortcuts: () => void;
  onToggleSettings: () => void;
  exportFormat: ExportFormat;
}

const PaletteControls = ({
  onGenerate,
  onCopy,
  onExport,
  onShowShortcuts,
  onToggleSettings,
  exportFormat
}: PaletteControlsProps) => {
  return (
    <div className="bg-gray-900 text-white p-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onGenerate} variant="ghost" className="text-white">
              <RefreshCw className="h-4 w-4 mr-2" />
              Generate
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Generate new colors (Space)</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onCopy} variant="ghost" className="text-white">
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy colors to clipboard</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onExport} variant="ghost" className="text-white">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Download as file</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          className="text-white"
          onClick={onShowShortcuts}
        >
          <Info className="h-4 w-4 mr-2" />
          Shortcuts
        </Button>

        <Button variant="ghost" className="text-white" onClick={onToggleSettings}>
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </div>
    </div>
  );
};

export default PaletteControls;
