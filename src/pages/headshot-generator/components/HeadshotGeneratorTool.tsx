
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Upload, 
  User, 
  Briefcase, 
  Brush, 
  ImagePlus, 
  Download,
  RefreshCcw
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { checkGenerationEligibility } from "@/services/generationLimits";
import { toast } from "sonner";

const HeadshotGeneratorTool = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState("professional");
  const [selectedBackground, setSelectedBackground] = useState("office");
  const [activeTab, setActiveTab] = useState("upload");
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setUploadedImage(e.target.result as string);
          setGeneratedImages([]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinueToCustomize = () => {
    setActiveTab("customize");
  };

  const generateHeadshots = async () => {
    if (!uploadedImage) return;
    
    // Check if user is authenticated
    if (!user) {
      navigate("/auth", { 
        state: { 
          returnTo: "/headshot-generator", 
          requiresSignUp: true 
        }
      });
      toast.info("Please create an account to generate headshots");
      return;
    }
    
    // Check eligibility for headshot generation
    const eligibility = await checkGenerationEligibility('business_card');
    if (!eligibility.canGenerate) {
      if (eligibility.redirectToAuth) {
        navigate("/auth", { 
          state: { 
            returnTo: "/headshot-generator",
            requiresSignUp: true 
          }
        });
        return;
      }
      
      if (eligibility.redirectToSubscription) {
        navigate("/pricing");
        return;
      }
      
      toast.error(eligibility.message);
      return;
    }
    
    setIsGenerating(true);
    
    // This is a mock implementation - in a real app, you would call an API
    setTimeout(() => {
      // Mock generated images - in a real app these would come from your AI service
      const mockImages = [
        "https://placehold.co/400x400/blue/white?text=Professional+Headshot+1",
        "https://placehold.co/400x400/indigo/white?text=Professional+Headshot+2",
        "https://placehold.co/400x400/purple/white?text=Professional+Headshot+3",
        "https://placehold.co/400x400/pink/white?text=Professional+Headshot+4"
      ];
      
      setGeneratedImages(mockImages);
      setIsGenerating(false);
    }, 2000);
  };

  const downloadImage = (url: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-headshot.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div id="generator" className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upload">Upload Photo</TabsTrigger>
            <TabsTrigger value="customize">Customize Style</TabsTrigger>
            <TabsTrigger value="results" disabled={generatedImages.length === 0}>
              Your Headshots
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload" className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center"
            >
              <Card className="w-full max-w-xl mx-auto bg-slate-50">
                <CardContent className="p-6">
                  {!uploadedImage ? (
                    <div 
                      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => document.getElementById('photo-upload')?.click()}
                    >
                      <div className="mx-auto flex justify-center">
                        <Upload className="h-12 w-12 text-gray-400" />
                      </div>
                      <p className="mt-4 text-md text-gray-600">
                        Drop your photo here or click to browse
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        JPG, PNG or WEBP, max 5MB
                      </p>
                      <input
                        id="photo-upload"
                        type="file"
                        className="hidden"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handleImageUpload}
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="relative mx-auto mb-4 max-w-[300px]">
                        <img 
                          src={uploadedImage} 
                          alt="Uploaded photo" 
                          className="mx-auto rounded-lg max-h-[300px] max-w-full object-contain"
                        />
                        <button 
                          onClick={() => setUploadedImage(null)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 text-xs"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="text-md text-gray-700 mb-4">
                        Photo uploaded! You can continue to customization.
                      </p>
                      <div className="flex justify-center gap-4">
                        <Button
                          variant="outline"
                          onClick={() => setUploadedImage(null)}
                          className="w-full max-w-[150px]"
                        >
                          Change Photo
                        </Button>
                        <Button
                          onClick={handleContinueToCustomize}
                          className="w-full max-w-[150px]"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <div className="mt-8 text-center max-w-xl mx-auto">
                <h3 className="font-semibold text-lg mb-2">Photo Guidelines</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Use a front-facing photo with your face clearly visible</li>
                  <li>• Ensure good lighting - natural daylight works best</li>
                  <li>• Plain or simple backgrounds work better</li>
                  <li>• Avoid sunglasses or hats that cover your face</li>
                </ul>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="customize" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {uploadedImage ? (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Card className="bg-slate-50 h-full">
                      <CardContent className="p-6">
                        <div className="mb-6">
                          <Label htmlFor="style" className="text-md font-medium block mb-2">
                            Headshot Style
                          </Label>
                          <Select 
                            value={selectedStyle} 
                            onValueChange={setSelectedStyle}
                          >
                            <SelectTrigger id="style">
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="professional">Professional / Corporate</SelectItem>
                              <SelectItem value="creative">Creative / Casual</SelectItem>
                              <SelectItem value="executive">Executive / Leadership</SelectItem>
                              <SelectItem value="modern">Modern / Tech</SelectItem>
                              <SelectItem value="formal">Formal / Traditional</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="mb-6">
                          <Label htmlFor="background" className="text-md font-medium block mb-2">
                            Background
                          </Label>
                          <Select 
                            value={selectedBackground} 
                            onValueChange={setSelectedBackground}
                          >
                            <SelectTrigger id="background">
                              <SelectValue placeholder="Select background" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="office">Office</SelectItem>
                              <SelectItem value="gradient">Gradient</SelectItem>
                              <SelectItem value="solid">Solid Color</SelectItem>
                              <SelectItem value="blur">Blurred</SelectItem>
                              <SelectItem value="studio">Studio</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="mt-8 flex justify-center">
                          <Button 
                            onClick={generateHeadshots}
                            disabled={isGenerating}
                            className="w-full"
                            size="lg"
                          >
                            {isGenerating ? (
                              <>
                                <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                                Generating...
                              </>
                            ) : (
                              <>Generate Headshots</>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                        <div className="text-center mb-4">
                          <h3 className="font-bold text-lg">Your Photo</h3>
                          <p className="text-sm text-gray-500">
                            We'll transform this into professional headshots
                          </p>
                        </div>
                        <div className="mx-auto mb-4 max-w-[250px]">
                          <img 
                            src={uploadedImage} 
                            alt="Uploaded photo" 
                            className="mx-auto rounded-lg max-h-[250px] max-w-full object-contain"
                          />
                        </div>
                        
                        <div className="flex flex-col gap-2 mt-4 text-center">
                          <div className="text-sm text-gray-500">
                            <div className="flex items-center mb-1">
                              <span className="font-medium mr-2">Style:</span> 
                              {selectedStyle === "professional" && "Professional / Corporate"}
                              {selectedStyle === "creative" && "Creative / Casual"}
                              {selectedStyle === "executive" && "Executive / Leadership"}
                              {selectedStyle === "modern" && "Modern / Tech"}
                              {selectedStyle === "formal" && "Formal / Traditional"}
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium mr-2">Background:</span> 
                              {selectedBackground === "office" && "Office"}
                              {selectedBackground === "gradient" && "Gradient"}
                              {selectedBackground === "solid" && "Solid Color"}
                              {selectedBackground === "blur" && "Blurred"}
                              {selectedBackground === "studio" && "Studio"}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <ImagePlus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">No photo uploaded</h3>
                  <p className="mt-2 text-gray-500">
                    Please upload a photo first.
                  </p>
                  <Button
                    variant="outline" 
                    onClick={() => document.getElementById('photo-upload')?.click()}
                    className="mt-4"
                  >
                    Upload Photo
                  </Button>
                </div>
              )}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="results" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {generatedImages.length > 0 ? (
                <>
                  <div className="text-center mb-8">
                    <h3 className="font-bold text-xl mb-2">Your AI-Generated Headshots</h3>
                    <p className="text-gray-600">
                      Choose your favorite and download in high resolution
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {generatedImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group"
                      >
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <img
                            src={image}
                            alt={`Generated headshot ${index + 1}`}
                            className="w-full aspect-square object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <Button
                              onClick={() => downloadImage(image)}
                              variant="secondary"
                              size="sm"
                              className="bg-white text-gray-800"
                            >
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-8 space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => generateHeadshots()}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                          Regenerating...
                        </>
                      ) : (
                        <>Regenerate Headshots</>
                      )}
                    </Button>
                    <Button
                      onClick={() => {
                        setUploadedImage(null);
                        setGeneratedImages([]);
                        document.getElementById('photo-upload')?.click();
                      }}
                    >
                      Start Over
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <Download className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">No headshots generated yet</h3>
                  <p className="mt-2 text-gray-500">
                    Please upload a photo and generate headshots first.
                  </p>
                  <Button
                    onClick={() => document.getElementById('photo-upload')?.click()}
                    className="mt-4"
                  >
                    Upload Photo
                  </Button>
                </div>
              )}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HeadshotGeneratorTool;
