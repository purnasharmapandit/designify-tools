
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft, Save, Image, Plus, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";

interface TableOfContentsItem {
  title: string;
  slug: string;
}

interface BlogPostData {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  date: string;
  reading_time: string;
  cover_image: string;
  category_id: string;
  author_id: string;
  tableOfContents: TableOfContentsItem[];
}

const BlogPostEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = !!id;
  
  const [formData, setFormData] = useState<BlogPostData>({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    published: false,
    date: new Date().toISOString(),
    reading_time: "3 min read",
    cover_image: "",
    category_id: "",
    author_id: "",
    tableOfContents: []
  });
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Fetch categories
  const { data: categories } = useQuery({
    queryKey: ["blogCategories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_categories")
        .select("*")
        .order("name");
        
      if (error) throw error;
      return data;
    }
  });
  
  // Fetch authors
  const { data: authors } = useQuery({
    queryKey: ["blogAuthors"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_authors")
        .select("*")
        .order("name");
        
      if (error) throw error;
      return data;
    }
  });
  
  // Fetch post data if editing
  const { data: post, isLoading } = useQuery({
    queryKey: ["blogPost", id],
    queryFn: async () => {
      if (!id) return null;
      
      const { data, error } = await supabase
        .from("blog_posts")
        .select(`
          *,
          blog_table_of_contents(*)
        `)
        .eq("id", id)
        .single();
        
      if (error) throw error;
      return data;
    },
    enabled: isEditing
  });
  
  // Update form when post data is loaded
  useEffect(() => {
    if (post) {
      const tableOfContents = post.blog_table_of_contents
        ? post.blog_table_of_contents.map((toc: any) => ({
            title: toc.title,
            slug: toc.slug
          }))
        : [];
      
      setFormData({
        id: post.id,
        title: post.title || "",
        slug: post.slug || "",
        content: post.content || "",
        excerpt: post.excerpt || "",
        published: post.published || false,
        date: post.date || new Date().toISOString(),
        reading_time: post.reading_time || "3 min read",
        cover_image: post.cover_image || "",
        category_id: post.category_id || "",
        author_id: post.author_id || "",
        tableOfContents
      });
      
      if (post.cover_image) {
        setImagePreview(post.cover_image);
      }
    }
  }, [post]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Auto-generate slug from title
    if (name === "title" && !isEditing) {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-");
        
      setFormData(prev => ({
        ...prev,
        title: value,
        slug: generatedSlug
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleSwitchChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      published: checked
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      toast.error("Please select a valid image file (JPEG, PNG, WEBP, GIF)");
      return;
    }
    
    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image file size should be less than 2MB");
      return;
    }
    
    setImageFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  const addTableOfContentsItem = () => {
    setFormData(prev => ({
      ...prev,
      tableOfContents: [
        ...prev.tableOfContents,
        {
          title: "",
          slug: ""
        }
      ]
    }));
  };
  
  const updateTableOfContentsItem = (index: number, field: keyof TableOfContentsItem, value: string) => {
    const updatedItems = [...formData.tableOfContents];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    
    // Auto-generate slug from title
    if (field === "title") {
      updatedItems[index].slug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-");
    }
    
    setFormData(prev => ({
      ...prev,
      tableOfContents: updatedItems
    }));
  };
  
  const removeTableOfContentsItem = (index: number) => {
    const updatedItems = [...formData.tableOfContents];
    updatedItems.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      tableOfContents: updatedItems
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content) {
      toast.error("Title and content are required");
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Upload image if selected
      let coverImageUrl = formData.cover_image;
      if (imageFile) {
        const fileName = `blog-${Date.now()}-${imageFile.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("blog-images")
          .upload(fileName, imageFile);
          
        if (uploadError) throw uploadError;
        
        const { data: publicUrl } = supabase.storage
          .from("blog-images")
          .getPublicUrl(fileName);
          
        coverImageUrl = publicUrl.publicUrl;
      }
      
      const postData = {
        title: formData.title,
        slug: formData.slug,
        content: formData.content,
        excerpt: formData.excerpt,
        published: formData.published,
        date: formData.date,
        reading_time: formData.reading_time,
        cover_image: coverImageUrl,
        category_id: formData.category_id || null,
        author_id: formData.author_id || null
      };
      
      if (isEditing) {
        // Update existing post
        const { error } = await supabase
          .from("blog_posts")
          .update(postData)
          .eq("id", id);
          
        if (error) throw error;
        
        // Delete existing table of contents
        const { error: tocDeleteError } = await supabase
          .from("blog_table_of_contents")
          .delete()
          .eq("post_id", id);
          
        if (tocDeleteError) throw tocDeleteError;
        
      } else {
        // Create new post
        const { data: newPost, error } = await supabase
          .from("blog_posts")
          .insert(postData)
          .select();
          
        if (error) throw error;
        
        // Update id for table of contents
        if (newPost && newPost.length > 0) {
          formData.id = newPost[0].id;
        }
      }
      
      // Add table of contents if any
      if (formData.tableOfContents.length > 0 && formData.id) {
        const tocItems = formData.tableOfContents.map((item, index) => ({
          post_id: formData.id,
          title: item.title,
          slug: item.slug,
          display_order: index
        }));
        
        const { error: tocError } = await supabase
          .from("blog_table_of_contents")
          .insert(tocItems);
          
        if (tocError) throw tocError;
      }
      
      toast.success(`Blog post ${isEditing ? "updated" : "created"} successfully`);
      navigate("/admin/blog/posts");
      
    } catch (error: any) {
      console.error("Error saving post:", error);
      toast.error(error.message || "Failed to save blog post");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isEditing && isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" onClick={() => navigate("/admin/blog/posts")}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold mb-1">{isEditing ? "Edit" : "New"} Blog Post</h1>
              <p className="text-gray-500">
                {isEditing ? "Update your blog post content and settings" : "Create a new blog post"}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center space-x-2">
              <Switch 
                id="published" 
                checked={formData.published}
                onCheckedChange={handleSwitchChange}
              />
              <Label htmlFor="published">
                {formData.published ? "Published" : "Draft"}
              </Label>
            </div>
            
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Post
                </>
              )}
            </Button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter blog post title"
                        className="mt-1.5"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="slug">Slug</Label>
                      <Input
                        id="slug"
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        placeholder="your-post-slug"
                        className="mt-1.5"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        This will be the URL of your post: /blogs/{formData.slug}
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleInputChange}
                        placeholder="Brief summary of your post"
                        className="mt-1.5 min-h-20"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        placeholder="Write your blog post content here..."
                        className="mt-1.5 min-h-[400px]"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <Label className="mb-4 block">Table of Contents</Label>
                  
                  {formData.tableOfContents.length > 0 ? (
                    <div className="space-y-4 mb-4">
                      {formData.tableOfContents.map((item, index) => (
                        <div key={index} className="flex gap-4 items-start">
                          <div className="flex-grow space-y-2">
                            <Input
                              placeholder="Section title"
                              value={item.title}
                              onChange={(e) => updateTableOfContentsItem(index, "title", e.target.value)}
                            />
                            <Input
                              placeholder="Section slug"
                              value={item.slug}
                              onChange={(e) => updateTableOfContentsItem(index, "slug", e.target.value)}
                            />
                          </div>
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="icon"
                            onClick={() => removeTableOfContentsItem(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-gray-500 text-center py-4 mb-4">
                      No table of contents items added yet.
                    </div>
                  )}
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={addTableOfContentsItem}
                    className="w-full"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Section
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <Tabs defaultValue="settings">
                    <TabsList className="grid grid-cols-2 mb-4">
                      <TabsTrigger value="settings">Settings</TabsTrigger>
                      <TabsTrigger value="image">Cover Image</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="settings" className="space-y-4">
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Select
                          value={formData.category_id}
                          onValueChange={(value) => handleSelectChange("category_id", value)}
                        >
                          <SelectTrigger id="category" className="mt-1.5">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories?.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="author">Author</Label>
                        <Select
                          value={formData.author_id}
                          onValueChange={(value) => handleSelectChange("author_id", value)}
                        >
                          <SelectTrigger id="author" className="mt-1.5">
                            <SelectValue placeholder="Select author" />
                          </SelectTrigger>
                          <SelectContent>
                            {authors?.map((author) => (
                              <SelectItem key={author.id} value={author.id}>
                                {author.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="date">Publish Date</Label>
                        <Input
                          id="date"
                          name="date"
                          type="datetime-local"
                          value={formData.date ? new Date(formData.date).toISOString().slice(0, 16) : ""}
                          onChange={handleInputChange}
                          className="mt-1.5"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="reading_time">Reading Time</Label>
                        <Input
                          id="reading_time"
                          name="reading_time"
                          value={formData.reading_time}
                          onChange={handleInputChange}
                          placeholder="e.g., 5 min read"
                          className="mt-1.5"
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="image">
                      <div className="space-y-4">
                        <div className="border rounded-md overflow-hidden bg-gray-50 aspect-video flex items-center justify-center">
                          {imagePreview ? (
                            <img
                              src={imagePreview}
                              alt="Cover preview"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="text-center p-6">
                              <Image className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                              <p className="text-gray-500 text-sm">No image selected</p>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="cover_image" className="mb-1.5 block">
                            Upload Cover Image
                          </Label>
                          <Input
                            id="cover_image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Recommended size: 1200×630px. Max 2MB.
                          </p>
                        </div>
                        
                        <div>
                          <Label htmlFor="image_url" className="mb-1.5 block">
                            Or enter image URL
                          </Label>
                          <Input
                            id="image_url"
                            name="cover_image"
                            value={imageFile ? "" : formData.cover_image}
                            onChange={handleInputChange}
                            placeholder="https://example.com/image.jpg"
                            disabled={!!imageFile}
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Post Status</h3>
                    
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="published-bottom" 
                          checked={formData.published}
                          onCheckedChange={handleSwitchChange}
                        />
                        <Label htmlFor="published-bottom">Published</Label>
                      </div>
                      
                      <p className="text-sm text-gray-500">
                        {formData.published 
                          ? "This post is visible to the public" 
                          : "This post is saved as a draft"}
                      </p>
                    </div>
                    
                    <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          {formData.published ? "Publish" : "Save"} Post
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogPostEditor;
