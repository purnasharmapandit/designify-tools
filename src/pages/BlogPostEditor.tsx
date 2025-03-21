
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Trash2 } from "lucide-react";
import BlogPostForm from "@/components/blog-admin/BlogPostForm";
import { getBlogPost, createBlogPost, updateBlogPost, deleteBlogPost } from "@/utils/blogAdminUtils";
import { BlogPostType } from "@/types/blog";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const BlogPostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const isEditing = id !== "create-post";

  useEffect(() => {
    const fetchPost = async () => {
      if (!isEditing) return;
      
      setLoading(true);
      try {
        const postData = await getBlogPost(id as string);
        if (postData) {
          setPost(postData);
        } else {
          toast({
            title: "Error",
            description: "Post not found",
            variant: "destructive",
          });
          navigate("/blog-admin");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        toast({
          title: "Error",
          description: "Failed to load post",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, isEditing, navigate, toast]);

  const handleSave = async (formData: BlogPostType) => {
    setSaving(true);
    try {
      if (isEditing) {
        await updateBlogPost(id as string, formData);
        toast({
          title: "Success",
          description: "Post updated successfully",
        });
      } else {
        const newPostId = await createBlogPost(formData);
        toast({
          title: "Success",
          description: "Post created successfully",
        });
        navigate(`/blog-admin/${newPostId}`);
      }
    } catch (error) {
      console.error("Error saving post:", error);
      toast({
        title: "Error",
        description: "Failed to save post",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!isEditing) return;
    
    try {
      await deleteBlogPost(id as string);
      toast({
        title: "Success",
        description: "Post deleted successfully",
      });
      navigate("/blog-admin");
    } catch (error) {
      console.error("Error deleting post:", error);
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => navigate("/blog-admin")}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-3xl font-bold">
                {isEditing ? "Edit Post" : "Create New Post"}
              </h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                onClick={() => navigate("/blog-admin")}
              >
                Cancel
              </Button>
              
              {isEditing && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="flex items-center gap-2">
                      <Trash2 className="h-4 w-4" /> Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the post.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={handleDelete}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              
              <Button 
                className="flex items-center gap-2" 
                onClick={() => post && handleSave(post)}
                disabled={saving}
              >
                <Save className="h-4 w-4" />
                {saving ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-80 w-full" />
            </div>
          ) : (
            <BlogPostForm 
              post={post || undefined} 
              onChange={setPost}
              onSave={handleSave}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostEditor;
