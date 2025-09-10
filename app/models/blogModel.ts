export interface ArticleContentBlock {
  type: "h1" | "h2" | "p"; // you can extend with "h3" | "ul" | "ol" | "li" etc.
  text: string;
}

export interface Article {
  slug: string;
  image: string[];
  content: ArticleContentBlock[];
  title: string;
  excerpt: string;
}
