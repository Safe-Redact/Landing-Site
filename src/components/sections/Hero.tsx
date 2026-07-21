import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { heroContent } from "@/content/hero";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-800 pt-32 pb-16 sm:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="accent" className="mb-6 animate-on-scroll is-visible">
            Free &amp; Open Source
          </Badge>

          <h1
            className="mb-6 text-display-lg font-bold text-white text-balance animate-on-scroll is-visible"
            style={{ animationDelay: "100ms" }}
            dangerouslySetInnerHTML={{ __html: heroContent.headline }}
          />

          <p
            className="mb-10 text-body-xl text-white/70 text-balance sm:text-xl animate-on-scroll is-visible"
            style={{ animationDelay: "200ms" }}
          >
            {heroContent.subheadline}
          </p>

          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-on-scroll is-visible"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href={heroContent.primaryCta.href}
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-control bg-accent px-8 py-4 text-body-lg font-medium text-white shadow-lg shadow-accent/25 transition-all duration-200 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              {heroContent.primaryCta.label}
            </Link>
            <a
              href={heroContent.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-control border border-white/30 bg-transparent px-8 py-4 text-body-lg font-medium text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10"
            >
              {heroContent.secondaryCta.label}
            </a>
          </div>

          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-body-sm text-white/50 animate-on-scroll is-visible"
            style={{ animationDelay: "400ms" }}
          >
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              {heroContent.platform}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {heroContent.version}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              {heroContent.fileSize}
            </span>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl animate-on-scroll is-visible" style={{ animationDelay: "500ms" }}>
          <div className="relative rounded-panel border border-white/10 bg-primary-900/50 p-2 shadow-2xl backdrop-blur-sm transition-shadow duration-500 hover:shadow-accent/10">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-caption text-white/40">Safe Redact | Editor</span>
            </div>
            <div className="relative overflow-hidden rounded-b-[calc(0.75rem-2px)]">
              <Image
                src="/assets/images/SafeRedact Editor View.webp"
                alt="Safe Redact editor showing AI-detected faces and license plates with redaction effects applied"
                width={1200}
                height={675}
                priority
                className="w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
