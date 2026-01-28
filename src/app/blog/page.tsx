import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata = {
  title: "Blog | Jaison Jacob",
  description: "Insights on digital transformation, AI strategy, ERP, and leadership execution.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl"></h1>
      <p className="mt-2 text-neutral-600">
        Writing about digital transformation, AI strategy, ERP, and CTO leadership execution.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            {p.cover ? (
              <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition"
                />
              </div>
            ) : null}

            <div className="text-xs text-neutral-500">{p.date}</div>
            <h2 className="mt-2 text-lg font-semibold text-neutral-900 group-hover:underline">
              {p.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-600">{p.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
