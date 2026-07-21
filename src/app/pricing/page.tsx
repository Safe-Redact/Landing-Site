import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Safe Redact is free and open source. Optional paid support tiers available for teams that need priority assistance.",
};

const tiers = [
  {
    name: "Community",
    price: "Free",
    period: "forever",
    description: "Everything you need to redact content. No limits, no catches.",
    features: [
      "Full redaction capabilities",
      "Video, audio, images, documents",
      "AI-powered detection",
      "3-layer validation",
      "Unlimited projects",
      "Community support via GitHub",
    ],
    cta: { label: "Download Free", href: "/download" },
    highlighted: true,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "For teams that need guaranteed response times and priority fixes.",
    features: [
      "Everything in Community",
      "Email support (48hr SLA)",
      "Priority bug fixes",
      "Early access to new features",
      "Installation assistance",
      "Video call support",
    ],
    cta: { label: "Contact Sales", href: "/#waitlist" },
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations needing deployment, training, and dedicated support.",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom deployment support",
      "On-site or remote training",
      "SLA guarantees",
      "Invoice billing (PO accepted)",
      "Custom feature development",
    ],
    cta: { label: "Contact Sales", href: "/#waitlist" },
    highlighted: false,
  },
];

const comparisonRows = [
  { feature: "AI Video Redaction", free: true, pro: true, enterprise: true },
  { feature: "AI Audio Redaction", free: true, pro: true, enterprise: true },
  { feature: "AI Image Redaction", free: true, pro: true, enterprise: true },
  { feature: "AI Document Redaction", free: true, pro: true, enterprise: true },
  { feature: "3-Layer Validation", free: true, pro: true, enterprise: true },
  { feature: "Unlimited Projects", free: true, pro: true, enterprise: true },
  { feature: "Offline Mode", free: true, pro: true, enterprise: true },
  { feature: "Email Support (48hr SLA)", free: false, pro: true, enterprise: true },
  { feature: "Priority Bug Fixes", free: false, pro: true, enterprise: true },
  { feature: "Dedicated Account Manager", free: false, pro: false, enterprise: true },
  { feature: "On-Site Training", free: false, pro: false, enterprise: true },
  { feature: "Custom Feature Development", free: false, pro: false, enterprise: true },
];

export default function PricingPage() {
  return (
    <section className="pt-32 pb-section sm:pt-40">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-display font-bold text-primary-800">Free Forever. Enterprise Optional.</h1>
          <p className="mx-auto max-w-2xl text-body-xl text-primary-500">
            Safe Redact is open source and free to use. No file limits, no subscription required.
            Paid support tiers are available for teams that need priority assistance.
          </p>
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-panel border p-8 transition-all duration-300 ${
                tier.highlighted
                  ? "border-accent bg-accent-50 shadow-lg shadow-accent/10"
                  : "border-surface-300 bg-surface-50 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
              }`}
            >
              <div className="mb-6">
                <h3 className="mb-2 text-heading-xl font-semibold text-primary-800">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-display font-bold text-primary-800">{tier.price}</span>
                  {tier.period && <span className="text-body text-muted">{tier.period}</span>}
                </div>
                <p className="mt-3 text-body text-primary-500">{tier.description}</p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-body-sm text-primary-600">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.cta.href}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-control px-6 py-3 text-body font-medium transition-all duration-200 ${
                  tier.highlighted
                    ? "bg-accent text-white shadow-sm hover:bg-accent-dark hover:shadow-md"
                    : "border border-surface-300 text-primary-800 hover:border-accent/30 hover:bg-accent-50"
                }`}
              >
                {tier.cta.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-heading-xl font-semibold text-primary-800">Compare Plans</h2>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-panel border border-surface-300">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-surface-300 bg-surface-100">
                  <th className="px-6 py-4 text-body-sm font-semibold text-primary-800">Feature</th>
                  <th className="px-6 py-4 text-center text-body-sm font-semibold text-accent">Community</th>
                  <th className="px-6 py-4 text-center text-body-sm font-semibold text-primary-800">Professional</th>
                  <th className="px-6 py-4 text-center text-body-sm font-semibold text-primary-800">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-surface-300 last:border-b-0 ${
                      i % 2 === 0 ? "bg-surface-50" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-3 text-body-sm text-primary-800">{row.feature}</td>
                    <td className="px-6 py-3 text-center">
                      {row.free ? (
                        <svg className="mx-auto h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      ) : (
                        <svg className="mx-auto h-5 w-5 text-surface-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                    <td className="px-6 py-3 text-center">
                      {row.pro ? (
                        <svg className="mx-auto h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      ) : (
                        <svg className="mx-auto h-5 w-5 text-surface-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                    <td className="px-6 py-3 text-center">
                      {row.enterprise ? (
                        <svg className="mx-auto h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      ) : (
                        <svg className="mx-auto h-5 w-5 text-surface-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
