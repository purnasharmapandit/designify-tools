
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Database, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Navbar from "@/components/Navbar";
import { seedBlogData } from "@/utils/seedBlogData";

const SeedDatabase = () => {
  const navigate = useNavigate();
  const [isSeeding, setIsSeeding] = useState(false);
  const [isSeeded, setIsSeeded] = useState(false);
  
  const handleSeedData = async () => {
    if (!confirm("This will seed your database with initial blog data. This should only be run once. Continue?")) {
      return;
    }
    
    setIsSeeding(true);
    
    try {
      const success = await seedBlogData();
      
      if (success) {
        toast.success("Database seeded successfully!");
        setIsSeeded(true);
      } else {
        toast.error("Failed to seed database");
      }
    } catch (error) {
      console.error("Error seeding database:", error);
      toast.error("An error occurred while seeding the database");
    } finally {
      setIsSeeding(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-10 px-4">
        <div className="flex items-center gap-3 mb-8">
          <Button variant="outline" size="icon" onClick={() => navigate("/admin/blog")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold mb-2">Seed Database</h1>
            <p className="text-gray-500">
              Populate your blog database with initial data
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Alert className="mb-6">
            <Database className="h-4 w-4" />
            <AlertTitle>One-time operation</AlertTitle>
            <AlertDescription>
              This utility will seed your Supabase database with initial blog data from your static content.
              You should only run this once when setting up your blog management system.
            </AlertDescription>
          </Alert>
          
          <Card>
            <CardHeader>
              <CardTitle>Database Seeding Tool</CardTitle>
              <CardDescription>
                Transfer your existing blog posts, authors, categories, and tags to your Supabase database
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSeeded ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-800 flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-600" />
                  <div>
                    <div className="font-medium">Seeding complete!</div>
                    <p className="text-sm text-green-700">
                      Your blog data has been successfully transferred to the database.
                      You can now manage your content through the admin interface.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p>
                    This will transfer all your existing static blog content to your Supabase database,
                    including posts, authors, categories, and tags. This should only be done once when
                    setting up your blog management system.
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-amber-800">
                    <div className="font-medium">Important Note:</div>
                    <p className="text-sm">
                      Make sure your Supabase instance is properly set up before running this tool.
                      Running this multiple times may result in duplicate content.
                    </p>
                  </div>
                  
                  <Button 
                    onClick={handleSeedData} 
                    disabled={isSeeding}
                    className="w-full"
                    size="lg"
                  >
                    {isSeeding ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Seeding Database...
                      </>
                    ) : (
                      <>
                        <Database className="mr-2 h-4 w-4" />
                        Start Seeding Database
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="mt-6 flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => navigate("/admin/blog")}
            >
              Back to Blog Admin
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedDatabase;
