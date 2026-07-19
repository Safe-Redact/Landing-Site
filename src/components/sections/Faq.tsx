"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading } from "@/components/ui/Heading";
import { faqItems } from "@/content/faq";
import { cn } from "@/lib/utils";

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <div className="mb-12 text-center">
        <Heading level="h2" className="mb-4">
          Frequently Asked Questions
        </Heading>
        <p className="mx-auto max-w-2xl text-body-lg text-primary-500">
          Everything you need to know about Safe Redact.
        </p>
      </div>

      <div className="mx-auto max-w-prose">
        <div className="divide-y divide-surface-300 rounded-panel border border-surface-300">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-surface-100"
                  aria-expanded={isOpen}
                >
                  <span className="text-body font-medium text-primary-800">{item.question}</span>
                  <svg
                    className={cn(
                      "h-5 w-5 flex-shrink-0 text-muted transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  role="region"
                  aria-hidden={!isOpen}
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <p className="px-6 pb-4 text-body text-primary-500">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

export { Faq };
