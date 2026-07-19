export const pillars = [
  {
    title: "Detection",
    subtitle: "AI finds what matters",
    description: "Automatically identify faces, license plates, on-screen text, and spoken PII across video, audio, images, and documents.",
    features: [
      "YOLOv8n face and license plate detection",
      "Tesseract OCR for on-screen text",
      "IoU tracker for persistent subject tracking",
      "Local whisper.cpp audio transcription",
      "LLM-based spoken PII detection",
    ],
    icon: "brain",
  },
  {
    title: "Control",
    subtitle: "You decide what gets redacted",
    description: "Review every AI finding, draw manual regions, and preview the exact output before exporting. Full undo/redo support.",
    features: [
      "Track-centric review with accept/reject",
      "Manual redaction box drawing",
      "Per-region blur, pixelate, or blackout",
      "Adjustable effect strength",
      "Real-time frame preview",
    ],
    icon: "sliders",
  },
  {
    title: "Validation",
    subtitle: "Proof that redaction worked",
    description: "Three independent verification layers ensure every export is permanently redacted. No other tool does this.",
    features: [
      "Structural integrity checks (ffprobe)",
      "Obscurement verification (pixel luminance)",
      "Residual re-detection with same AI models",
      "Metadata stripping confirmation",
      "Configurable pass/fail thresholds",
    ],
    icon: "shield-check",
  },
] as const;
