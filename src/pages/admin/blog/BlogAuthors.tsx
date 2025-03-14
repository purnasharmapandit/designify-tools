
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Edit, Trash2, Plus, Save, X, ArrowLeft, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";

interface Author {
  id: string;
  name: string;
  title: string;
  avatar: string;
}

const BlogAuthors = () => {
  const navigate = useNavigate();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [formData, setFormData] = useState<Partial<Author>>({
    name: "",
    title: "",
    avatar: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>("");
  
  const { data: authors, isLoading, error, refetch } = useQuery({
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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      toast.error("Please select a valid image file (JPEG, PNG, WEBP, GIF)");
      return;
    }
    
    // Validate file size (max 1MB)
    if (file.size > 1 * 1024 * 1024) {
      toast.error("Image file size should be less than 1MB");
      return;
    }
    
    setAvatarFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  const resetForm = () => {
    setFormData({
      name: "",
      title: "",
      avatar: ""
    });
    setAvatarFile(null);
    setAvatarPreview("");
    setIsEditing(false);
  };
  
  const handleEditAuthor = (author: Author) => {
    setFormData(author);
    if (author.avatar) {
      setAvatarPreview(author.avatar);
    }
    setIsEditing(true);
    setIsOpenDialog(true);
  };
  
  const handleDeleteAuthor = async (id: string) => {
    if (!confirm("Are you sure you want to delete this author? This action cannot be undone.")) {
      return;
    }
    
    try {
      const { error } = await supabase.from("blog_authors").delete().eq("id", id);
      
      if (error) throw error;
      
      toast.success("Author deleted successfully");
      refetch();
    } catch (error) {
      console.error("Error deleting author:", error);
      toast.error("Failed to delete author");
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name) {
      toast.error("Author name is required");
      return;
    }
    
    try {
      // Upload avatar if selected
      let avatarUrl = formData.avatar;
      if (avatarFile) {
        const fileName = `authors-${Date.now()}-${avatarFile.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("blog-images")
          .upload(fileName, avatarFile);
          
        if (uploadError) throw uploadError;
        
        const { data: publicUrl } = supabase.storage
          .from("blog-images")
          .getPublicUrl(fileName);
          
        avatarUrl = publicUrl.publicUrl;
      }
      
      if (isEditing) {
        const { error } = await supabase
          .from("blog_authors")
          .update({
            name: formData.name,
            title: formData.title,
            avatar: avatarUrl
          })
          .eq("id", formData.id);
          
        if (error) throw error;
        
        toast.success("Author updated successfully");
      } else {
        const { error } = await supabase
          .from("blog_authors")
          .insert({
            name: formData.name,
            title: formData.title,
            avatar: avatarUrl
          });
          
        if (error) throw error;
        
        toast.success("Author created successfully");
      }
      
      resetForm();
      setIsOpenDialog(false);
      refetch();
    } catch (error: any) {
      console.error("Error saving author:", error);
      toast.error(error.message || "Failed to save author");
    }
  };
  
  if (error) {
    toast.error("Failed to load authors");
    console.error(error);
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
              <h1 className="text-3xl font-bold mb-2">Blog Authors</h1>
              <p className="text-gray-500">
                Manage authors for your blog posts
              </p>
            </div>
          </div>
          
          <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Author
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{isEditing ? "Edit" : "Create"} Author</DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <div className="flex justify-center mb-2">
                  <div className="relative">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={avatarPreview} />
                      <AvatarFallback>{formData.name ? formData.name.charAt(0) : "A"}</AvatarFallback>
                    </Avatar>
                    <label 
                      htmlFor="avatar-upload" 
                      className="absolute -bottom-2 -right-2 bg-primary text-white p-1 rounded-full cursor-pointer hover:bg-primary/90"
                    >
                      <Upload className="h-4 w-4" />
                    </label>
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                  </div>
                </div>
              
                <div>
                  <Label htmlFor="name">Author Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., John Doe"
                    className="mt-1.5"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Senior Designer"
                    className="mt-1.5"
                  />
                </div>
                
                <div>
                  <Label htmlFor="avatar">Avatar URL</Label>
                  <Input
                    id="avatar"
                    name="avatar"
                    value={avatarFile ? "" : formData.avatar}
                    onChange={handleInputChange}
                    placeholder="https://example.com/avatar.jpg"
                    className="mt-1.5"
                    disabled={!!avatarFile}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Or upload avatar image using the button above
                  </p>
                </div>
                
                <DialogFooter className="pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      resetForm();
                      setIsOpenDialog(false);
                    }}
                  >
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                  <Button type="submit">
                    <Save className="mr-2 h-4 w-4" />
                    {isEditing ? "Update" : "Create"} Author
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>All Authors</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : authors && authors.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Author</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {authors.map((author: Author) => (
                      <TableRow key={author.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={author.avatar} />
                              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{author.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{author.title || "—"}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => handleEditAuthor(author)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => handleDeleteAuthor(author.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No authors found. Create an author to get started.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogAuthors;
