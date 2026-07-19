import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading } from "@/components/ui/Heading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { useCases } from "@/content/use-cases";

const iconMap: Record<string, React.ReactNode> = {
  shield: (
    <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  scale: (
    <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3v18M3 7l3-4 3 4M15 7l3-4 3 4M6 7v6a6 6 0 0012 0V7" />
    </svg>
  ),
  "heart-pulse": (
    <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 117.5 -6.566a5 5 0 117.5 6.572" />
      <path d="M3 12h3l2 -3 3 6 2 -3h4" />
    </svg>
  ),
  "graduation-cap": (
    <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  landmark: (
    <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
    </svg>
  ),
  newspaper: (
    <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
      <path d="M7 8h.01M7 12h.01M7 16h.01" />
    </svg>
  ),
};

function UseCases() {
  return (
    <SectionWrapper id="use-cases">
      <AnimateOnScroll>
        <div className="mb-12 text-center">
          <Heading level="h2" className="mb-4">
            Built for Teams That Handle Sensitive Content
          </Heading>
          <p className="mx-auto max-w-2xl text-body-xl text-primary-500">
            Whether you are processing body camera footage or medical training videos, Safe Redact provides the privacy controls your industry demands.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase, i) => (
          <AnimateOnScroll key={useCase.title} delay={i * 80}>
            <div className="group h-full rounded-panel border border-surface-300 bg-surface-50 p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-100 to-accent-50 transition-transform duration-300 group-hover:scale-110">
                {iconMap[useCase.icon]}
              </div>
              <h3 className="mb-2 text-heading-lg font-semibold text-primary-800">{useCase.title}</h3>
              <p className="text-body leading-relaxed text-primary-500">{useCase.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

export { UseCases };
