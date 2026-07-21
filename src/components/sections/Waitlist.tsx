"use client";

import { useState, type FormEvent } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading } from "@/components/ui/Heading";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <SectionWrapper id="waitlist" variant="surface">
      <div className="mx-auto max-w-2xl text-center">
        <Heading level="h2" className="mb-4">
          Stay Updated
        </Heading>
        <p className="mb-8 text-body-xl text-primary-500">
          Get notified about new releases, features, and improvements. No spam, ever.
        </p>

        {submitted ? (
          <div className="rounded-panel border border-green-200 bg-green-50 p-6">
            <div className="mb-2 flex items-center justify-center gap-2 text-heading font-semibold text-green-800">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              You&apos;re subscribed!
            </div>
            <p className="text-body text-green-700">
              We&apos;ll notify you at <strong>{email}</strong> when there are new releases or major updates.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              aria-label="Email address"
            />
            <Button type="submit" className="h-12 px-6">
              Subscribe
            </Button>
          </form>
        )}

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://github.com/Safe-Redact/Redact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-body-sm font-medium text-primary-500 transition-colors hover:text-accent"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Star on GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

export { Waitlist };
