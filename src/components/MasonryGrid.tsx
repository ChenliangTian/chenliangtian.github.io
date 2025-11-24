import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  height: number; // Aspect ratio height (relative)
}

interface MasonryGridProps {
  photos: Photo[];
}

export function MasonryGrid({ photos }: MasonryGridProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
      {photos.map((photo, idx) => (
        <div key={idx} className="mb-4 break-inside-avoid">
          <div className="group relative overflow-hidden rounded-lg">
            <div 
              className="relative w-full bg-gray-200 dark:bg-gray-800"
              style={{ paddingBottom: `${photo.height}%` }}
            >
               {/* Placeholder for actual image loading logic. 
                   In a real app, we'd use next/image with width/height or fill.
                   For this demo, we'll simulate it with a colored block if no src is provided,
                   or use a placeholder service.
               */}
               <Image
                 src={photo.src}
                 alt={photo.alt}
                 fill
                 className="object-cover transition-transform duration-500 group-hover:scale-110"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
            </div>
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
          </div>
        </div>
      ))}
    </div>
  );
}
