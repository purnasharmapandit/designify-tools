
import { supabase } from "@/integrations/supabase/client";
import { generateSlug } from "../blogPostUtils";

// Tag CRUD operations
export const getAllTags = async () => {
  const { data, error } = await supabase
    .from("blog_tags")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching tags:", error);
    throw error;
  }

  return data;
};

export const createTag = async ({ name }: { name: string }) => {
  const slug = generateSlug(name);
  
  const { data, error } = await supabase
    .from("blog_tags")
    .insert({ name, slug })
    .select()
    .single();

  if (error) {
    console.error("Error creating tag:", error);
    throw error;
  }

  return data;
};

export const updateTag = async (id: string, { name }: { name: string }) => {
  const slug = generateSlug(name);
  
  const { error } = await supabase
    .from("blog_tags")
    .update({ name, slug })
    .eq("id", id);

  if (error) {
    console.error("Error updating tag:", error);
    throw error;
  }
};

export const deleteTag = async (id: string) => {
  // First delete any blog_posts_tags entries that use this tag
  const { error: deleteAssociationsError } = await supabase
    .from("blog_posts_tags")
    .delete()
    .eq("tag_id", id);

  if (deleteAssociationsError) {
    console.error("Error deleting tag associations:", deleteAssociationsError);
  }

  // Then delete the tag
  const { error } = await supabase
    .from("blog_tags")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting tag:", error);
    throw error;
  }
};
