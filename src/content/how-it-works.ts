import type { Step } from "@/types";

export const steps: Step[] = [
  {
    number: "01",
    title: "Import Your File",
    description:
      "Drop any supported file: video (MP4, AVI, MOV, MKV), audio (WAV, MP3, FLAC), images (PNG, JPG), or documents (PDF). Safe Redact probes the format, duration, and streams. Everything happens locally.",
  },
  {
    number: "02",
    title: "AI Automatic Detection",
    description:
      'Click one button to run face detection, license plate detection, and OCR across your content. The IoU tracker links detections into persistent tracks ("Face 1", "Plate 2") with confidence scores.',
  },
  {
    number: "03",
    title: "Review & Adjust",
    description:
      "Browse detected subjects to accept or reject each AI finding. Draw additional redaction regions manually for edge cases the AI missed. Preview the actual blur, pixelate, or blackout composited on the current frame in real time.",
  },
  {
    number: "04",
    title: "Validate & Export",
    description:
      "Three-layer validation runs automatically: structural checks, obscurement verification, and residual re-detection. Only after all three pass does Safe Redact export your clean file with metadata stripped, ready for distribution.",
  },
];
