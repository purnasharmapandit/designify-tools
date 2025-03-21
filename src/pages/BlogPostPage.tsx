
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBlog } from '@/contexts/BlogContext';
import BlogPost from '@/components/BlogPost';
import { BlogPostType } from '@/types/blog';
import { Skeleton } from '@/components/ui/skeleton';
import { parseRichText } from '@/utils/strapiUtils';
import { useToast } from '@/hooks/use-toast';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { getPostBySlug } = useBlog();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const postData = await getPostBySlug(slug);
        
        if (!postData) {
          setError('Blog post not found');
          toast({
            title: "Blog post not found",
            description: "The requested blog post could not be found.",
            variant: "destructive"
          });
          navigate('/blog', { replace: true });
          return;
        }
        
        setPost(postData);
      } catch (err) {
        console.error(`Error fetching post with slug ${slug}:`, err);
        setError('Failed to load blog post. Please try again later.');
        toast({
          title: "Error loading blog post",
          description: "There was a problem loading the blog post. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug, getPostBySlug, navigate, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col pt-24 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <Skeleton className="h-10 w-40 mb-6" />
          <Skeleton className="h-16 w-full max-w-2xl mb-8" />
          <div className="flex gap-4 mb-12">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div>
              <Skeleton className="h-5 w-40 mb-2" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          <div className="space-y-6">
            <Skeleton className="h-64 w-full rounded-xl mb-8" />
            <Skeleton className="h-6 w-full max-w-4xl" />
            <Skeleton className="h-6 w-full max-w-3xl" />
            <Skeleton className="h-6 w-full max-w-4xl" />
            <Skeleton className="h-6 w-full max-w-2xl" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Blog Post</h1>
          <p className="text-gray-600 mb-6">{error || 'Blog post not found'}</p>
          <button
            onClick={() => navigate('/blog')}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Go to Blog
          </button>
        </div>
      </div>
    );
  }

  // This component will render the content from Strapi with proper parsing
  const ContentComponent = () => {
    return (
      <div 
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: parseRichText(post.content) }}
      />
    );
  };

  return <BlogPost post={post} contentSlot={<ContentComponent />} />;
};

export default BlogPostPage;
