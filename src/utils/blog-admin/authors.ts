
import { supabase } from "@/integrations/supabase/client";

// Author CRUD operations
export const getAllAuthors = async () => {
  const { data, error } = await supabase
    .from("blog_authors")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching authors:", error);
    throw error;
  }

  return data;
};

export const createAuthor = async ({ name, title, avatar }: { name: string; title?: string; avatar?: string }) => {
  const { data, error } = await supabase
    .from("blog_authors")
    .insert({ name, title, avatar })
    .select()
    .single();

  if (error) {
    console.error("Error creating author:", error);
    throw error;
  }

  return data;
};

export const updateAuthor = async (id: string, { name, title, avatar }: { name: string; title?: string; avatar?: string }) => {
  const { error } = await supabase
    .from("blog_authors")
    .update({ name, title, avatar })
    .eq("id", id);

  if (error) {
    console.error("Error updating author:", error);
    throw error;
  }
};

export const deleteAuthor = async (id: string) => {
  // First update any posts that use this author to remove the author_id
  const { error: updateError } = await supabase
    .from("blog_posts")
    .update({ author_id: null })
    .eq("author_id", id);

  if (updateError) {
    console.error("Error updating posts that use this author:", updateError);
  }

  // Then delete the author
  const { error } = await supabase
    .from("blog_authors")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting author:", error);
    throw error;
  }
};
