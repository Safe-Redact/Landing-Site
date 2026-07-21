import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Development updates, technical deep dives, and news from the Safe Redact project.",
};

const posts = [
  {
    slug: "introducing-safe-redact",
    title: "Introducing Safe Redact",
    date: "2026-07-21",
    excerpt:
      "Why we built a free, offline-first redaction tool and what it means for teams that handle sensitive video, audio, and documents.",
  },
  {
    slug: "3-layer-validation",
    title: "How 3-Layer Validation Works",
    date: "2026-07-21",
    excerpt:
      "A technical deep dive into the three verification passes that ensure every export from Safe Redact is permanently redacted.",
  },
  {
    slug: "offline-first-philosophy",
    title: "Why Offline-First Matters for Redaction",
    date: "2026-07-21",
    excerpt:
      "Cloud-based redaction tools require uploading sensitive files to external servers. Here is why that is a problem and how we solved it.",
  },
];

export default function BlogPage() {
  return (
    <section className="pt-32 pb-section sm:pt-40">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-display font-bold text-primary-800">Blog</h1>
          <p className="max-w-2xl text-body-xl text-primary-500">
            Development updates, technical deep dives, and news from the Safe Redact project.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-panel border border-surface-300 bg-surface-50 p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
            >
              <time className="text-body-sm text-muted">{post.date}</time>
              <h2 className="mb-2 text-heading-xl font-semibold text-primary-800 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-body text-primary-500">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-accent">
                Read more
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
