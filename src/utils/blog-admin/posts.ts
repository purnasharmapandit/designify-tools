
import { supabase } from "@/integrations/supabase/client";
import { BlogPostType, Author, TableOfContentsItem } from "@/types/blog";
import { generateSlug } from "../blogPostUtils";

// Post CRUD operations
export const getAllBlogPosts = async (): Promise<BlogPostType[]> => {
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select(`
      *,
      author:blog_authors(*),
      category:blog_categories(*)
    `)
    .order("date", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }

  // Fetch tags for each post
  const postsWithTags = await Promise.all(
    posts.map(async (post) => {
      const { data: postTags, error: tagsError } = await supabase
        .from("blog_posts_tags")
        .select(`
          tag_id,
          tags:blog_tags(*)
        `)
        .eq("post_id", post.id);

      if (tagsError) {
        console.error("Error fetching tags for post:", tagsError);
        return {
          ...post,
          tags: [],
        };
      }

      // Fetch table of contents
      const { data: toc, error: tocError } = await supabase
        .from("blog_table_of_contents")
        .select("*")
        .eq("post_id", post.id)
        .order("display_order", { ascending: true });

      if (tocError) {
        console.error("Error fetching TOC for post:", tocError);
      }

      // Format the post to match BlogPostType
      const formattedPost: BlogPostType = {
        id: post.id,
        title: post.title,
        slug: post.slug,
        content: post.content,
        date: post.date,
        readingTime: post.reading_time,
        excerpt: post.excerpt,
        coverImage: post.cover_image,
        published: post.published,
        author: post.author ? {
          id: post.author.id,
          name: post.author.name,
          title: post.author.title,
          avatar: post.author.avatar,
        } : undefined,
        authorId: post.author_id,
        // Extract category name as a string instead of using the whole category object
        category: post.category ? post.category.name : undefined,
        categoryId: post.category_id,
        categoryColor: post.category ? post.category.color : undefined,
        tags: postTags?.map(tag => tag.tags.name) || [],
        tableOfContents: toc?.map(item => ({
          title: item.title,
          slug: item.slug,
        })) || [],
      };

      return formattedPost;
    })
  );

  return postsWithTags as BlogPostType[];
};

export const getBlogPost = async (id: string): Promise<BlogPostType | null> => {
  const { data: post, error } = await supabase
    .from("blog_posts")
    .select(`
      *,
      author:blog_authors(*),
      category:blog_categories(*)
    `)
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching post:", error);
    throw error;
  }

  if (!post) {
    return null;
  }

  // Fetch tags for the post
  const { data: postTags, error: tagsError } = await supabase
    .from("blog_posts_tags")
    .select(`
      tag_id,
      tags:blog_tags(*)
    `)
    .eq("post_id", post.id);

  if (tagsError) {
    console.error("Error fetching tags for post:", tagsError);
  }

  // Fetch table of contents
  const { data: toc, error: tocError } = await supabase
    .from("blog_table_of_contents")
    .select("*")
    .eq("post_id", post.id)
    .order("display_order", { ascending: true });

  if (tocError) {
    console.error("Error fetching TOC for post:", tocError);
  }

  // Format the post to match BlogPostType
  const formattedPost: BlogPostType = {
    id: post.id,
    title: post.title,
    slug: post.slug,
    content: post.content,
    date: post.date,
    readingTime: post.reading_time,
    excerpt: post.excerpt,
    coverImage: post.cover_image,
    published: post.published,
    author: post.author ? {
      id: post.author.id,
      name: post.author.name,
      title: post.author.title,
      avatar: post.author.avatar,
    } : undefined,
    authorId: post.author_id,
    // Extract category name as a string instead of using the whole category object
    category: post.category ? post.category.name : undefined,
    categoryId: post.category_id,
    categoryColor: post.category ? post.category.color : undefined,
    tags: postTags?.map(tag => tag.tags.name) || [],
    tableOfContents: toc?.map(item => ({
      title: item.title,
      slug: item.slug,
    })) || [],
  };

  return formattedPost;
};

