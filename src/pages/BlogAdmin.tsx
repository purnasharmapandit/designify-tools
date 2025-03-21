
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostList from "@/components/blog-admin/BlogPostList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import BlogCategoriesList from "@/components/blog-admin/BlogCategoriesList";
import BlogTagsList from "@/components/blog-admin/BlogTagsList";
import BlogAuthorsList from "@/components/blog-admin/BlogAuthorsList";

const BlogAdmin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Blog Admin</h1>
            <Button 
              onClick={() => navigate("/blog-admin/create-post")} 
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" /> New Post
            </Button>
          </div>

          <Tabs defaultValue="posts" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="tags">Tags</TabsTrigger>
              <TabsTrigger value="authors">Authors</TabsTrigger>
            </TabsList>
            
            <TabsContent value="posts">
              <BlogPostList />
            </TabsContent>
            
            <TabsContent value="categories">
              <BlogCategoriesList />
            </TabsContent>
            
            <TabsContent value="tags">
              <BlogTagsList />
            </TabsContent>
            
            <TabsContent value="authors">
              <BlogAuthorsList />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogAdmin;
