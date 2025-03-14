
import { supabase } from "@/integrations/supabase/client";
import { blogPosts } from "@/contexts/BlogContext";

// This utility function seeds the initial blog data from the static content
// Only run this once to populate the database

export async function seedBlogData() {
  console.log("Starting blog data seeding...");
  
  try {
    // Seed blog authors
    const authors = Object.values(blogPosts).map(post => post.author).filter(Boolean);
    const uniqueAuthors = authors.filter((author, index, self) => 
      index === self.findIndex(a => a?.name === author?.name)
    );
    
    console.log(`Seeding ${uniqueAuthors.length} authors...`);
    for (const author of uniqueAuthors) {
      if (!author) continue;
      
      const { data, error } = await supabase
        .from('blog_authors')
        .insert({
          name: author.name,
          title: author.title,
          avatar: author.avatar
        })
        .select();
        
      if (error) {
        console.error("Error seeding author:", error);
        continue;
      }
      
      console.log(`Author seeded: ${author.name}`);
    }
    
    // Seed blog categories
    const categories = Object.values(blogPosts).map(post => ({ 
      name: post.category, 
      color: post.categoryColor 
    })).filter(cat => cat.name);
    
    const uniqueCategories = categories.filter((cat, index, self) => 
      index === self.findIndex(c => c.name === cat.name)
    );
    
    console.log(`Seeding ${uniqueCategories.length} categories...`);
    for (const category of uniqueCategories) {
      if (!category.name) continue;
      
      const slug = category.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      
      const { data, error } = await supabase
        .from('blog_categories')
        .insert({
          name: category.name,
          slug,
          color: category.color
        })
        .select();
        
      if (error) {
        console.error("Error seeding category:", error);
        continue;
      }
      
      console.log(`Category seeded: ${category.name}`);
    }
    
    // Seed blog tags
    const allTags = Object.values(blogPosts).flatMap(post => post.tags || []);
    const uniqueTags = [...new Set(allTags)];
    
    console.log(`Seeding ${uniqueTags.length} tags...`);
    for (const tag of uniqueTags) {
      const slug = tag.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      
      const { data, error } = await supabase
        .from('blog_tags')
        .insert({
          name: tag,
          slug
        })
        .select();
        
      if (error) {
        console.error("Error seeding tag:", error);
        continue;
      }
      
      console.log(`Tag seeded: ${tag}`);
    }
    
    // Get the inserted authors, categories, and tags for reference
    const { data: insertedAuthors } = await supabase.from('blog_authors').select('*');
    const { data: insertedCategories } = await supabase.from('blog_categories').select('*');
    const { data: insertedTags } = await supabase.from('blog_tags').select('*');
    
    // Seed blog posts
    console.log(`Seeding ${Object.keys(blogPosts).length} blog posts...`);
    for (const [key, post] of Object.entries(blogPosts)) {
      // Find the author ID
      const authorId = post.author 
        ? insertedAuthors?.find(a => a.name === post.author?.name)?.id 
        : null;
        
      // Find the category ID
      const categoryId = post.category 
        ? insertedCategories?.find(c => c.name === post.category)?.id 
        : null;
      
      // Insert the blog post
      const { data: insertedPost, error: postError } = await supabase
        .from('blog_posts')
        .insert({
          id: post.id,
          title: post.title,
          slug: post.slug,
          date: new Date(post.date).toISOString(),
          reading_time: post.readingTime,
          excerpt: post.excerpt,
          cover_image: post.coverImage,
          author_id: authorId,
          category_id: categoryId,
          published: true
        })
        .select();
        
      if (postError) {
        console.error("Error seeding post:", postError);
        continue;
      }
      
      // Insert tags for the post
      if (post.tags && post.tags.length > 0 && insertedPost) {
        for (const tag of post.tags) {
          const tagId = insertedTags?.find(t => t.name === tag)?.id;
          
          if (tagId) {
            const { error: tagError } = await supabase
              .from('blog_posts_tags')
              .insert({
                post_id: insertedPost[0].id,
                tag_id: tagId
              });
              
            if (tagError) {
              console.error(`Error linking tag ${tag} to post:`, tagError);
            }
          }
        }
      }
      
      // Insert table of contents
      if (post.tableOfContents && post.tableOfContents.length > 0 && insertedPost) {
        for (let i = 0; i < post.tableOfContents.length; i++) {
          const toc = post.tableOfContents[i];
          
          const { error: tocError } = await supabase
            .from('blog_table_of_contents')
            .insert({
              post_id: insertedPost[0].id,
              title: toc.title,
              slug: toc.slug,
              display_order: i
            });
            
          if (tocError) {
            console.error(`Error adding table of contents item:`, tocError);
          }
        }
      }
      
      console.log(`Post seeded: ${post.title}`);
    }
    
    console.log("Blog data seeding completed successfully!");
    return true;
  } catch (error) {
    console.error("Error in seed process:", error);
    return false;
  }
}
