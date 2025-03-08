
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
        <div className="space-y-2 text-white">
          <div className="flex justify-between">
            <span>Generate new palette</span>
            <kbd className="px-2 py-1 bg-gray-800 rounded">Space</kbd>
          </div>
          <div className="flex justify-between">
            <span>Toggle settings</span>
            <kbd className="px-2 py-1 bg-gray-800 rounded">S</kbd>
          </div>
          <div className="flex justify-between">
            <span>Lock/unlock colors</span>
            <kbd className="px-2 py-1 bg-gray-800 rounded">1-5</kbd>
          </div>
        </div>
        <Button className="w-full mt-4" onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default ShortcutsModal;
