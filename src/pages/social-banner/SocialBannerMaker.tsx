
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, Layout, Image, Share2, Download, ImagePlus, Paintbrush, Palette, Sparkles, BellPlus } from "lucide-react";
import { Link } from "react-router-dom";
import StandardHeroSection from "@/components/shared/StandardHeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ComingSoonBanner from "@/components/ComingSoonBanner";

const SocialBannerMaker = () => {
  const bannerImage = (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 absolute -right-5 -top-5 z-10">
        <Share2 className="w-12 h-12 text-blue-500" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[2/1] col-span-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
            <Layout className="w-16 h-16 text-blue-500" />
          </div>
          <div className="aspect-[1/1] rounded-lg bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center">
            <Image className="w-8 h-8 text-pink-500" />
          </div>
          <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
            <Share2 className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Social Media Banner Maker | Create Custom Banners for All Platforms</title>
        <meta name="description" content="Design professional social media banners for Facebook, Twitter, LinkedIn, YouTube and more. Our easy-to-use banner maker helps you create eye-catching graphics that stand out." />
        <meta name="keywords" content="social media banner, banner maker, social media graphics, Facebook cover, Twitter header, LinkedIn banner, YouTube banner" />
        <meta property="og:title" content="Social Media Banner Maker | Create Custom Banners for All Platforms" />
        <meta property="og:description" content="Design professional social media banners for Facebook, Twitter, LinkedIn, YouTube and more. Our easy-to-use banner maker helps you create eye-catching graphics that stand out." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media Banner Maker | Create Custom Banners for All Platforms" />
        <meta name="twitter:description" content="Design professional social media banners for Facebook, Twitter, LinkedIn, YouTube and more. Our easy-to-use banner maker helps you create eye-catching graphics." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-8">
        <StandardHeroSection
          toolLabel="Social Banner Maker"
          title="Create"
          highlightedText="Stunning Social Banners"
          restOfTitle="in Minutes"
          description="Design eye-catching banners for all your social media platforms with our easy-to-use banner maker. Stand out with professional graphics."
          features={[
            { icon: <Check className="h-4 w-4" />, text: "Multiple Sizes" },
            { icon: <Check className="h-4 w-4" />, text: "Custom Templates" },
            { icon: <Check className="h-4 w-4" />, text: "One-Click Download" }
          ]}
          image={bannerImage}
          bgColor="bg-blue-900"
          textColor="text-white"
          actionButton={
            <Link to="/contact-us?subject=Social%20Banner%20Maker%20Waitlist">
              <Button 
                size="lg" 
                className="rounded-full px-8 font-medium"
              >
                Join Waitlist <BellPlus className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          }
        />
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Perfect Social Media Banners</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ideal for Facebook, Twitter, LinkedIn, YouTube and more</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ImagePlus className="h-10 w-10 text-blue-500" />,
                  title: "Choose a Template",
                  description: "Start with one of our professionally designed templates for various platforms and purposes."
                },
                {
                  icon: <Layout className="h-10 w-10 text-blue-500" />,
                  title: "Customize Content",
                  description: "Add your text, upload images, adjust colors and fonts to match your brand."
                },
                {
                  icon: <Image className="h-10 w-10 text-blue-500" />,
                  title: "Perfect Sizing",
                  description: "All templates are preset to the ideal dimensions for each social media platform."
                },
                {
                  icon: <Share2 className="h-10 w-10 text-blue-500" />,
                  title: "Cross-Platform Ready",
                  description: "Create banners for Facebook, Twitter, LinkedIn, YouTube and more in minutes."
                },
                {
                  icon: <Download className="h-10 w-10 text-blue-500" />,
                  title: "Easy Export",
                  description: "Download your banners in high-resolution formats ready for immediate upload."
                },
                {
                  icon: <Layout className="h-10 w-10 text-blue-500" />,
                  title: "Brand Consistency",
                  description: "Save your brand colors and assets to maintain consistency across all your banners."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Create stunning social media banners in just three simple steps</p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  icon: <ImagePlus className="h-12 w-12 text-indigo-500" />,
                  title: "1. Select a Platform",
                  description: "Choose the social network you need a banner for, and we'll automatically set up the correct dimensions."
                },
                {
                  icon: <Paintbrush className="h-12 w-12 text-indigo-500" />,
                  title: "2. Customize Your Design",
                  description: "Add your text, logo, images, and adjust colors. Choose from our templates or start from scratch."
                },
                {
                  icon: <Download className="h-12 w-12 text-indigo-500" />,
                  title: "3. Download & Share",
                  description: "Once you're satisfied with your design, download your banner in high resolution and upload it to your profile."
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Enhanced Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Features</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Powerful tools to make your social media banners stand out</p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Palette className="h-10 w-10 text-purple-500" />,
                  title: "AI Color Suggestions",
                  description: "Our intelligent color palette generator suggests complementary colors that match your brand and improve visual appeal."
                },
                {
                  icon: <Image className="h-10 w-10 text-blue-500" />,
                  title: "Image Enhancement",
                  description: "Automatically optimize your uploaded images with one-click filters, adjustments, and background removal."
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-amber-500" />,
                  title: "AI Text Generation",
                  description: "Get suggestions for compelling headlines and captions that drive engagement on your banners."
                },
                {
                  icon: <Layout className="h-10 w-10 text-green-500" />,
                  title: "Smart Layouts",
                  description: "Dynamic layouts that automatically adjust based on your content while maintaining visual hierarchy."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full shadow-sm hover:shadow-md transition-all overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-gray-100">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our Social Banner Maker
              </p>
            </motion.div>
            
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "What social media platforms are supported?",
                  answer: "Our social banner maker supports all major platforms including Facebook, Twitter, LinkedIn, YouTube, Instagram, Pinterest, Twitch, and more. Each comes with preset dimensions optimized for the platform."
                },
                {
                  question: "Do I need design experience to use this tool?",
                  answer: "Not at all! Our tool is designed to be user-friendly for beginners while offering advanced features for experienced designers. With our templates and intuitive interface, anyone can create professional-looking banners."
                },
                {
                  question: "Can I upload my own images and logos?",
                  answer: "Yes, you can upload your own images, logos, and graphics to use in your banners. We support various file formats including JPG, PNG, and SVG."
                },
                {
                  question: "What file formats can I download my banners in?",
                  answer: "You can download your finished banners in PNG, JPG, or PDF formats. PNG is recommended for most social media platforms as it supports transparency."
                },
                {
                  question: "Is there a limit to how many banners I can create?",
                  answer: "Free users can create a limited number of banners per month. Premium subscribers enjoy unlimited banner creation along with access to premium templates and features."
                },
                {
                  question: "Can I save my designs to edit later?",
                  answer: "Yes, all your banner designs are automatically saved to your account. You can return to edit them at any time or use them as templates for new designs."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Be the First to Try Our Social Banner Maker</h2>
                <p className="text-xl mb-8 opacity-90">Join our exclusive waitlist to get early access when we launch. Create professional banners that stand out on every platform.</p>
                <Link to="/contact-us?subject=Social%20Banner%20Maker%20Waitlist">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
                  >
                    Join Waitlist
                    <BellPlus className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="mt-4 text-sm opacity-80">Be notified as soon as we launch • Limited spots available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Banner */}
        <ComingSoonBanner 
          toolName="Social Banner Maker" 
          expectedReleaseDate="Q3 2023" 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default SocialBannerMaker;
