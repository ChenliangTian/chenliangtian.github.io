import { Header } from "@/components/Header";
import { MasonryGrid } from "@/components/MasonryGrid";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { format, parseISO } from "date-fns";

// Campus photos
const photos = [
  { src: "/images/photo1.jpg", alt: "Campus at Dusk", height: 75 },
  { src: "/images/photo2.jpg", alt: "Washington University Building", height: 80 },
  { src: "/images/photo3.jpg", alt: "Cherry Blossoms on Campus", height: 100 },
  { src: "/images/photo4.jpg", alt: "Campus Tower", height: 90 },
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
