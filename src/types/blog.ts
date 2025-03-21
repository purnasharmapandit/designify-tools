
export interface Author {
  id?: string;
  name: string;
  title?: string;
  avatar?: string;
}

export interface TableOfContentsItem {
  title: string;
  slug: string;
}

export interface RelatedPost {
  title: string;
  path: string;
  image?: string;
  excerpt?: string;
}

export interface BlogPostType {
  id: string;
  title: string;
  slug: string;
  date: string;
  readingTime?: string;
  author?: Author;
  authorId?: string;
  coverImage?: string;
  category?: string;
  categoryId?: string;
  categoryColor?: string;
  tags?: string[];
  excerpt?: string;
  content?: string;
  published?: boolean;
  tableOfContents?: TableOfContentsItem[];
  relatedPosts?: RelatedPost[];
}
