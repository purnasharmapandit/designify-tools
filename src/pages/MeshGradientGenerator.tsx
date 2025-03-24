
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeshGradientHero from "@/components/mesh-gradient/MeshGradientHero";
import MeshGradientFeatures from "@/components/mesh-gradient/MeshGradientFeatures";
import MeshGradientHowItWorks from "@/components/mesh-gradient/MeshGradientHowItWorks";
import MeshGradientFAQ from "@/components/mesh-gradient/MeshGradientFAQ";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, Copy, RefreshCw, Palette, Plus, X, Sliders, Square, Move } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { ColorPicker } from "@/components/ui/color-picker";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import { useIsMobile } from "@/hooks/use-mobile";

interface GradientColor {
  color: string;
  position: {
    x: number;
    y: number;
  };
  size: number;
}

const canvasSizes = [
  { label: "1:1", value: { width: 800, height: 800 } },
  { label: "2:1", value: { width: 1000, height: 500 } },
  { label: "3:1", value: { width: 1200, height: 400 } },
  { label: "3:2", value: { width: 1200, height: 800 } },
  { label: "4:3", value: { width: 1200, height: 900 } },
  { label: "7:4", value: { width: 1400, height: 800 } },
  { label: "8:7", value: { width: 800, height: 700 } },
  { label: "16:9", value: { width: 1600, height: 900 } },
  { label: "1:2", value: { width: 500, height: 1000 } },
  { label: "1:3", value: { width: 400, height: 1200 } },
  { label: "2:3", value: { width: 800, height: 1200 } },
  { label: "3:4", value: { width: 900, height: 1200 } },
  { label: "4:7", value: { width: 800, height: 1400 } },
  { label: "7:8", value: { width: 700, height: 800 } },
  { label: "9:16", value: { width: 900, height: 1600 } },
];

