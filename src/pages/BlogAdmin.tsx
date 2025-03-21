
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import BlogPostList from "@/components/blog-admin/BlogPostList";
import BlogCategoriesList from "@/components/blog-admin/BlogCategoriesList";
import BlogTagsList from "@/components/blog-admin/BlogTagsList";
import BlogAuthorsList from "@/components/blog-admin/BlogAuthorsList";
import BlogSidebar from "@/components/blog-admin/BlogSidebar";

const BlogAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract tab from URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const tabFromQuery = queryParams.get('tab');
  
  const [activeTab, setActiveTab] = useState("posts");
  
  useEffect(() => {
    // Set the active tab based on query parameter
    if (tabFromQuery === 'categories' || 
        tabFromQuery === 'tags' || 
        tabFromQuery === 'authors') {
      setActiveTab(tabFromQuery);
    } else if (!tabFromQuery) {
      setActiveTab("posts");
    }
  }, [tabFromQuery]);
  
  // Update URL when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    
    const newParams = new URLSearchParams(location.search);
    if (value === "posts") {
      newParams.delete('tab');
    } else {
      newParams.set('tab', value);
    }
    
    navigate({
      pathname: location.pathname,
      search: newParams.toString()
    }, { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <BlogSidebar />
      
      <main className="flex-grow py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              {activeTab === "posts" && "Blog Posts"}
              {activeTab === "categories" && "Categories"}
              {activeTab === "tags" && "Tags"}
              {activeTab === "authors" && "Authors"}
            </h1>
            
            {activeTab === "posts" && (
              <Button 
                onClick={() => navigate("/blog-admin/create-post")} 
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" /> New Post
              </Button>
            )}
          </div>

          <Tabs value={activeTab} onValueChange={handleTabChange}>
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
    </div>
  );
};

export default BlogAdmin;
