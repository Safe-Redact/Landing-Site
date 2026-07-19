import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Safe Redact",
  tagline: "Offline AI Redaction",
  description:
    "Free, open-source desktop app to redact faces, license plates, text, and spoken PII from video, audio, images, and documents. Fully offline. No cloud. No telemetry.",
  url: "https://saferedact.com",
} as const;

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
];
