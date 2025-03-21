
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogPostType } from "@/types/blog";
import { getAllBlogPosts } from "@/utils/blogAdminUtils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Edit, Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const BlogPostList = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllBlogPosts();
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerCaseSearch) ||
          post.excerpt?.toLowerCase().includes(lowerCaseSearch) ||
          post.category?.toLowerCase().includes(lowerCaseSearch) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(lowerCaseSearch))
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchTerm, posts]);

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No posts found.</p>
        </div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>
                    {new Date(post.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {post.category && (
                      <Badge variant="outline">{post.category}</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={post.published ? "default" : "secondary"}
                    >
                      {post.published ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                      >
                        <Link to={`/blogs/${post.slug}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                      >
                        <Link to={`/blog-admin/${post.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default BlogPostList;
