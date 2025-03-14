
import { supabase } from "@/integrations/supabase/client";
import { BlogPostType, Author, TableOfContentsItem, RelatedPost } from "@/types/blog";

interface FetchBlogPostsParams {
  page?: number;
  limit?: number;
  categorySlug?: string;
  tagSlug?: string;
  searchQuery?: string;
}

export async function fetchBlogPosts({
  page = 1,
  limit = 10,
  categorySlug,
  tagSlug,
  searchQuery,
}: FetchBlogPostsParams = {}) {
  let query = supabase
    .from("blog_posts")
    .select(`
      *,
      blog_authors(*),
      blog_categories(*),
      blog_posts_tags!inner(
        blog_tags(*)
      ),
      blog_table_of_contents(*)
    `)
    .eq("published", true)
    .order("date", { ascending: false });

  // Apply category filter if provided
  if (categorySlug) {
    query = query.eq("blog_categories.slug", categorySlug);
  }

  // Apply tag filter if provided
  if (tagSlug) {
    query = query.eq("blog_posts_tags.blog_tags.slug", tagSlug);
  }

  // Apply search filter if provided
  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  // Apply pagination
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  query = query.range(from, to);

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }

  // Transform the data to match our BlogPostType
  return data.map(transformPostFromSupabase);
}

export async function fetchBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(`
      *,
      blog_authors(*),
      blog_categories(*),
      blog_posts_tags(
        blog_tags(*)
      ),
      blog_table_of_contents(*)
    `)
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }

  // Fetch related posts
  const { data: relatedPostsData, error: relatedPostsError } = await supabase
    .from("blog_related_posts")
    .select(`
      related_post_id,
      blog_posts!blog_related_posts_related_post_id_fkey(
        id, title, slug, excerpt, cover_image
      )
    `)
    .eq("post_id", data.id)
    .order("display_order", { ascending: true });

  if (relatedPostsError) {
    console.error("Error fetching related posts:", relatedPostsError);
  }

  // Transform the data to match our BlogPostType
  return transformPostFromSupabase(data, relatedPostsData);
}

export async function fetchRelatedPosts(postId: string, limit: number = 2) {
  const { data, error } = await supabase
    .from("blog_related_posts")
    .select(`
      blog_posts!blog_related_posts_related_post_id_fkey(
        id, title, slug, excerpt, cover_image
      )
    `)
    .eq("post_id", postId)
    .order("display_order", { ascending: true })
    .limit(limit);

  if (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }

  return data.map((item: any) => ({
    title: item.blog_posts.title,
    path: `/blogs/${item.blog_posts.slug}`,
    image: item.blog_posts.cover_image,
    excerpt: item.blog_posts.excerpt
  }));
}

// Helper function to transform Supabase data format to our BlogPostType
function transformPostFromSupabase(post: any, relatedPostsData: any[] = []): BlogPostType {
  // Extract tags
  const tags = post.blog_posts_tags
    ? post.blog_posts_tags.map((pt: any) => pt.blog_tags.name)
    : [];

  // Extract table of contents
  const tableOfContents: TableOfContentsItem[] = post.blog_table_of_contents
    ? post.blog_table_of_contents
        .sort((a: any, b: any) => a.display_order - b.display_order)
        .map((toc: any) => ({
          title: toc.title,
          slug: toc.slug
        }))
    : [];

  // Extract related posts
  const relatedPosts: RelatedPost[] = relatedPostsData
    ? relatedPostsData.map((rp: any) => ({
        title: rp.blog_posts.title,
        path: `/blogs/${rp.blog_posts.slug}`,
        image: rp.blog_posts.cover_image,
        excerpt: rp.blog_posts.excerpt
      }))
    : [];

  // Extract author
  const author: Author | undefined = post.blog_authors
    ? {
        name: post.blog_authors.name,
        title: post.blog_authors.title,
        avatar: post.blog_authors.avatar
      }
    : undefined;

  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    date: post.date,
    readingTime: post.reading_time,
    author,
    coverImage: post.cover_image,
    category: post.blog_categories?.name,
    categoryColor: post.blog_categories?.color,
    tags,
    excerpt: post.excerpt,
    tableOfContents,
    relatedPosts
  };
}
