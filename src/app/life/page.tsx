import { Header } from "@/components/Header";
import { MasonryGrid } from "@/components/MasonryGrid";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { format, parseISO } from "date-fns";

// Sample photos for the grid
const photos = [
  { src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80", alt: "Mountain Landscape", height: 66 },
  { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80", alt: "Camera Lens", height: 100 },
  { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80", alt: "Foggy Forest", height: 75 },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", alt: "Travel", height: 120 },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80", alt: "Lake View", height: 60 },
  { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80", alt: "Nature", height: 80 },
];

export default function LifePage() {
  const posts = getAllPosts('blog');

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="container mx-auto px-4 py-12">
        
        {/* Blog Section */}
        <section className="mb-20">
          <h1 className="mb-8 text-4xl font-serif font-bold tracking-tight text-gray-900 dark:text-white">
            Reflections
          </h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link key={post.metadata.slug} href={`/log/${post.metadata.slug}`} className="group block">
                  <article className="rounded-lg border border-gray-100 bg-gray-50 p-6 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                    <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-cps-accent dark:text-white">
                      {post.metadata.title}
                    </h2>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {format(parseISO(post.metadata.date), 'MMMM d, yyyy')}
                    </time>
                    <p className="mt-4 line-clamp-3 text-gray-600 dark:text-gray-300">
                      {post.metadata.description}
                    </p>
                  </article>
                </Link>
              ))
            ) : (
              <div className="col-span-full rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-500 dark:border-gray-700">
                <p>No blog posts yet. Drop a markdown file in <code>content/blog</code> to get started.</p>
              </div>
            )}
          </div>
        </section>

        {/* Photography Section */}
        <section>
          <h2 className="mb-8 text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white">
            Photography
          </h2>
          <MasonryGrid photos={photos} />
        </section>

      </main>
    </div>
  );
}
