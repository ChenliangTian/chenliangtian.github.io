import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ResearchCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  date?: string;
  type?: 'cps' | 'quantum';
  image?: string;
}

export function ResearchCard({ title, description, tags, link, date, type, image }: ResearchCardProps) {
  return (
    <div className="group block h-full">
      <div className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-white/5">
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-white/5">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-4xl">
              {type === 'cps' ? '⚡️' : '⚛️'}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-pastel-yellow/30 px-3 py-1 text-xs font-bold text-brown dark:bg-pastel-yellow/10 dark:text-pastel-yellow"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mb-3 text-xl font-bold text-brown dark:text-cream font-heading">
            {title}
          </h3>

          <p className="mb-6 flex-grow text-brown/70 dark:text-cream/70">
            {description}
          </p>

          <Link
            href={link || '#'}
            className="group/link inline-flex items-center text-sm font-bold text-brown transition-colors hover:text-brown-light dark:text-cream dark:hover:text-cream/80"
          >
            Read more
            <span className="ml-2 transition-transform group-hover/link:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
