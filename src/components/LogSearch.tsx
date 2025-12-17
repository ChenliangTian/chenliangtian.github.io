"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { Search, X } from 'lucide-react';
import type { Post } from '@/lib/mdx';

interface LogSearchProps {
    initialLogs: Post[];
}

export function LogSearch({ initialLogs }: LogSearchProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Extract unique tags from all logs
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        initialLogs.forEach(log => {
            log.metadata.tags?.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, [initialLogs]);

    // Filter logs based on search query and selected tag
    const filteredLogs = useMemo(() => {
        return initialLogs.filter(log => {
            const matchesSearch =
                searchQuery === '' ||
                log.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                log.metadata.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                log.content.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesTag =
                selectedTag === null ||
                log.metadata.tags?.includes(selectedTag);

            return matchesSearch && matchesTag;
        });
    }, [initialLogs, searchQuery, selectedTag]);

    return (
        <div className="space-y-8">
            {/* Search and Filter Controls */}
            <div className="space-y-4">
                {/* Search Input */}
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search logs..."
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-cps-accent focus:ring-cps-accent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cps-accent dark:focus:ring-cps-accent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>

                {/* Tags Filter */}
                {allTags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${selectedTag === null
                                    ? 'bg-black text-white dark:bg-white dark:text-black'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                                }`}
                        >
                            All
                        </button>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${selectedTag === tag
                                        ? 'bg-black text-white dark:bg-white dark:text-black'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Results List */}
            <div className="space-y-8">
                {filteredLogs.length === 0 ? (
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        No logs found matching your criteria.
                    </p>
                ) : (
                    filteredLogs.map((log) => (
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
                    ))
                )}
            </div>
        </div>
    );
}
