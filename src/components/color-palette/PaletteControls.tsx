
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
    <div className="bg-gray-900 text-white p-2 md:p-3 flex flex-wrap justify-between items-center">
      <div className="flex items-center gap-1 md:gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onGenerate} variant="ghost" size="sm" className="text-white text-xs md:text-sm">
              <RefreshCw className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              <span className="hidden xs:inline">Generate</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Generate new colors (Space)</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onCopy} variant="ghost" size="sm" className="text-white text-xs md:text-sm">
              <Copy className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              <span className="hidden xs:inline">Copy</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy colors to clipboard</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onExport} variant="ghost" size="sm" className="text-white text-xs md:text-sm">
              <Download className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              <span className="hidden xs:inline">Export</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Download as file</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex items-center gap-1 md:gap-3">
        <Button
          variant="ghost"
          size="sm"
          className="text-white text-xs md:text-sm"
          onClick={onShowShortcuts}
        >
          <Info className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
          <span className="hidden xs:inline">Shortcuts</span>
        </Button>

        <Button variant="ghost" size="sm" className="text-white text-xs md:text-sm" onClick={onToggleSettings}>
          <Settings className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
          <span className="hidden xs:inline">Settings</span>
        </Button>
      </div>
    </div>
  );
};

export default PaletteControls;
