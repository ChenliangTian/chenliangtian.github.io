import { Header } from "@/components/Header";
import { ResearchCard } from "@/components/ResearchCard";



const quantumProjects = [
  {
    title: "Entanglement Swapping Protocol",
    description: "Optimizing the fidelity of entanglement swapping in noisy quantum repeater networks.",
    tags: ["Quantum", "Networking", "Protocol"],
    link: "#",
    image: "/images/entanglement-swapping.png",
  },
  {
    title: "QDC Resource Management",
    description: "A scheduler for allocating quantum memory and processing units in a distributed quantum data center.",
    tags: ["QDC", "Scheduling", "Optimization"],
    link: "#",
    image: "/images/qdc-resource-management.png",
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Research & Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Exploring the intersection of time-critical systems and the future of quantum communication.
          </p>
        </div>



        <section id="quantum">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            <h2 className="text-2xl font-bold text-quantum dark:text-quantum-accent">
              Quantum Networking
            </h2>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quantumProjects.map((project) => (
              <ResearchCard key={project.title} {...project} type="quantum" />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
