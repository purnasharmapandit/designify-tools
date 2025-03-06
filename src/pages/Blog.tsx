
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useBlog } from "@/contexts/BlogContext";

const Blog = () => {
  const { getAllPosts } = useBlog();
  const posts = getAllPosts();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
                    {post.coverImage && (
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.coverImage} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {post.category && (
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
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

export default Blog;
