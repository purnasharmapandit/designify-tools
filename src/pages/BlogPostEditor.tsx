
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogPost } from "@/utils/blog-admin";
import BlogPostForm from "@/components/blog-admin/BlogPostForm";
import { toast } from "sonner";
import BlogSidebar from "@/components/blog-admin/BlogSidebar";

const BlogPostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (id === "create-post") {
          setPost(null);
          setLoading(false);
          return;
        }

        const fetchedPost = await getBlogPost(id);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Error fetching post:", error);
        toast.error("Failed to load post");
        navigate("/blog-admin");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen bg-slate-50">
        <BlogSidebar />
        <main className="flex-grow py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <BlogSidebar />
      <main className="flex-grow py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">
            {id === "create-post" ? "Create New Post" : "Edit Post"}
          </h1>
          <BlogPostForm post={post} />
        </div>
      </main>
    </div>
  );
};

export default BlogPostEditor;
