
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Share2, BookmarkPlus, Facebook, Copy, Pinterest } from "lucide-react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogPostType } from "@/types/blog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface BlogPostProps {
  post: BlogPostType;
  contentSlot: React.ReactNode;
}

const PLACEHOLDER_IMAGE = "/placeholder.svg";

const BlogPost = ({ post, contentSlot }: BlogPostProps) => {
  const { title, date, readingTime, author, category, categoryColor, tags, relatedPosts, tableOfContents } = post;
  const { toast } = useToast();
  const [activeHeading, setActiveHeading] = useState("");
  
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Track headings for the TOC
  useEffect(() => {
    if (!tableOfContents || tableOfContents.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.slug);
      if (element) observer.observe(element);
    });

    return () => {
      tableOfContents.forEach((item) => {
        const element = document.getElementById(item.slug);
        if (element) observer.unobserve(element);
      });
    };
  }, [tableOfContents]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "The link has been copied to your clipboard",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/help-center" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Help Center
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Area */}
            <article className="prose prose-lg max-w-none dark:prose-invert lg:w-2/3">
              {/* Category, Reading Time & Date */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                {category && (
                  <Link to={`/blog?category=${encodeURIComponent(category)}`}>
                    <span 
                      className={cn(
                        "px-3 py-1 rounded-full text-sm font-medium transition-colors hover:opacity-90",
                        categoryColor ? 
                          `bg-${categoryColor}-100 text-${categoryColor}-800 border border-${categoryColor}-200` : 
                          "bg-primary/10 text-primary"
                      )}
                    >
                      {category}
                    </span>
                  </Link>
                )}
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{readingTime || '5 min'} read</span>
                </div>
                <span className="text-gray-500">{formattedDate}</span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl font-bold font-display mb-6">{title}</h1>
              
              {/* Author & Actions */}
              <div className="flex items-center gap-4 mb-8">
                {author && (
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={author.avatar} alt={author.name} />
                      <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{author.name}</p>
                      {author.title && <p className="text-xs text-muted-foreground">{author.title}</p>}
                    </div>
                  </div>
                )}
                
                {/* Share & Save */}
                <div className="ml-auto flex items-center gap-2">
                  <div className="hidden sm:flex gap-2">
                    <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex items-center gap-2">
                      <Copy className="h-4 w-4" />
                      Copy Link
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')} className="flex items-center gap-2">
                      <Facebook className="h-4 w-4" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`, '_blank')} className="flex items-center gap-2">
                      <X className="h-4 w-4" />
                      Tweet
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(post.coverImage || PLACEHOLDER_IMAGE)}&description=${encodeURIComponent(title)}`, '_blank')} className="flex items-center gap-2">
                      <Pinterest className="h-4 w-4" />
                      Pin
                    </Button>
                  </div>
                  
                  {/* Mobile share dropdown */}
                  <div className="sm:hidden">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2" onClick={copyToClipboard}>
                          <Copy className="h-4 w-4" /> Copy Link
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}>
                          <Facebook className="h-4 w-4" /> Facebook
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`, '_blank')}>
                          <X className="h-4 w-4" /> Twitter
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2" onClick={() => window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(post.coverImage || PLACEHOLDER_IMAGE)}&description=${encodeURIComponent(title)}`, '_blank')}>
                          <Pinterest className="h-4 w-4" /> Pinterest
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  
                  <Button variant="ghost" size="icon">
                    <BookmarkPlus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Content */}
              <div className="blog-content">
                {contentSlot}
              </div>
              
              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Link 
                        key={index}
                        to={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted/80 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
            
            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                {tableOfContents && tableOfContents.length > 0 && (
                  <div className="bg-muted/30 p-5 rounded-lg border border-border">
                    <h3 className="text-lg font-medium mb-4">Table of Contents</h3>
                    <nav>
                      <ul className="space-y-2">
                        {tableOfContents.map((item, index) => (
                          <li key={index}>
                            <a 
                              href={`#${item.slug}`} 
                              className={cn(
                                "block py-1 px-2 rounded transition-colors hover:bg-muted",
                                activeHeading === item.slug 
                                  ? "text-primary font-medium bg-primary/5 border-l-2 border-primary pl-3" 
                                  : "text-foreground/80 hover:text-foreground"
                              )}
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}
                
                {/* Related Posts */}
                {relatedPosts && relatedPosts.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Related Posts</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post, index) => (
                        <Link key={index} to={post.path} className="group block">
                          <div className={cn(
                            "rounded-lg overflow-hidden border border-border transition-all", 
                            "hover:shadow-md hover:-translate-y-1"
                          )}>
                            <div className="aspect-video overflow-hidden">
                              <img 
                                src={post.image || PLACEHOLDER_IMAGE}
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            <div className="p-3">
                              <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">{post.title}</h4>
                              {post.excerpt && (
                                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.excerpt}</p>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/logo-maker">Try Our Tools Now</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
