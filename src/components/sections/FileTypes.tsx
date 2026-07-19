import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading } from "@/components/ui/Heading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { fileTypes } from "@/content/file-types";

const iconMap: Record<string, React.ReactNode> = {
  video: (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  headphones: (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
    </svg>
  ),
  image: (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  "file-text": (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  ),
};

function FileTypes() {
  return (
    <SectionWrapper id="file-types" variant="surface">
      <AnimateOnScroll>
        <div className="mb-12 text-center">
          <Heading level="h2" className="mb-4">
            Redact Any File Type
          </Heading>
          <p className="mx-auto max-w-2xl text-body-xl text-primary-500">
            From video footage to PDF documents, Safe Redact handles the formats you work with every day.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {fileTypes.map((fileType, i) => (
          <AnimateOnScroll key={fileType.title} delay={i * 80}>
            <div className="group h-full rounded-panel border border-surface-300 bg-surface-50 p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-100 to-accent-50 transition-transform duration-300 group-hover:scale-110">
                {iconMap[fileType.icon]}
              </div>
              <h3 className="mb-2 text-heading-lg font-semibold text-primary-800">{fileType.title}</h3>
              <p className="text-body leading-relaxed text-primary-500">{fileType.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

export { FileTypes };
