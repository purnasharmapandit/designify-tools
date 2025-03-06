
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Share2, BookmarkPlus, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
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

interface BlogPostProps {
  post: BlogPostType;
  contentSlot: React.ReactNode;
}

const BlogPost = ({ post, contentSlot }: BlogPostProps) => {
  const { title, date, readingTime, author, coverImage, category, tags, relatedPosts } = post;
  
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Cover Image */}
        {coverImage && (
          <div className="w-full h-[400px] relative mb-8">
            <img 
              src={coverImage} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          </div>
        )}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/help-center" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Help Center
            </Link>
          </div>
          
          <article className="prose prose-lg max-w-none dark:prose-invert">
            {/* Category & Reading Time */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              {category && (
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {category}
                </span>
              )}
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{readingTime || '5 min'} read</span>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl font-bold font-display mb-6">{title}</h1>
            
            {/* Author & Date */}
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
              <Separator orientation="vertical" className="h-8" />
              <p className="text-gray-500">{formattedDate}</p>
              
              {/* Share & Save */}
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Facebook className="h-4 w-4" /> Facebook
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Twitter className="h-4 w-4" /> Twitter
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" size="icon">
                  <BookmarkPlus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="bg-muted/50 p-4 rounded-lg mb-8">
                <h3 className="text-lg font-medium mb-2">Table of Contents</h3>
                <ul className="space-y-1">
                  {post.tableOfContents.map((item, index) => (
                    <li key={index}>
                      <a 
                        href={`#${item.slug}`} 
                        className="text-primary hover:underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
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
                    <span 
                      key={index}
                      className="bg-muted px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Related Posts */}
            {relatedPosts && relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {relatedPosts.map((post, index) => (
                    <Link key={index} to={post.path} className="group">
                      <div className={cn(
                        "rounded-lg overflow-hidden border border-border transition-all", 
                        "hover:shadow-md hover:-translate-y-1"
                      )}>
                        {post.image && (
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-48 object-cover"
                          />
                        )}
                        <div className="p-4">
                          <h4 className="font-semibold group-hover:text-primary truncate">{post.title}</h4>
                          {post.excerpt && <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
          
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
