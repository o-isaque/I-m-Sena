// app/projetos/[slug]/page.tsx
import { getProjectBySlug } from '@/lib/mdx'; 
import { MDXRemote } from 'next-mdx-remote/rsc';

// 1. Defina a interface para garantir que o TypeScript entenda que params é uma Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  // 2. Você PRECISA dar await aqui para "esperar" o slug chegar da URL
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 3. Agora que o slug é uma string real, chamamos a função sem erro
  const { content, meta } = getProjectBySlug(slug);

  return (
    <article className="max-w-3xl mx-auto p-10 prose lg:prose-xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{meta.title}</h1>
        <p className="text-gray-500">{meta.date}</p>
      </header>
      
      <MDXRemote source={content} />
    </article>
  );
}