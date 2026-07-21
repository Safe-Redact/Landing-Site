import Link from "next/link";
import { siteConfig } from "@/content/site";

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Download", href: "/download" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "GitHub", href: "https://github.com/Safe-Redact/Redact" },
    { label: "FAQ", href: "/#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "License (MIT)", href: "https://github.com/Safe-Redact/Redact/blob/main/LICENSE" },
  ],
};

function Footer() {
  return (
    <footer className="bg-primary-800 py-section text-white">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-control bg-accent">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="text-heading font-semibold">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 text-body-sm text-white/60">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="mb-4 text-body-sm font-semibold uppercase tracking-wider text-white/40">Product</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-body-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-body-sm font-semibold uppercase tracking-wider text-white/40">Resources</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-body-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-body-sm font-semibold uppercase tracking-wider text-white/40">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-body-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-caption text-white/40">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