const MeshGradientGenerator = () => {
  const [colors, setColors] = useState<GradientColor[]>([
    { color: "#8B5CF6", position: { x: 70, y: 20 }, size: 50 },
    { color: "#3B82F6", position: { x: 20, y: 60 }, size: 50 },
    { color: "#EC4899", position: { x: 50, y: 80 }, size: 60 },
  ]);
  const [grain, setGrain] = useState(0);
  const [blur, setBlur] = useState(0);
  const [selectedSize, setSelectedSize] = useState(canvasSizes[0]);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  };

  const generateRandomPosition = () => {
    return {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    };
  };

  const randomizeColors = () => {
    const newColors = colors.map(color => ({
      color: generateRandomColor(),
      position: generateRandomPosition(),
      size: Math.floor(Math.random() * 30) + 40,
    }));
    setColors(newColors);
    toast.success("Generated new colors and positions!");
  };

  const addColor = () => {
    if (colors.length < 6) {
      const newColor: GradientColor = {
        color: generateRandomColor(),
        position: generateRandomPosition(),
        size: 50,
      };
      setColors([...colors, newColor]);
    } else {
      toast.error("Maximum 6 colors allowed");
    }
  };

  const removeColor = (index: number) => {
    if (colors.length > 2) {
      const newColors = [...colors];
      newColors.splice(index, 1);
      setColors(newColors);
    } else {
      toast.error("Minimum 2 colors required");
    }
  };

  const updateColor = (index: number, newColor: string) => {
    const newColors = [...colors];
    newColors[index] = { ...newColors[index], color: newColor };
    setColors(newColors);
  };

  const updateColorPosition = (index: number, position: { x: number, y: number }) => {
    const newColors = [...colors];
    newColors[index] = { ...newColors[index], position };
    setColors(newColors);
  };

  const updateColorSize = (index: number, size: number) => {
    const newColors = [...colors];
    newColors[index] = { ...newColors[index], size };
    setColors(newColors);
  };

  const handleMouseDown = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveColorIndex(index);
    setIsDragging(true);
  };

  const handleTouchStart = (index: number, e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveColorIndex(index);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && activeColorIndex !== null && previewRef.current) {
      const rect = previewRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      updateColorPosition(activeColorIndex, { x, y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging && activeColorIndex !== null && previewRef.current) {
      const touch = e.touches[0];
      const rect = previewRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
      updateColorPosition(activeColorIndex, { x, y });
    }
  };

  const handleMouseUp = () => {
    if (isDragging && activeColorIndex !== null) {
      toast.success(`Color ${activeColorIndex + 1} position updated`);
    }
    setIsDragging(false);
    setActiveColorIndex(null);
  };

  const handleTouchEnd = () => {
    if (isDragging && activeColorIndex !== null) {
      toast.success(`Color ${activeColorIndex + 1} position updated`);
    }
    setIsDragging(false);
    setActiveColorIndex(null);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };

    const handleGlobalTouchEnd = () => {
      if (isDragging) {
        handleTouchEnd();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && activeColorIndex !== null && previewRef.current) {
        const rect = previewRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
        updateColorPosition(activeColorIndex, { x, y });
      }
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging && activeColorIndex !== null && previewRef.current) {
        const touch = e.touches[0];
        const rect = previewRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
        const y = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
        updateColorPosition(activeColorIndex, { x, y });
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalTouchEnd);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalTouchEnd);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
    };
  }, [isDragging, activeColorIndex]);

  const copyCSS = () => {
    let gradients = colors.map(({ color, position, size }) => 
      `radial-gradient(circle at ${position.x}% ${position.y}%, ${color} 0%, transparent ${size}%)`
    ).join(', ');
    
    const cssText = `background: ${gradients};
filter: blur(${blur}px);
${grain > 0 ? 'background-blend-mode: multiply;' : ''}`;
    
    navigator.clipboard.writeText(cssText);
    toast.success("CSS copied to clipboard!");
  };

  const downloadGradient = () => {
    if (previewRef.current) {
      const markersElements = previewRef.current.querySelectorAll('.color-marker');
      
      markersElements.forEach(marker => {
        (marker as HTMLElement).style.display = 'none';
      });
      
      html2canvas(previewRef.current).then(canvas => {
        markersElements.forEach(marker => {
          (marker as HTMLElement).style.display = 'flex';
        });
        
        const link = document.createElement('a');
        link.download = `mesh-gradient-${new Date().getTime()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        toast.success("Gradient downloaded!");
      });
    }
  };

  const gradientStyle: React.CSSProperties = {
    background: colors.map(({ color, position, size }) => 
      `radial-gradient(circle at ${position.x}% ${position.y}%, ${color} 0%, transparent ${size}%)`
    ).join(', '),
    filter: `blur(${blur}px)`,
    width: "100%",
    height: "300px",
    position: "relative",
  };

  const grainOverlay: React.CSSProperties = grain > 0 ? {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    opacity: grain / 100,
    mixBlendMode: "multiply" as "multiply",
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } : {};

  const aspectRatio = selectedSize.value.width / selectedSize.value.height;
  const previewHeight = aspectRatio < 1 ? 300 : Math.floor(300 / aspectRatio);
  const previewWidth = isMobile ? "100%" : (aspectRatio > 1 ? Math.min(300 * aspectRatio, 600) : 300);

  const updatedGradientStyle: React.CSSProperties = {
    ...gradientStyle,
    height: `${previewHeight}px`,
    maxWidth: typeof previewWidth === "number" ? `${previewWidth}px` : previewWidth,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Mesh Gradient Generator | Create Beautiful Gradients</title>
        <meta 
          name="description" 
          content="Create stunning mesh gradients for your designs with our free mesh gradient generator tool. Perfect for web designs, presentations, and social media."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <MeshGradientHero />
        
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 md:mb-4">
                Generate Your Mesh Gradient
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Customize your gradient with the controls below
              </p>
            </div>
            
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
              {isMobile && (
                <div className="lg:hidden order-first mb-4">
                  <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">Preview</h3>
                    <div 
                      ref={previewRef}
                      className="relative overflow-hidden mb-4 cursor-move mx-auto touch-none"
                      style={updatedGradientStyle}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      <div style={grainOverlay}></div>
                      
                      {colors.map((colorData, index) => (
                        <div 
                          key={`position-${index}`}
                          className="absolute w-6 h-6 -ml-3 -mt-3 rounded-full border-2 border-white shadow-md flex items-center justify-center cursor-move color-marker"
                          style={{
                            backgroundColor: colorData.color,
                            left: `${colorData.position.x}%`,
                            top: `${colorData.position.y}%`,
                            zIndex: 10,
                            transform: isDragging && activeColorIndex === index ? 'scale(1.1)' : 'scale(1)',
                            transition: 'transform 0.1s ease'
                          }}
                          onMouseDown={(e) => handleMouseDown(index, e)}
                          onTouchStart={(e) => handleTouchStart(index, e)}
                          aria-label={`Drag to move color ${index + 1}`}
                          title={`Drag to move color ${index + 1}`}
                        >
                          <Move className="h-3 w-3 text-white opacity-80 pointer-events-none" />
                        </div>
                      ))}
                      
                      {colors.length === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50 text-gray-500">
                          <p>Add colors to start creating your gradient</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2 mb-3">
                      <Button onClick={copyCSS} className="flex-1 text-xs py-1 h-auto">
                        <Copy className="h-3 w-3 mr-1" />
                        Copy CSS
                      </Button>
                      <Button onClick={downloadGradient} variant="outline" className="flex-1 text-xs py-1 h-auto">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="lg:col-span-1 space-y-4 md:space-y-6 bg-white p-4 md:p-6 rounded-xl shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold">Colors</h3>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={randomizeColors}
                        className="h-8 text-xs"
                      >
                        <RefreshCw className="h-3 w-3 mr-1" />
                        Randomize
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={addColor}
                        disabled={colors.length >= 6}
                        className="h-8 text-xs"
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 md:gap-6 max-h-[300px] overflow-y-auto pr-1 pb-1">
                    {colors.map((colorData, index) => (
                      <div key={index} className="bg-gray-50 p-3 md:p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-medium text-sm">Color {index + 1}</h4>
                          {colors.length > 2 && (
                            <button
                              className="bg-white rounded-full shadow-sm p-1 hover:bg-gray-100"
                              onClick={() => removeColor(index)}
                            >
                              <X className="h-3 w-3 text-gray-500" />
                            </button>
                          )}
                        </div>
                        
                        <div className="space-y-3">
                          <ColorPicker
                            label="Color"
                            id={`color-${index}`}
                            value={colorData.color}
                            onChange={(value) => updateColor(index, value)}
                          />
                          
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-medium">Position X</label>
                              <span className="text-xs text-gray-500">{colorData.position.x}%</span>
                            </div>
                            <Slider
                              value={[colorData.position.x]}
                              min={0}
                              max={100}
                              step={1}
                              onValueChange={(value) => updateColorPosition(index, { ...colorData.position, x: value[0] })}
                            />
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-medium">Position Y</label>
                              <span className="text-xs text-gray-500">{colorData.position.y}%</span>
                            </div>
                            <Slider
                              value={[colorData.position.y]}
                              min={0}
                              max={100}
                              step={1}
                              onValueChange={(value) => updateColorPosition(index, { ...colorData.position, y: value[0] })}
                            />
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-medium">Size</label>
                              <span className="text-xs text-gray-500">{colorData.size}%</span>
                            </div>
                            <Slider
                              value={[colorData.size]}
                              min={10}
                              max={100}
                              step={1}
                              onValueChange={(value) => updateColorSize(index, value[0])}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-base md:text-lg font-semibold">Effects</h3>
                  
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Grain</label>
                      <span className="text-xs text-gray-500">{grain}%</span>
                    </div>
                    <Slider
                      value={[grain]}
                      min={0}
                      max={100}
                      step={1}
                      onValueChange={(value) => setGrain(value[0])}
                    />
                  </div>
                  
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Blur</label>
                      <span className="text-xs text-gray-500">{blur}px</span>
                    </div>
                    <Slider
                      value={[blur]}
                      min={0}
                      max={100}
                      step={1}
                      onValueChange={(value) => setBlur(value[0])}
                    />
                  </div>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-base md:text-lg font-semibold">Canvas Size</h3>
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      onClick={() => setShowSizeDropdown(!showSizeDropdown)}
                      className="w-full justify-between text-sm"
                    >
                      <div className="flex items-center">
                        <Square className="h-3 w-3 mr-2" />
                        {selectedSize.label}
                      </div>
                      <span className="text-xs text-gray-500">
                        {selectedSize.value.width} × {selectedSize.value.height}
                      </span>
                    </Button>
                    
                    {showSizeDropdown && (
                      <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg p-2 max-h-[250px] overflow-y-auto border">
                        <div className="grid grid-cols-3 gap-1">
                          {canvasSizes.map((size, index) => (
                            <Button
                              key={index}
                              variant="ghost"
                              size="sm"
                              className={`justify-center text-xs py-1 h-8 ${selectedSize.label === size.label ? 'bg-primary/10' : ''}`}
                              onClick={() => {
                                setSelectedSize(size);
                                setShowSizeDropdown(false);
                              }}
                            >
                              {size.label}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="pt-3 md:pt-4 space-y-2 md:space-y-3 lg:block hidden">
                  <Button onClick={copyCSS} className="w-full">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy CSS
                  </Button>
                  <Button onClick={downloadGradient} variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Image
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:block lg:col-span-2">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Preview</h3>
                  <div 
                    ref={previewRef}
                    className="relative overflow-hidden mb-4 cursor-move mx-auto"
                    style={updatedGradientStyle}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div style={grainOverlay}></div>
                    
                    {colors.map((colorData, index) => (
                      <div 
                        key={`position-${index}`}
                        className="absolute w-6 h-6 -ml-3 -mt-3 rounded-full border-2 border-white shadow-md flex items-center justify-center cursor-move color-marker"
                        style={{
                          backgroundColor: colorData.color,
                          left: `${colorData.position.x}%`,
                          top: `${colorData.position.y}%`,
                          zIndex: 10,
                          transform: isDragging && activeColorIndex === index ? 'scale(1.1)' : 'scale(1)',
                          transition: 'transform 0.1s ease'
                        }}
                        onMouseDown={(e) => handleMouseDown(index, e)}
                        onTouchStart={(e) => handleTouchStart(index, e)}
                        aria-label={`Drag to move color ${index + 1}`}
                        title={`Drag to move color ${index + 1}`}
                      >
                        <Move className="h-3 w-3 text-white opacity-80 pointer-events-none" />
                      </div>
                    ))}
                    
                    {colors.length === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50 text-gray-500">
                        <p>Add colors to start creating your gradient</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    <p className="font-medium mb-1">CSS Code:</p>
                    <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-xs">
                      {`background: ${colors.map(({ color, position, size }) => 
                        `radial-gradient(circle at ${position.x}% ${position.y}%, ${color} 0%, transparent ${size}%)`
                      ).join(',\n             ')};
filter: blur(${blur}px);
${grain > 0 ? 'background-blend-mode: multiply;' : ''}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <MeshGradientFeatures />
        <MeshGradientHowItWorks />
        <MeshGradientFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default MeshGradientGenerator;
