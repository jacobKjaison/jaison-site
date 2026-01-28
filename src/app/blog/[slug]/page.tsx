import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import MarkdownContent from "@/components/MarkdownContent";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    return notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
      <div className="text-xs text-neutral-500">{post.date}</div>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-neutral-600 sm:text-lg">{post.description}</p>

      {post.cover ? (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
          <Image src={post.cover} alt={post.title} fill className="object-cover" priority />
        </div>
      ) : null}

     <MarkdownContent content={post.content} />

      
    </main>
  );
}
