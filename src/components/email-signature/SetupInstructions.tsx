
import React from "react";
import { Info } from "lucide-react";
import { getEmailClientInstructions } from "@/utils/email-signature-utils";

const SetupInstructions: React.FC = () => {
  const emailClientInstructions = getEmailClientInstructions();

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-indigo-100">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 rounded-full p-2">
            <Info className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Setup Instructions</h3>
            <p className="text-indigo-100 text-sm">Follow these steps to add your signature</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 divide-x divide-indigo-100">
        {Object.entries(emailClientInstructions).map(([client, steps], index) => (
          <div 
            key={client}
            className={`p-6 ${index % 2 === 0 ? 'bg-gradient-to-r from-indigo-50/30 to-white' : 'bg-white'}`}
          >
            <h4 className="font-medium text-indigo-800 mb-3 flex items-center">
              <span className="flex items-center justify-center bg-indigo-100 text-indigo-600 w-6 h-6 rounded-full text-sm mr-2">
                {index + 1}
              </span>
              {client.charAt(0).toUpperCase() + client.slice(1)}
            </h4>
            <ol className="space-y-2 pl-8 list-decimal text-sm text-gray-600">
              {steps.map((step, stepIndex) => (
                <li key={stepIndex} className="leading-relaxed">{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetupInstructions;
