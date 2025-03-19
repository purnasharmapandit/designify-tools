
import React from "react";
import { PenTool } from "lucide-react";

const LogoMakerHero = () => {
  const logoMakerImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 absolute -right-5 -top-5 z-10">
        <PenTool className="w-12 h-12 text-pink-500" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            LOGO
          </div>
        </div>
        <div className="mt-4 border-t pt-4">
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-pink-500"></div>
              <div className="w-6 h-6 rounded-full bg-purple-500"></div>
              <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-3 rounded-full bg-gray-300"></div>
              <div className="w-12 h-3 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  return logoMakerImage;
};

export default LogoMakerHero;
