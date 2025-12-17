import { getAllPosts } from '@/lib/mdx';
import { Header } from '@/components/Header';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { LogSearch } from '@/components/LogSearch';

export default function LogsPage() {
  const logs = getAllPosts('logs');

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Learning Log
        </h1>
        <LogSearch initialLogs={logs} />
      </main>
    </div >
  );
}
