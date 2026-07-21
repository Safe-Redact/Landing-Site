import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading } from "@/components/ui/Heading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const layers = [
  {
    number: "01",
    title: "Structural Verification",
    description:
      "ffprobe validates stream integrity, duration, codec, dimensions, and FPS match the source. All metadata is confirmed stripped: no EXIF, no device info, no hidden data leakage.",
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Obscurement Verification",
    description:
      "Samples rendered frames and checks pixel luminance in redacted regions. Blackout regions that exceed the brightness threshold trigger a hard failure, so no partial redactions slip through.",
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Residual Re-Detection",
    description:
      "Re-runs the exact same AI detectors on the output. If any faces, plates, or text are still detected, the export is flagged or blocked, guaranteeing your redaction is permanent.",
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

function Validation() {
  return (
    <SectionWrapper variant="dark">
      <AnimateOnScroll>
        <div className="mb-16 text-center">
          <Heading level="h2" className="mb-4 text-white">
            3-Layer Validation
          </Heading>
          <p className="mx-auto max-w-2xl text-body-lg text-white/70">
            The only redaction tool that verifies its own output. Every export passes three independent
            checks before delivery, because a redaction you can&apos;t trust isn&apos;t a redaction at all.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="mx-auto max-w-4xl space-y-6">
        {layers.map((layer, i) => (
          <AnimateOnScroll key={layer.number} delay={i * 120}>
            <div className="relative flex items-stretch overflow-hidden rounded-panel border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.08]">
              <div className="flex w-24 shrink-0 flex-col items-center justify-center bg-gradient-to-b from-accent/20 to-accent/5 sm:w-32">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/30">
                  {layer.icon}
                </div>
                <span className="mt-2 text-caption font-bold text-accent/80">Layer {layer.number}</span>
              </div>
              <div className="flex-1 p-6 sm:p-8">
                <h3 className="mb-3 text-heading-lg font-semibold text-white">{layer.title}</h3>
                <p className="text-body leading-relaxed text-white/60">{layer.description}</p>
              </div>
              {i < layers.length - 1 && (
                <div className="absolute bottom-0 left-1/2 h-6 w-px bg-gradient-to-b from-accent/30 to-transparent" aria-hidden="true" />
              )}
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

export { Validation };
