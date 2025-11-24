import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Logs', href: '/log' },
  { name: 'Life', href: '/life' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-sm dark:bg-brown/90 transition-colors duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold tracking-tight text-brown dark:text-cream font-heading hover:scale-105 transition-transform">
          Chenliang<span className="text-pastel-pink">@WashU</span>
        </Link>
        <nav className="flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-brown/80 hover:text-brown dark:text-cream/80 dark:hover:text-cream transition-colors font-heading"
            >
              {item.name}
            </Link>
          ))}
          <div className="pl-4 border-l-2 border-brown/10 dark:border-cream/10">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
