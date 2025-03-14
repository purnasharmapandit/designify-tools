
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Users, Tag, LayoutList, PenSquare, BarChart3 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const BlogAdmin = () => {
  const navigate = useNavigate();
  
  // Get counts of various blog entities
  const { data: stats } = useQuery({
    queryKey: ["blogStats"],
    queryFn: async () => {
      const [postsRes, categoriesRes, tagsRes, authorsRes, publishedRes, draftsRes] = await Promise.all([
        supabase.from("blog_posts").select("count").single(),
        supabase.from("blog_categories").select("count").single(),
        supabase.from("blog_tags").select("count").single(),
        supabase.from("blog_authors").select("count").single(),
        supabase.from("blog_posts").select("count").eq("published", true).single(),
        supabase.from("blog_posts").select("count").eq("published", false).single()
      ]);
      
      return {
        posts: postsRes.data?.count || 0,
        categories: categoriesRes.data?.count || 0,
        tags: tagsRes.data?.count || 0,
        authors: authorsRes.data?.count || 0,
        published: publishedRes.data?.count || 0,
        drafts: draftsRes.data?.count || 0
      };
    }
  });
  
  // Get latest blog posts
  const { data: latestPosts } = useQuery({
    queryKey: ["latestBlogPosts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(`
          id, 
          title, 
          slug, 
          date, 
          published,
          blog_authors(name)
        `)
        .order("date", { ascending: false })
        .limit(5);
        
      if (error) throw error;
      return data;
    }
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-10 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Blog Administration</h1>
          <p className="text-gray-500">
            Manage your blog content, authors, categories, and more
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <PenSquare className="mr-2 h-5 w-5 text-primary" />
                Posts
              </CardTitle>
              <CardDescription>Manage all blog posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-3xl font-bold">{stats?.posts || 0}</div>
                <div className="flex gap-2 text-sm">
                  <span className="text-green-600">{stats?.published || 0} published</span>
                  <span>•</span>
                  <span className="text-gray-500">{stats?.drafts || 0} drafts</span>
                </div>
              </div>
              <div className="mt-4">
                <Link 
                  to="/admin/blog/posts" 
                  className="text-primary hover:underline text-sm font-medium"
                >
                  View all posts
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <LayoutList className="mr-2 h-5 w-5 text-primary" />
                Categories
              </CardTitle>
              <CardDescription>Organize posts by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats?.categories || 0}</div>
              <div className="mt-4">
                <Link 
                  to="/admin/blog/categories" 
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Manage categories
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Tag className="mr-2 h-5 w-5 text-primary" />
                Tags
              </CardTitle>
              <CardDescription>Classify posts with tags</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats?.tags || 0}</div>
              <div className="mt-4">
                <Link 
                  to="/admin/blog/tags" 
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Manage tags
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Authors
              </CardTitle>
              <CardDescription>Manage blog contributors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats?.authors || 0}</div>
              <div className="mt-4">
                <Link 
                  to="/admin/blog/authors" 
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Manage authors
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow lg:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                Recent Posts
              </CardTitle>
              <CardDescription>Recently created or updated posts</CardDescription>
            </CardHeader>
            <CardContent>
              {latestPosts && latestPosts.length > 0 ? (
                <div className="space-y-3">
                  {latestPosts.map((post) => (
                    <div 
                      key={post.id} 
                      className="flex justify-between items-center border-b pb-2 last:border-0"
                    >
                      <div className="flex-1">
                        <Link 
                          to={`/admin/blog/posts/edit/${post.id}`}
                          className="font-medium hover:text-primary"
                        >
                          {post.title}
                        </Link>
                        <div className="flex gap-2 text-sm text-gray-500">
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span>•</span>
                          <span>By {post.blog_authors?.name || "Unknown"}</span>
                        </div>
                      </div>
                      <div>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          post.published 
                            ? "bg-green-100 text-green-800" 
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {post.published ? "Published" : "Draft"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  No blog posts found.
                </div>
              )}
              <div className="mt-4 pt-2 border-t">
                <Link 
                  to="/admin/blog/posts" 
                  className="text-primary hover:underline text-sm font-medium"
                >
                  View all posts
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
