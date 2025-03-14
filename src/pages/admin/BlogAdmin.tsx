
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const BlogAdmin = () => {
  const { user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [authors, setAuthors] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is authenticated, if not redirect to login
    if (!authLoading && !user) {
      toast.error('You must be logged in to access this page');
      navigate('/auth');
      return;
    }

    // Fetch blog posts and related data
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch posts
        const { data: postsData, error: postsError } = await supabase
          .from('blog_posts')
          .select('*, blog_authors(name), blog_categories(name)')
          .order('date', { ascending: false });

        if (postsError) throw postsError;
        setPosts(postsData || []);

        // Fetch categories
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('blog_categories')
          .select('*')
          .order('name');

        if (categoriesError) throw categoriesError;
        setCategories(categoriesData || []);

        // Fetch authors
        const { data: authorsData, error: authorsError } = await supabase
          .from('blog_authors')
          .select('*')
          .order('name');

        if (authorsError) throw authorsError;
        setAuthors(authorsData || []);

        // Fetch tags
        const { data: tagsData, error: tagsError } = await supabase
          .from('blog_tags')
          .select('*')
          .order('name');

        if (tagsError) throw tagsError;
        setTags(tagsData || []);

      } catch (error) {
        console.error('Error fetching blog data:', error);
        toast.error('Failed to load blog data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user, authLoading, navigate]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const togglePublishStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ published: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      
      // Update the local state
      setPosts(posts.map(post => 
        post.id === id ? { ...post, published: !currentStatus } : post
      ));
      
      toast.success(`Post ${currentStatus ? 'unpublished' : 'published'} successfully`);
    } catch (error) {
      console.error('Error toggling publish status:', error);
      toast.error('Failed to update publish status');
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      // Update the local state
      setPosts(posts.filter(post => post.id !== id));
      
      toast.success('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('Failed to delete post');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Blog Administration</h1>
          <Button onClick={() => navigate('/admin/blog/new')}>Create New Post</Button>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Posts</h2>
              {isLoading ? (
                <div className="text-center py-4">Loading posts...</div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {posts.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center">
                            No posts found. Create your first post!
                          </TableCell>
                        </TableRow>
                      ) : (
                        posts.map((post) => (
                          <TableRow key={post.id}>
                            <TableCell className="font-medium">{post.title}</TableCell>
                            <TableCell>{post.blog_authors?.name || 'Unknown'}</TableCell>
                            <TableCell>{post.blog_categories?.name || 'Uncategorized'}</TableCell>
                            <TableCell>{formatDate(post.date)}</TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                post.published 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-amber-100 text-amber-800'
                              }`}>
                                {post.published ? 'Published' : 'Draft'}
                              </span>
                            </TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => navigate(`/admin/blog/edit/${post.id}`)}
                              >
                                Edit
                              </Button>
                              <Button
                                variant={post.published ? "destructive" : "default"}
                                size="sm"
                                onClick={() => togglePublishStatus(post.id, post.published)}
                              >
                                {post.published ? 'Unpublish' : 'Publish'}
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => deletePost(post.id)}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </div>

          {/* Category Management Section */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Categories</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm">Add Category</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Category</DialogTitle>
                    </DialogHeader>
                    <CategoryForm categories={categories} setCategories={setCategories} />
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <div 
                    key={category.id} 
                    className="p-4 border rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <span 
                        className="inline-block w-4 h-4 rounded-full mr-2" 
                        style={{ backgroundColor: category.color || '#cccccc' }}
                      ></span>
                      <span>{category.name}</span>
                    </div>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => deleteCategory(category.id)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Authors Management Section */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Authors</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm">Add Author</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Author</DialogTitle>
                    </DialogHeader>
                    <AuthorForm authors={authors} setAuthors={setAuthors} />
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {authors.map((author) => (
                  <div 
                    key={author.id} 
                    className="p-4 border rounded-lg flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      {author.avatar && (
                        <img 
                          src={author.avatar} 
                          alt={author.name} 
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                      )}
                      <div>
                        <p className="font-medium">{author.name}</p>
                        {author.title && <p className="text-sm text-gray-500">{author.title}</p>}
                      </div>
                    </div>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => deleteAuthor(author.id)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tags Management Section */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Tags</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm">Add Tag</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Tag</DialogTitle>
                    </DialogHeader>
                    <TagForm tags={tags} setTags={setTags} />
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <div 
                    key={tag.id} 
                    className="px-3 py-1 bg-muted rounded-full flex items-center gap-2"
                  >
                    <span>{tag.name}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-5 w-5 p-0 rounded-full"
                      onClick={() => deleteTag(tag.id)}
                    >
                      &times;
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
  
  async function deleteCategory(id: string) {
    if (!confirm('Are you sure you want to delete this category? Posts in this category will become uncategorized.')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('blog_categories')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      // Update the local state
      setCategories(categories.filter(category => category.id !== id));
      
      toast.success('Category deleted successfully');
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error('Failed to delete category');
    }
  }

  async function deleteAuthor(id: string) {
    if (!confirm('Are you sure you want to delete this author? Posts by this author will have no author.')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('blog_authors')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      // Update the local state
      setAuthors(authors.filter(author => author.id !== id));
      
      toast.success('Author deleted successfully');
    } catch (error) {
      console.error('Error deleting author:', error);
      toast.error('Failed to delete author');
    }
  }

  async function deleteTag(id: string) {
    if (!confirm('Are you sure you want to delete this tag? It will be removed from all posts.')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('blog_tags')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      // Update the local state
      setTags(tags.filter(tag => tag.id !== id));
      
      toast.success('Tag deleted successfully');
    } catch (error) {
      console.error('Error deleting tag:', error);
      toast.error('Failed to delete tag');
    }
  }
};

const CategoryForm = ({ categories, setCategories }: { 
  categories: any[]; 
  setCategories: React.Dispatch<React.SetStateAction<any[]>>; 
}) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#3b82f6'); // Default blue color
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('Category name is required');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Generate slug from name
      const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      
      const { data, error } = await supabase
        .from('blog_categories')
        .insert([{ name, slug, color }])
        .select();

      if (error) throw error;
      
      // Update the local state with the new category
      setCategories([...categories, data[0]]);
      
      toast.success('Category added successfully');
      
      // Reset form
      setName('');
      setColor('#3b82f6');
    } catch (error) {
      console.error('Error adding category:', error);
      toast.error('Failed to add category');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Category Name
        </label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Design Guides"
          required
        />
      </div>
      
      <div>
        <label htmlFor="color" className="block text-sm font-medium mb-1">
          Color
        </label>
        <div className="flex items-center gap-2">
          <Input
            id="color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-16 h-10"
          />
          <Input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#HEX"
            className="flex-1"
          />
        </div>
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Adding...' : 'Add Category'}
      </Button>
    </form>
  );
};

const AuthorForm = ({ authors, setAuthors }: { 
  authors: any[]; 
  setAuthors: React.Dispatch<React.SetStateAction<any[]>>; 
}) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('Author name is required');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase
        .from('blog_authors')
        .insert([{ name, title, avatar }])
        .select();

      if (error) throw error;
      
      // Update the local state with the new author
      setAuthors([...authors, data[0]]);
      
      toast.success('Author added successfully');
      
      // Reset form
      setName('');
      setTitle('');
      setAvatar('');
    } catch (error) {
      console.error('Error adding author:', error);
      toast.error('Failed to add author');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Author Name
        </label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., John Smith"
          required
        />
      </div>
      
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title/Position
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Senior Designer"
        />
      </div>
      
      <div>
        <label htmlFor="avatar" className="block text-sm font-medium mb-1">
          Avatar URL
        </label>
        <Input
          id="avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="https://example.com/avatar.jpg"
        />
        {avatar && (
          <div className="mt-2 flex justify-center">
            <img src={avatar} alt="Preview" className="w-16 h-16 rounded-full object-cover" />
          </div>
        )}
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Adding...' : 'Add Author'}
      </Button>
    </form>
  );
};

const TagForm = ({ tags, setTags }: { 
  tags: any[]; 
  setTags: React.Dispatch<React.SetStateAction<any[]>>; 
}) => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('Tag name is required');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Generate slug from name
      const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      
      const { data, error } = await supabase
        .from('blog_tags')
        .insert([{ name, slug }])
        .select();

      if (error) throw error;
      
      // Update the local state with the new tag
      setTags([...tags, data[0]]);
      
      toast.success('Tag added successfully');
      
      // Reset form
      setName('');
    } catch (error) {
      console.error('Error adding tag:', error);
      toast.error('Failed to add tag');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Tag Name
        </label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Design Tips"
          required
        />
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Adding...' : 'Add Tag'}
      </Button>
    </form>
  );
};

export default BlogAdmin;
