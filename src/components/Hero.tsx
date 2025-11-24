import Image from 'next/image';
import { Clock, Atom, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <div className="flex flex-col gap-12 py-10 md:py-20">
      {/* Profile & Intro Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
          {/* Left Content */}
          <div className="flex flex-1 flex-col items-start text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pastel-yellow/50 px-4 py-2 text-sm font-bold text-brown shadow-sm dark:bg-pastel-yellow/20 dark:text-pastel-yellow">
              <span className="text-lg">👋</span> Hello All
            </div>

            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-brown dark:text-cream sm:text-5xl md:text-6xl">
              I'm Chenliang —
            </h1>

            <p className="mb-8 max-w-xl text-lg font-medium leading-relaxed text-brown/80 dark:text-cream/80 text-justify">
              I am a Ph.D. student in Computer Science & Engineering at <Link href="https://wustl.edu" className="font-bold text-brown dark:text-cream hover:underline">Washington University in St. Louis</Link>, exploring the space between advanced networking systems and emerging computation models. I am currently interested in <span className="rounded-lg bg-quantum-accent/30 px-1 py-0.5 font-bold text-brown dark:text-cream">quantum networking</span>—how future quantum devices might connect, share entanglement, and collaborate across a network—as well as <span className="rounded-lg bg-cps-accent/30 px-1 py-0.5 font-bold text-brown dark:text-cream">timing attacks in cyber-physical systems</span>, where tiny delays can lead to surprisingly large consequences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 rounded-2xl bg-brown px-8 py-4 text-lg font-bold text-cream transition-transform hover:scale-105 hover:shadow-lg dark:bg-cream dark:text-brown"
              >
                View My Work <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:chenliang.t@wustl.edu"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-brown px-8 py-4 text-lg font-bold text-brown transition-transform hover:scale-105 hover:bg-brown/5 dark:border-cream dark:text-cream dark:hover:bg-cream/10"
              >
                Contact Me <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-64 w-64 md:h-96 md:w-96">
            <div className="absolute inset-0 rotate-3 rounded-[3rem] bg-pastel-pink/30 dark:bg-pastel-pink/10"></div>
            <div className="absolute inset-0 -rotate-3 rounded-[3rem] bg-pastel-blue/30 dark:bg-pastel-blue/10"></div>
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl dark:border-brown-light">
              <Image
                src="/images/citations.jpeg"
                alt="Chenliang (Momo) Tian"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="container mx-auto px-4 mt-8">
        <h2 className="mb-8 text-3xl font-bold text-brown dark:text-cream font-heading">My Research Interests</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* CPS Side */}
          <div className="group flex flex-col items-start rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-white/5">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cps-light text-cps-accent dark:bg-cps-accent/20">
              <Clock className="h-8 w-8" strokeWidth={2.5} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-brown dark:text-cream font-heading">
              Time-Based Attacks
            </h3>
            <p className="mb-6 flex-grow text-lg text-brown/70 dark:text-cream/70">
              Investigating vulnerabilities in Cyber-Physical Systems. How tiny delays can lead to surprisingly large consequences.
            </p>
            <Link
              href="/research#cps"
              className="inline-flex items-center text-sm font-bold text-cps-accent transition-colors hover:text-brown dark:hover:text-cream"
            >
              Explore CPS Security
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Quantum Side */}
          <div className="group flex flex-col items-start rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-white/5">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-quantum-light text-quantum-accent dark:bg-quantum-accent/20">
              <Atom className="h-8 w-8" strokeWidth={2.5} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-brown dark:text-cream font-heading">
              Quantum Networking
            </h3>
            <p className="mb-6 flex-grow text-lg text-brown/70 dark:text-cream/70">
              Designing protocols for next-gen quantum data centers. Connecting future quantum devices to share entanglement.
            </p>
            <Link
              href="/research#quantum"
              className="inline-flex items-center text-sm font-bold text-quantum-accent transition-colors hover:text-brown dark:hover:text-cream"
            >
              Discover Quantum Protocols
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
