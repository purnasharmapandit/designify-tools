
import React from "react";
import { Mail } from "lucide-react";

const SignatureHeader: React.FC = () => {
  return (
    <div className="text-center mb-10 pt-16">
      <div className="inline-block p-3 bg-primary/10 rounded-full text-primary mb-4">
        <Mail className="h-8 w-8" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-3">
        Email Signature Generator
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Create professional email signatures in minutes
      </p>
    </div>
  );
};

export default SignatureHeader;
