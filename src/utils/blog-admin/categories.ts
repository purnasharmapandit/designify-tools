
import { supabase } from "@/integrations/supabase/client";
import { generateSlug } from "../blogPostUtils";

// Category CRUD operations 
export const getAllCategories = async () => {
  const { data, error } = await supabase
    .from("blog_categories")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }

  return data;
};

export const createCategory = async ({ name, color }: { name: string; color?: string }) => {
  const slug = generateSlug(name);
  
  const { data, error } = await supabase
    .from("blog_categories")
    .insert({ name, slug, color })
    .select()
    .single();

  if (error) {
    console.error("Error creating category:", error);
    throw error;
  }

  return data;
};

export const updateCategory = async (id: string, { name, color }: { name: string; color?: string }) => {
  const slug = generateSlug(name);
  
  const { error } = await supabase
    .from("blog_categories")
    .update({ name, slug, color })
    .eq("id", id);

  if (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

export const deleteCategory = async (id: string) => {
  // First update any posts that use this category to remove the category_id
  const { error: updateError } = await supabase
    .from("blog_posts")
    .update({ category_id: null })
    .eq("category_id", id);

  if (updateError) {
    console.error("Error updating posts that use this category:", updateError);
  }

  // Then delete the category
  const { error } = await supabase
    .from("blog_categories")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};
