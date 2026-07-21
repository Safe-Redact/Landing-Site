import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading } from "@/components/ui/Heading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { steps } from "@/content/how-it-works";

function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <AnimateOnScroll>
        <div className="mb-16 text-center">
          <Heading level="h2" className="mb-4">
            How It Works
          </Heading>
          <p className="mx-auto max-w-2xl text-body-xl text-primary-500">
            Four simple steps from raw file to safely redacted output. The entire pipeline runs on your hardware.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" aria-hidden="true" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 100}>
              <div className="relative flex gap-8">
                <div className="relative z-10 flex shrink-0 items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-dark text-heading-lg font-bold text-white shadow-lg shadow-accent/25">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="mb-2 text-heading-lg font-semibold text-primary-800">{step.title}</h3>
                  <p className="text-body leading-relaxed text-primary-500">{step.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export { HowItWorks };
