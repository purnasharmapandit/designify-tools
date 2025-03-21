
export interface Author {
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
  coverImage?: string;
  category?: string;
  categoryColor?: string;
  tags?: string[];
  excerpt?: string;
  tableOfContents?: TableOfContentsItem[];
  relatedPosts?: RelatedPost[];
}
