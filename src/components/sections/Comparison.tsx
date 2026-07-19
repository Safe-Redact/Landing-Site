import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading } from "@/components/ui/Heading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { comparison } from "@/content/comparison";

function Comparison() {
  return (
    <SectionWrapper variant="dark">
      <AnimateOnScroll>
        <div className="mb-12 text-center">
          <Heading level="h2" className="mb-4 text-white">
            Safe Redact vs Cloud Services
          </Heading>
          <p className="mx-auto max-w-2xl text-body-xl text-white/70">
            Cloud redaction means uploading your sensitive files to someone else&apos;s servers. Here is how Safe Redact compares.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-panel border border-white/10">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {comparison.headings.map((heading, i) => (
                  <th
                    key={heading}
                    className={`px-6 py-4 text-body-sm font-semibold uppercase tracking-wider text-white/60 ${
                      i === 1 ? "text-accent" : ""
                    }`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-white/5 transition-colors hover:bg-white/[0.03] ${
                    i % 2 === 0 ? "bg-white/[0.01]" : ""
                  }`}
                >
                  <td className="px-6 py-4 text-body font-medium text-white">{row.feature}</td>
                  <td className="px-6 py-4 text-body text-accent">{row.safe}</td>
                  <td className="px-6 py-4 text-body text-white/50">{row.cloud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}

export { Comparison };
