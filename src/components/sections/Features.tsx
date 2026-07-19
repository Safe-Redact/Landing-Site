import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading } from "@/components/ui/Heading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { pillars } from "@/content/features";

const iconMap: Record<string, React.ReactNode> = {
  brain: (
    <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 5.5V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.5C6.5 13.5 5 11.5 5 9a7 7 0 017-7z" />
      <path d="M10 21v1a2 2 0 004 0v-1" />
    </svg>
  ),
  sliders: (
    <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
    </svg>
  ),
  "shield-check": (
    <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

function Features() {
  return (
    <SectionWrapper id="features" variant="surface">
      <AnimateOnScroll>
        <div className="mb-16 text-center">
          <Heading level="h2" className="mb-4">
            Everything You Need to Redact
          </Heading>
          <p className="mx-auto max-w-2xl text-body-xl text-primary-500">
            Three pillars that cover the full redaction pipeline, from AI detection to verified export. Every feature runs locally.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-8 lg:grid-cols-3">
        {pillars.map((pillar, i) => (
          <AnimateOnScroll key={pillar.title} delay={i * 120}>
            <div className="group h-full rounded-panel border border-surface-300 bg-surface-50 p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-100 to-accent-50 transition-transform duration-300 group-hover:scale-110">
                {iconMap[pillar.icon]}
              </div>
              <div className="mb-1 text-body-sm font-medium uppercase tracking-wider text-accent">{pillar.subtitle}</div>
              <h3 className="mb-3 text-heading-xl font-semibold text-primary-800">{pillar.title}</h3>
              <p className="mb-6 text-body leading-relaxed text-primary-500">{pillar.description}</p>
              <ul className="space-y-2.5">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-body-sm text-primary-600">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

export { Features };
