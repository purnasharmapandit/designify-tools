
import React from "react";
import { Button } from "@/components/ui/button";

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShortcutsModal = ({ isOpen, onClose }: ShortcutsModalProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full" onClick={e => e.stopPropagation()}>
        <h3 className="text-xl font-bold text-white mb-4">Keyboard Shortcuts</h3>
        <div className="space-y-3 text-white">
          <div className="flex justify-between items-center">
            <div>
              <span className="block">Generate new palette</span>
              <span className="text-xs text-gray-400">Creates a completely random palette</span>
            </div>
            <kbd className="px-2 py-1 bg-gray-800 rounded text-sm">Space</kbd>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="block">Toggle settings</span>
              <span className="text-xs text-gray-400">Open/close the settings panel</span>
            </div>
            <kbd className="px-2 py-1 bg-gray-800 rounded text-sm">S</kbd>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="block">Lock/unlock colors</span>
              <span className="text-xs text-gray-400">Prevent a color from changing</span>
            </div>
            <kbd className="px-2 py-1 bg-gray-800 rounded text-sm">1-5</kbd>
          </div>
        </div>
        <Button className="w-full mt-6" onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default ShortcutsModal;
