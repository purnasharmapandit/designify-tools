import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Edit, Trash2, Plus, Save, X, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ColorPicker } from "@/components/ui/color-picker";
import Navbar from "@/components/Navbar";

interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
}

const BlogCategories = () => {
  const navigate = useNavigate();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [formData, setFormData] = useState<Partial<Category>>({
    name: "",
    color: "#4F46E5"
  });
  const [isEditing, setIsEditing] = useState(false);
  
  const { data: categories, isLoading, error, refetch } = useQuery({
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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "name" && !isEditing) {
      const slug = value.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-");
      setFormData(prev => ({ ...prev, name: value, slug }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleColorChange = (color: string) => {
    setFormData(prev => ({ ...prev, color }));
  };
  
  const resetForm = () => {
    setFormData({
      name: "",
      color: "#4F46E5"
    });
    setIsEditing(false);
  };
  
  const handleEditCategory = (category: Category) => {
    setFormData(category);
    setIsEditing(true);
    setIsOpenDialog(true);
  };
  
  const handleDeleteCategory = async (id: string) => {
    if (!confirm("Are you sure you want to delete this category? This action cannot be undone.")) {
      return;
    }
    
    try {
      const { error } = await supabase.from("blog_categories").delete().eq("id", id);
      
      if (error) throw error;
      
      toast.success("Category deleted successfully");
      refetch();
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Failed to delete category");
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.color) {
      toast.error("Name and color are required");
      return;
    }
    
    try {
      if (!formData.slug) {
        formData.slug = formData.name.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-");
      }
      
      if (isEditing) {
        const { error } = await supabase
          .from("blog_categories")
          .update({
            name: formData.name,
            slug: formData.slug,
            color: formData.color
          })
          .eq("id", formData.id);
          
        if (error) throw error;
        
        toast.success("Category updated successfully");
      } else {
        const { error } = await supabase
          .from("blog_categories")
          .insert({
            name: formData.name,
            slug: formData.slug,
            color: formData.color
          });
          
        if (error) throw error;
        
        toast.success("Category created successfully");
      }
      
      resetForm();
      setIsOpenDialog(false);
      refetch();
    } catch (error: any) {
      console.error("Error saving category:", error);
      toast.error(error.message || "Failed to save category");
    }
  };
  
  if (error) {
    toast.error("Failed to load categories");
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
              <h1 className="text-3xl font-bold mb-2">Blog Categories</h1>
              <p className="text-gray-500">
                Manage categories for your blog posts
              </p>
            </div>
          </div>
          
          <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Category
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{isEditing ? "Edit" : "Create"} Category</DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <div>
                  <Label htmlFor="name">Category Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Design Tips"
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
                    placeholder="e.g., design-tips"
                    className="mt-1.5"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Used in URLs and filtering
                  </p>
                </div>
                
                <div>
                  <Label>Category Color</Label>
                  <div className="mt-1.5">
                    <ColorPicker
                      label="Category Color"
                      id="category-color"
                      value={formData.color || "#4F46E5"}
                      onChange={handleColorChange}
                    />
                  </div>
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
                    {isEditing ? "Update" : "Create"} Category
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>All Categories</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : categories && categories.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Slug</TableHead>
                      <TableHead>Color</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {categories.map((category: Category) => (
                      <TableRow key={category.id}>
                        <TableCell>{category.name}</TableCell>
                        <TableCell>{category.slug}</TableCell>
                        <TableCell>
                          <Badge
                            style={{ backgroundColor: category.color || "#888" }}
                            className="font-normal"
                          >
                            {category.color}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => handleEditCategory(category)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => handleDeleteCategory(category.id)}
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
                No categories found. Create a category to get started.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogCategories;