export const createBlogPost = async (post: BlogPostType): Promise<string> => {
  // First, insert the post
  const { data: newPost, error } = await supabase
    .from("blog_posts")
    .insert({
      title: post.title,
      slug: post.slug,
      content: post.content,
      date: post.date,
      reading_time: post.readingTime,
      excerpt: post.excerpt,
      cover_image: post.coverImage,
      published: post.published || false,
      author_id: post.authorId,
      category_id: post.categoryId,
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating post:", error);
    throw error;
  }

  // Then, handle tags if there are any
  if (post.tags && post.tags.length > 0) {
    // Get all tag IDs
    const { data: tagData } = await supabase
      .from("blog_tags")
      .select("id, name");
    
    const tagMap = new Map();
    if (tagData) {
      tagData.forEach(tag => {
        tagMap.set(tag.name.toLowerCase(), tag.id);
      });
    }

    // Prepare tag associations to insert
    const tagAssociations = post.tags.map(tagName => ({
      post_id: newPost.id,
      tag_id: tagMap.get(tagName.toLowerCase()),
    })).filter(association => association.tag_id); // Filter out any undefined tag IDs

    if (tagAssociations.length > 0) {
      const { error: tagError } = await supabase
        .from("blog_posts_tags")
        .insert(tagAssociations);

      if (tagError) {
        console.error("Error associating tags with post:", tagError);
      }
    }
  }

  // Handle table of contents if there are any
  if (post.tableOfContents && post.tableOfContents.length > 0) {
    const tocItems = post.tableOfContents.map((item, index) => ({
      post_id: newPost.id,
      title: item.title,
      slug: item.slug,
      display_order: index,
    }));

    const { error: tocError } = await supabase
      .from("blog_table_of_contents")
      .insert(tocItems);

    if (tocError) {
      console.error("Error creating table of contents:", tocError);
    }
  }

  return newPost.id;
};

export const updateBlogPost = async (id: string, post: BlogPostType): Promise<void> => {
  // First, update the post
  const { error } = await supabase
    .from("blog_posts")
    .update({
      title: post.title,
      slug: post.slug,
      content: post.content,
      date: post.date,
      reading_time: post.readingTime,
      excerpt: post.excerpt,
      cover_image: post.coverImage,
      published: post.published || false,
      author_id: post.authorId,
      category_id: post.categoryId,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    console.error("Error updating post:", error);
    throw error;
  }

  // Handle tags - first remove existing associations
  const { error: deleteTagsError } = await supabase
    .from("blog_posts_tags")
    .delete()
    .eq("post_id", id);

  if (deleteTagsError) {
    console.error("Error removing tag associations:", deleteTagsError);
  }

  // Add new tag associations if there are any
  if (post.tags && post.tags.length > 0) {
    // Get all tag IDs
    const { data: tagData } = await supabase
      .from("blog_tags")
      .select("id, name");
    
    const tagMap = new Map();
    if (tagData) {
      tagData.forEach(tag => {
        tagMap.set(tag.name.toLowerCase(), tag.id);
      });
    }

    // Prepare tag associations to insert
    const tagAssociations = post.tags.map(tagName => ({
      post_id: id,
      tag_id: tagMap.get(tagName.toLowerCase()),
    })).filter(association => association.tag_id); // Filter out any undefined tag IDs

    if (tagAssociations.length > 0) {
      const { error: tagError } = await supabase
        .from("blog_posts_tags")
        .insert(tagAssociations);

      if (tagError) {
        console.error("Error associating tags with post:", tagError);
      }
    }
  }

  // Handle table of contents - first remove existing items
  const { error: deleteTocError } = await supabase
    .from("blog_table_of_contents")
    .delete()
    .eq("post_id", id);

  if (deleteTocError) {
    console.error("Error removing table of contents:", deleteTocError);
  }

  // Add new table of contents items if there are any
  if (post.tableOfContents && post.tableOfContents.length > 0) {
    const tocItems = post.tableOfContents.map((item, index) => ({
      post_id: id,
      title: item.title,
      slug: item.slug,
      display_order: index,
    }));

    const { error: tocError } = await supabase
      .from("blog_table_of_contents")
      .insert(tocItems);

    if (tocError) {
      console.error("Error creating table of contents:", tocError);
    }
  }
};

export const deleteBlogPost = async (id: string): Promise<void> => {
  // First, delete related data
  // Delete tag associations
  const { error: deleteTagsError } = await supabase
    .from("blog_posts_tags")
    .delete()
    .eq("post_id", id);

  if (deleteTagsError) {
    console.error("Error removing tag associations:", deleteTagsError);
  }

  // Delete table of contents
  const { error: deleteTocError } = await supabase
    .from("blog_table_of_contents")
    .delete()
    .eq("post_id", id);

  if (deleteTocError) {
    console.error("Error removing table of contents:", deleteTocError);
  }

  // Delete related posts
  const { error: deleteRelatedError } = await supabase
    .from("blog_related_posts")
    .delete()
    .or(`post_id.eq.${id},related_post_id.eq.${id}`);

  if (deleteRelatedError) {
    console.error("Error removing related posts:", deleteRelatedError);
  }

  // Finally, delete the post itself
  const { error } = await supabase
    .from("blog_posts")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
