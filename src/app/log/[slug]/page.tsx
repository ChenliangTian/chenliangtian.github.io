import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import { Header } from '@/components/Header';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/MDXComponents';
import { format, parseISO } from 'date-fns';
import { notFound } from 'next/navigation';

interface LogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const logSlugs = getPostSlugs('logs');
  const blogSlugs = getPostSlugs('blog');

  return [
    ...logSlugs.map((slug) => ({
      slug: slug.replace(/\.mdx?$/, ''),
    })),
    ...blogSlugs.map((slug) => ({
      slug: slug.replace(/\.mdx?$/, ''),
    })),
  ];
}

export default function LogPage({ params }: LogPageProps) {
  const { slug } = params;

  try {
    // Try to get post from blog first, then logs
    let post;
    try {
      post = getPostBySlug('blog', slug);
    } catch {
      post = getPostBySlug('logs', slug);
    }

    const { content, metadata } = post;

    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Header />
        <main className="container mx-auto max-w-3xl px-4 py-12">
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <div className="mb-8 border-b border-gray-200 pb-8 dark:border-gray-800">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {metadata.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <time dateTime={metadata.date}>
                  {format(parseISO(metadata.date), 'MMMM d, yyyy')}
                </time>
                {metadata.tags && (
                  <div className="flex gap-2">
                    {metadata.tags.map((tag: string) => (
                      <span key={tag} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <MDXRemote source={content} components={MDXComponents} />
          </article>
        </main>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
