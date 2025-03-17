
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useStrapiBlog } from "@/contexts/StrapiBlogContext";
import { BlogPostType } from "@/types/blog";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ExternalLink, AlertCircle, Loader2 } from "lucide-react";

const PLACEHOLDER_IMAGE = "/placeholder.svg";

const StrapiBlog = () => {
  const { getAllPosts, isLoading, error, isConnected, checkConnection } = useStrapiBlog();
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
    };
    
    if (isConnected) {
      fetchPosts();
    } else {
      // Try to check connection again
      checkConnection().then(connected => {
        if (connected) {
          fetchPosts();
        }
      });
    }
  }, [getAllPosts, isConnected, checkConnection]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleRetry = () => {
    checkConnection().then(connected => {
      if (connected) {
        getAllPosts().then(fetchedPosts => setPosts(fetchedPosts));
      }
    });
  };

  const renderConnectionError = () => (
    <Alert variant="destructive" className="mb-8">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Strapi Connection Error</AlertTitle>
      <AlertDescription className="space-y-4">
        <p>Could not connect to the Strapi CMS. To set up Strapi:</p>
        <ol className="list-decimal ml-5 space-y-2">
          <li>Install Strapi by running: <code className="bg-muted p-1 rounded">npx create-strapi-app@latest my-blog --quickstart</code></li>
          <li>Once Strapi is running, create a new admin account</li>
          <li>Add an environment variable in your app: <code className="bg-muted p-1 rounded">VITE_STRAPI_URL=http://localhost:1337</code></li>
          <li>In Strapi admin panel, create content types for blog posts, authors, etc.</li>
        </ol>
        <Button onClick={handleRetry} className="mt-4">Retry Connection</Button>
      </AlertDescription>
    </Alert>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28 pb-16 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-16 h-16 animate-spin text-primary mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">Loading blog posts...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold font-display mb-4"
              initial={fadeIn.hidden}
              animate={fadeIn.visible}
              transition={{ duration: 0.5 }}
            >
              Our Blog
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={fadeIn.hidden}
              animate={fadeIn.visible}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Expert guides, tutorials, and insights to help you create amazing designs
            </motion.p>
          </div>

          {/* Connection Error */}
          {!isConnected && renderConnectionError()}

          {/* Error Display */}
          {error && (
            <Alert variant="destructive" className="mb-8">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {error.message || "There was a problem loading the blog posts."}
                <Button variant="outline" className="mt-2" onClick={handleRetry}>Try Again</Button>
              </AlertDescription>
            </Alert>
          )}

          {isConnected && posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-6">No blog posts available at the moment.</p>
              <p className="mb-6">You need to create content in your Strapi CMS</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full" asChild>
                  <a href="http://localhost:1337/admin" target="_blank" rel="noopener noreferrer">
                    Open Strapi Admin <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" onClick={handleRetry}>
                  Refresh Posts
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="group"
                  initial={fadeIn.hidden}
                  animate={fadeIn.visible}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blogs/${post.slug}`} className="block h-full">
                    <div className="rounded-xl overflow-hidden h-full border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.coverImage || PLACEHOLDER_IMAGE} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        {post.category && (
                          <span 
                            className={cn(
                              "px-3 py-1 text-xs font-medium rounded-full",
                              post.categoryColor ? 
                                `bg-${post.categoryColor}-100 text-${post.categoryColor}-800 border border-${post.categoryColor}-200` : 
                                "bg-primary/10 text-primary"
                            )}
                          >
                            {post.category}
                          </span>
                        )}
                        <h2 className="text-xl font-bold mt-4 mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-muted-foreground line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center">
                            {post.author && post.author.avatar && (
                              <img 
                                src={post.author.avatar} 
                                alt={post.author.name} 
                                className="w-8 h-8 rounded-full mr-2"
                              />
                            )}
                            <div>
                              {post.author && (
                                <p className="text-sm font-medium">{post.author.name}</p>
                              )}
                              <p className="text-xs text-muted-foreground">
                                {new Date(post.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                                {post.readingTime && ` · ${post.readingTime} read`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Want to learn more about our tools and features?
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/help-center">Visit Our Help Center</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StrapiBlog;
