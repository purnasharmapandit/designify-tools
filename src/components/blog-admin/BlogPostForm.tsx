
import { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BlogPostType, TableOfContentsItem } from "@/types/blog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { BlogRichTextEditor } from "./BlogRichTextEditor";
import BlogCategorySelect from "./BlogCategorySelect";
import BlogTagSelect from "./BlogTagSelect";
import BlogAuthorSelect from "./BlogAuthorSelect";
import TOCEditor from "./TOCEditor";
import { generateSlug, calculateReadingTime } from "@/utils/blogPostUtils";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().optional(),
  content: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  coverImage: z.string().optional(),
  readingTime: z.string().optional(),
  published: z.boolean().default(false),
  categoryId: z.string().optional(),
  authorId: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

interface BlogPostFormProps {
  post?: BlogPostType;
  onChange?: (post: BlogPostType) => void;
  onSave?: (post: BlogPostType) => void;
}

const BlogPostForm = ({ post, onChange, onSave }: BlogPostFormProps) => {
  const [content, setContent] = useState(post?.content || "");
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>(
    post?.tableOfContents || []
  );
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      excerpt: post?.excerpt || "",
      content: post?.content || "",
      date: post?.date ? new Date(post.date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
      coverImage: post?.coverImage || "",
      readingTime: post?.readingTime || "",
      published: post?.id ? true : false,
      categoryId: post?.category ? post.categoryId : undefined,
      authorId: post?.author ? post.authorId : undefined,
      tags: post?.tags || [],
    },
  });

  // Update form when post changes
  useEffect(() => {
    if (post) {
      form.reset({
        title: post.title || "",
        slug: post.slug || "",
        excerpt: post.excerpt || "",
        content: post.content || "",
        date: post.date ? new Date(post.date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
        coverImage: post.coverImage || "",
        readingTime: post.readingTime || "",
        published: post.id ? true : false,
        categoryId: post.categoryId,
        authorId: post.authorId,
        tags: post.tags || [],
      });
      setContent(post.content || "");
      setTableOfContents(post.tableOfContents || []);
    }
  }, [post, form]);

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    form.setValue("title", title);
    if (!form.getValues("slug") || form.getValues("slug") === generateSlug(form.getValues("title"))) {
      form.setValue("slug", generateSlug(title));
    }
  };

  // Update reading time based on content
  useEffect(() => {
    if (content) {
      const readingTime = calculateReadingTime(content);
      form.setValue("readingTime", readingTime);
    }
  }, [content, form]);

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    form.setValue("content", newContent);
    
    // Update the post object if onChange is provided
    if (onChange) {
      const currentValues = form.getValues();
      onChange({
        ...currentValues,
        id: post?.id || "",
        content: newContent,
        tableOfContents,
        category: post?.category,
        author: post?.author,
        relatedPosts: post?.relatedPosts || [],
      } as BlogPostType);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const completePost: BlogPostType = {
      id: post?.id || "",
      title: values.title,
      slug: values.slug,
      excerpt: values.excerpt || "",
      content: content,
      date: values.date,
      coverImage: values.coverImage || "",
      readingTime: values.readingTime || "",
      tableOfContents: tableOfContents,
      categoryId: values.categoryId,
      category: post?.category,
      authorId: values.authorId,
      author: post?.author,
      tags: values.tags,
      relatedPosts: post?.relatedPosts || [],
    };
    
    if (onSave) {
      onSave(completePost);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Tabs defaultValue="content">
          <TabsList className="mb-4">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="seo">SEO & Metadata</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="toc">Table of Contents</TabsTrigger>
          </TabsList>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Post title"
                      {...field}
                      onChange={handleTitleChange}
                      className="text-xl font-bold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="excerpt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Excerpt</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Brief summary of the post"
                      {...field}
                      className="min-h-20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <FormLabel>Content</FormLabel>
              <BlogRichTextEditor
                value={content}
                onChange={handleContentChange}
              />
            </div>
          </TabsContent>

          {/* SEO & Metadata Tab */}
          <TabsContent value="seo" className="space-y-6">
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="post-url-slug"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coverImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Image URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Publish Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <BlogCategorySelect
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="authorId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <BlogAuthorSelect
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <BlogTagSelect
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="published"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <Label htmlFor="published">Published</Label>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>

          {/* Table of Contents Tab */}
          <TabsContent value="toc" className="space-y-6">
            <TOCEditor
              items={tableOfContents}
              onChange={setTableOfContents}
            />
          </TabsContent>
        </Tabs>

        <Button type="submit" className="hidden">Save</Button>
      </form>
    </Form>
  );
};

export default BlogPostForm;
