import type { Metadata } from "next";
import Link from "next/link";
import { steps } from "@/content/how-it-works";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Four steps from raw file to safely redacted output. Import, let AI detect, review, and export. The entire pipeline runs on your hardware.",
};

export default function HowItWorksPage() {
  return (
    <section className="pt-32 pb-section sm:pt-40">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-display font-bold text-primary-800">How It Works</h1>
          <p className="mx-auto max-w-2xl text-body-xl text-primary-500">
            Four steps from raw file to safely redacted output. The entire pipeline runs on your hardware.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-8">
              <div className="flex shrink-0 items-start">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-dark text-heading-lg font-bold text-white shadow-lg shadow-accent/25">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h2 className="mb-3 text-heading-xl font-semibold text-primary-800">{step.title}</h2>
                <p className="text-body-lg leading-relaxed text-primary-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/download"
            className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-control bg-accent px-8 py-4 text-body-lg font-medium text-white shadow-lg shadow-accent/25 transition-all duration-200 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Try It Yourself
          </Link>
        </div>
      </div>
    </section>
  );
}
