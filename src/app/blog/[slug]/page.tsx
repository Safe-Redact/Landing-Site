import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

const posts: Record<
  string,
  {
    title: string;
    date: string;
    content: string;
  }
> = {
  "introducing-safe-redact": {
    title: "Introducing Safe Redact",
    date: "2026-07-21",
    content: `Safe Redact is a free, open-source desktop application for Windows that automatically detects and redacts sensitive content from video, audio, images, and documents.

## Why We Built This

Every day, organizations handle sensitive footage and files that need redaction before sharing. Law enforcement agencies process body camera recordings. Legal teams prepare video evidence. Schools protect student identities. Journalists safeguard sources.

The existing solutions are either expensive cloud services that require uploading sensitive files to external servers, or manual tools that take hours of frame-by-frame work.

We built Safe Redact to solve this differently: a free, offline-first tool that runs AI-powered detection locally, with verification that the redaction actually worked.

## What Makes It Different

**Fully offline.** No data leaves your machine. No telemetry. No cloud dependency. Designed for air-gapped networks and security-sensitive environments.

**AI-powered detection.** YOLOv8n models detect faces and license plates. Tesseract OCR reads on-screen text. An IoU tracker follows subjects across frames.

**3-layer validation.** The only redaction tool that verifies its own output. Structural checks, obscurement verification, and residual re-detection ensure every export is permanently redacted.

**Open source.** MIT licensed. Inspect the code, contribute features, or fork it for your needs.

## What's Next

Safe Redact is in active development. The video redaction pipeline is fully functional. Audio transcription, image redaction, and document redaction are being expanded. We are building in the open and welcome contributions.

Try it out, open an issue, or contribute a pull request on [GitHub](https://github.com/Safe-Redact/Redact).`,
  },
  "3-layer-validation": {
    title: "How 3-Layer Validation Works",
    date: "2026-07-21",
    content: `Most redaction tools apply effects and hope for the best. Safe Redact takes a different approach: it verifies that the redaction actually worked before exporting.

## The Problem

A blur filter applied to a video frame does not guarantee the underlying content is unrecoverable. Metadata might leak information. A blackout might not be dark enough. An AI detector might still find faces in the output.

## The Three Layers

### Layer 1: Structural Verification

After redaction, Safe Redact runs ffprobe on the output file to confirm:

- Stream integrity matches the source
- Duration, codec, dimensions, and FPS are preserved
- All metadata has been stripped (no EXIF, no device info, no GPS coordinates)

If any structural check fails, the export is blocked.

### Layer 2: Obscurement Verification

Safe Redact samples rendered frames from the output and checks pixel luminance in redacted regions. For blackout effects, if the average luminance exceeds a configurable threshold, the verification fails. This catches cases where a blackout is semi-transparent or a blur is too weak.

### Layer 3: Residual Re-Detection

This is the most critical layer. Safe Redact re-runs the exact same AI detectors (YOLO for faces and plates, Tesseract for text) on the output video. If any targets are still detected, the export is flagged or blocked based on your settings.

## Why This Matters

Without verification, you are trusting that a visual effect successfully obscured sensitive content. With Safe Redact's 3-layer validation, you have proof. This matters for FOIA compliance, court evidence, and any scenario where redaction permanence is legally required.`,
  },
  "offline-first-philosophy": {
    title: "Why Offline-First Matters for Redaction",
    date: "2026-07-21",
    content: `The default approach for modern software is cloud-first: upload your data, process it on our servers, download the results. For many use cases, this works fine. For redaction, it does not.

## The Problem with Cloud Redaction

When you upload body camera footage to a cloud redaction service, you are sending sensitive evidence to a third-party server. That server might be in a different jurisdiction. It might retain your data. It might be compromised.

For law enforcement, this creates chain-of-custody concerns. For healthcare, it violates HIPAA. For classified material, it is a non-starter. For any organization with data governance policies, cloud upload introduces risk.

## The Offline-First Approach

Safe Redact runs entirely on your local machine. Every AI inference, every frame extraction, every rendering pass happens on your hardware. No internet connection is required after installation. No telemetry is collected. No data is sent anywhere.

This is not just a privacy feature. It is a design constraint that shapes every decision in the codebase:

- AI models run via ONNX Runtime locally, not via API calls
- Audio transcription uses local whisper.cpp, not cloud speech-to-text
- Spoken PII detection runs on a local LLM, not a remote service
- All project data persists in a local SQLite database

## Trade-offs

The offline-first approach means you need a reasonably powerful Windows machine rather than a web browser. AI inference is slower on CPU than on a cloud GPU cluster. You need to install the application rather than opening a URL.

For the teams that need redaction, these trade-offs are worth it. The alternative is sending your most sensitive files to someone else's server. For many organizations, that is not a trade-off at all. It is a hard no.`,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <article className="pt-32 pb-section sm:pt-40">
      <div className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 text-body-sm font-medium text-accent transition-colors hover:text-accent-dark"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <time className="mb-4 block text-body-sm text-muted">{post.date}</time>
        <h1 className="mb-8 text-display-sm font-bold text-primary-800">{post.title}</h1>

        <div className="prose-custom text-body-lg leading-relaxed text-primary-600">
          <Markdown
            components={{
              h2: ({ children }) => (
                <h2 className="mb-4 mt-10 text-heading-xl font-semibold text-primary-800">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="mb-3 mt-8 text-heading-lg font-semibold text-primary-800">{children}</h3>
              ),
              p: ({ children }) => <p className="mb-4">{children}</p>,
              ul: ({ children }) => <ul className="mb-4 space-y-2 pl-4">{children}</ul>,
              ol: ({ children }) => <ol className="mb-4 space-y-2 pl-4 list-decimal">{children}</ol>,
              li: ({ children }) => <li className="text-body text-primary-600">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold text-primary-800">{children}</strong>,
              code: ({ children, className }) => {
                const isBlock = className?.includes("language-");
                if (isBlock) {
                  return (
                    <pre className="my-4 overflow-x-auto rounded-control bg-primary-800 p-4">
                      <code className="text-body-sm text-white/80">{children}</code>
                    </pre>
                  );
                }
                return <code className="rounded bg-surface-200 px-1.5 py-0.5 text-body-sm text-primary-700">{children}</code>;
              },
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline decoration-accent/30 transition-colors hover:text-accent-dark hover:decoration-accent"
                >
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="my-4 border-l-4 border-accent/30 pl-4 text-primary-500 italic">
                  {children}
                </blockquote>
              ),
            }}
          >
            {post.content}
          </Markdown>
        </div>
      </div>
    </article>
  );
}
