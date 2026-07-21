import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading } from "@/components/ui/Heading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { benefits } from "@/content/benefits";

const iconMap: Record<string, React.ReactNode> = {
  "wifi-off": (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.56 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
    </svg>
  ),
  heart: (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  "shield-check": (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  monitor: (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  cpu: (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  ),
  building: (
    <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18H6z" />
      <path d="M6 12H4a2 2 0 00-2 2v6a2 2 0 002 2h2M18 9h2a2 2 0 012 2v9a2 2 0 01-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4" />
    </svg>
  ),
};

const iconKeys = ["wifi-off", "heart", "shield-check", "monitor", "cpu", "building"];

function Benefits() {
  return (
    <SectionWrapper id="benefits" variant="surface">
      <AnimateOnScroll>
        <div className="mb-16 text-center">
          <Heading level="h2" className="mb-4">
            Why Safe Redact?
          </Heading>
          <p className="mx-auto max-w-2xl text-body-xl text-primary-500">
            Built for teams that need reliable, private, and verifiable redaction. No compromises on security or performance.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, i) => (
          <AnimateOnScroll key={benefit.title}>
            <div className="group flex h-full flex-col rounded-panel border border-surface-300 bg-surface-50 p-6 sm:p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-100 to-accent-50 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                  {iconMap[iconKeys[i]]}
                </div>
                <h3 className="text-heading font-semibold text-primary-800 sm:text-heading-lg">{benefit.title}</h3>
              </div>
              <p className="text-body leading-relaxed text-primary-500 sm:text-body-lg">{benefit.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

export { Benefits };
