import Link from 'next/link';
import { getAllProjects } from '@/lib/mdx';

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <main className="max-w-3xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6">Projetos & Aprendizados</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.slug} className="border rounded-lg p-4 hover:shadow-md transition">
            <Link href={`/projetos/${project.slug}`} className="block">
              <h2 className="text-2xl font-semibold">{project.meta.title}</h2>
              {project.meta.description && (
                <p className="text-gray-600 mt-1">{project.meta.description}</p>
              )}
              {project.meta.date && (
                <p className="text-gray-400 text-sm mt-2">{project.meta.date}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}