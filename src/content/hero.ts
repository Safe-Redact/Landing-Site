import { WINDOWS_INSTALLER_URL, WINDOWS_RELEASES_URL } from "@/lib/downloads";

export const heroContent = {
  headline: "Redact Sensitive Content.<br />Fully Offline.",
  subheadline:
    "AI-powered desktop app that detects and redacts faces, license plates, on-screen text, and spoken PII from video, audio, images, and documents. Local processing on your computer.",
  primaryCta: { label: "Download RedactPlus", href: WINDOWS_INSTALLER_URL },
  secondaryCta: { label: "Release notes", href: WINDOWS_RELEASES_URL },
  version: "Latest Windows release",
  platform: "Windows 10/11",
  fileSize: "Lite installer",
} as const;
