import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chenliang Tian - PhD Student in Computer Science at WashU",
    template: "%s | Chenliang Tian"
  },
  description: "Chenliang Tian is a PhD student in Computer Science & Engineering at Washington University in St. Louis, researching quantum networking and cyber-physical systems security.",
  keywords: [
    "Chenliang Tian",
    "Chenliang",
    "Tian",
    "WashU",
    "Washington University",
    "PhD student",
    "Computer Science",
    "Quantum Networking",
    "Cyber-Physical Systems",
    "Network Security",
    "Quantum Computing",
    "Research",
  ],
  authors: [{ name: "Chenliang Tian" }],
  creator: "Chenliang Tian",
  publisher: "Chenliang Tian",
  metadataBase: new URL('https://chenliangtian.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chenliangtian.github.io',
    title: 'Chenliang Tian - PhD Student in Computer Science at WashU',
    description: 'PhD student researching quantum networking and cyber-physical systems security at Washington University in St. Louis.',
    siteName: 'Chenliang Tian',
    images: [
      {
        url: '/images/citations.jpeg',
        width: 1200,
        height: 630,
        alt: 'Chenliang Tian',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chenliang Tian - PhD Student in Computer Science',
    description: 'PhD student researching quantum networking and cyber-physical systems security.',
    images: ['/images/citations.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'aJLEfIffn_p_fxpRqb3XoEvbovNKbWcVx8uQb720USI',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://chenliangtian.github.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chenliang Tian",
              alternateName: "Momo Tian",
              url: "https://chenliangtian.github.io",
              image: "https://chenliangtian.github.io/images/citations.jpeg",
              jobTitle: "PhD Student",
              worksFor: {
                "@type": "Organization",
                name: "Washington University in St. Louis",
                url: "https://wustl.edu"
              },
              alumniOf: {
                "@type": "Organization",
                name: "Washington University in St. Louis"
              },
              knowsAbout: [
                "Quantum Networking",
                "Cyber-Physical Systems",
                "Network Security",
                "Computer Science",
                "Quantum Computing"
              ],
              sameAs: [
                "https://github.com/ChenliangTian",
              ],
              email: "chenliang.t@wustl.edu"
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
