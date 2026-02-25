// app/projetos/[slug]/page.tsx
import { getProjectBySlug } from '@/lib/mdx'; // Se não tiver src, use ../../../lib/mdx
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { content, meta } = getProjectBySlug(params.slug);

  return (
    <article className="max-w-3xl mx-auto p-10 prose lg:prose-xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{meta.title}</h1>
        <p className="text-gray-500">{meta.date}</p>
      </header>
      
      {/* O MDXRemote vai renderizar o conteúdo do seu arquivo .mdx */}
      <MDXRemote source={content} />
    </article>
  );
}