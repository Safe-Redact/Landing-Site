import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Safe Redact",
  tagline: "Offline AI Redaction",
  description:
    "Free, open-source desktop app to redact faces, license plates, text, and spoken PII from video, audio, images, and documents. Fully offline. No cloud. No telemetry.",
  url: "https://saferedact.com",
} as const;

export const navLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
];
