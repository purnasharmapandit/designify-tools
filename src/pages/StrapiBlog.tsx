
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useStrapiBlog } from "@/contexts/StrapiBlogContext";
import { BlogPostType } from "@/types/blog";

const PLACEHOLDER_IMAGE = "/placeholder.svg";

const StrapiBlog = () => {
  const { getAllPosts, isLoading, error } = useStrapiBlog();
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
    };
    
    fetchPosts();
  }, [getAllPosts]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28 pb-16 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl text-muted-foreground">Loading blog posts...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28 pb-16 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Blog</h2>
            <p className="text-muted-foreground mb-6">{error.message || "There was a problem loading the blog posts. Please try again later."}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
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

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-6">No blog posts available at the moment.</p>
              <Button size="lg" className="rounded-full" asChild>
                <Link to="/logo-maker">Try Our Tools</Link>
              </Button>
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
