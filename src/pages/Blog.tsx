
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogPostType } from "@/types/blog";
import { useBlog } from "@/contexts/BlogContext";
import { ArrowRight, Clock, Search, Tag } from "lucide-react";

const Blog = () => {
  const { getAllPosts, isLoading } = useBlog();
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPostType[]>([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "all");
  const [activeTag, setActiveTag] = useState(searchParams.get("tag") || "");

  // Fetch blog posts
  useEffect(() => {
    const loadPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      setFilteredPosts(allPosts);
      
      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(allPosts.map((post) => post.category).filter(Boolean))
      ) as string[];
      setCategories(uniqueCategories);
    };
    
    loadPosts();
  }, [getAllPosts]);

  // Apply filters when search params or posts change
  useEffect(() => {
    if (posts.length === 0) return;
    
    let filtered = [...posts];
    
    // Apply category filter
    if (activeCategory && activeCategory !== "all") {
      filtered = filtered.filter((post) => post.category === activeCategory);
    }
    
    // Apply tag filter
    if (activeTag) {
      filtered = filtered.filter((post) => post.tags?.includes(activeTag));
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt?.toLowerCase().includes(query) ||
          post.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredPosts(filtered);
  }, [posts, activeCategory, activeTag, searchQuery]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (activeCategory && activeCategory !== "all") {
      params.set("category", activeCategory);
    }
    
    if (activeTag) {
      params.set("tag", activeTag);
    }
    
    if (searchQuery) {
      params.set("search", searchQuery);
    }
    
    setSearchParams(params);
  }, [activeCategory, activeTag, searchQuery, setSearchParams]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setActiveTag(""); // Reset tag filter when changing category
  };

  const handleTagClick = (tag: string) => {
    setActiveTag(tag === activeTag ? "" : tag); // Toggle tag filter
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already applied via the effect
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold">Blog</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Discover tips, tutorials, and insights about our design tools
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mt-8 relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 py-6"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          
          {/* Categories Tabs */}
          <Tabs
            defaultValue={activeCategory}
            value={activeCategory}
            onValueChange={handleCategoryChange}
            className="mb-8"
          >
            <div className="flex justify-center">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {/* Active Tag Filter */}
            {activeTag && (
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
                  <Tag className="h-3 w-3" />
                  <span className="text-sm">{activeTag}</span>
                  <button
                    onClick={() => setActiveTag("")}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
            
            {/* Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? (
                // Loading skeletons
                Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="rounded-lg border animate-pulse">
                    <div className="aspect-video bg-muted"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-muted rounded w-24"></div>
                      <div className="h-6 bg-muted rounded w-3/4"></div>
                      <div className="h-4 bg-muted rounded w-full"></div>
                      <div className="h-4 bg-muted rounded w-2/3"></div>
                    </div>
                  </div>
                ))
              ) : filteredPosts.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-xl font-medium">No posts found</h3>
                  <p className="text-muted-foreground mt-2">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setActiveCategory("all");
                      setActiveTag("");
                      setSearchQuery("");
                    }}
                  >
                    Reset filters
                  </Button>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group rounded-lg border overflow-hidden hover:shadow-md transition-all"
                  >
                    <Link to={`/blogs/${post.slug}`}>
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.coverImage || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {post.category && (
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                post.categoryColor
                                  ? `bg-${post.categoryColor}-100 text-${post.categoryColor}-800`
                                  : "bg-primary/10 text-primary"
                              }`}
                            >
                              {post.category}
                            </span>
                          )}
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{post.readingTime}</span>
                          </div>
                        </div>
                        <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">
                            {formatDate(post.date)}
                          </span>
                          <span className="text-sm font-medium text-primary flex items-center">
                            Read more
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </div>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
