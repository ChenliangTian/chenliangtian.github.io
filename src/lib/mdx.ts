import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd();

export type PostType = 'logs' | 'blog' | 'research';

export interface PostMetadata {
  title: string;
  date: string;
  slug: string;
  tags?: string[];
  description?: string;
  readingTime?: string;
  [key: string]: any;
}

export interface Post {
  metadata: PostMetadata;
  content: string;
}

export function getPostSlugs(type: PostType): string[] {
  const contentPath = path.join(root, 'content', type);
  if (!fs.existsSync(contentPath)) {
    return [];
  }
  return fs.readdirSync(contentPath).filter((file: string) => /\.mdx?$/.test(file));
}

export function getPostBySlug(type: PostType, slug: string): Post {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const contentPath = path.join(root, 'content', type);
  
  // Try both .md and .mdx
  let fullPath = path.join(contentPath, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(contentPath, `${realSlug}.mdx`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      ...data,
      slug: realSlug,
      title: data.title || realSlug,
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    } as PostMetadata,
    content,
  };
}

export function getAllPosts(type: PostType): Post[] {
  const slugs = getPostSlugs(type);
  const posts = slugs
    .map((slug: string) => getPostBySlug(type, slug))
    // Sort posts by date in descending order
    .sort((post1: Post, post2: Post) => (post1.metadata.date > post2.metadata.date ? -1 : 1));
  return posts;
}
