import { getAllPosts } from '@/lib/mdx';
import { Header } from '@/components/Header';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

export default function LogsPage() {
  const logs = getAllPosts('logs');

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Learning Log
        </h1>
        <div className="space-y-8">
          {logs.map((log) => (
            <article key={log.metadata.slug} className="group relative flex flex-col space-y-2 border-b border-gray-200 pb-8 dark:border-gray-800">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <time dateTime={log.metadata.date}>
                  {format(parseISO(log.metadata.date), 'MMMM d, yyyy')}
                </time>
                {log.metadata.tags && (
                  <div className="flex gap-2">
                    {log.metadata.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <Link href={`/log/${log.metadata.slug}`} className="block">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-cps-accent dark:text-white">
                  {log.metadata.title}
                </h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-400">
                {log.metadata.description}
              </p>
              <Link href={`/log/${log.metadata.slug}`} className="text-sm font-medium text-cps-accent hover:underline">
                Read entry →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
