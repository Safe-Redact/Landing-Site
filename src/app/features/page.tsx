import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "AI-powered face, license plate, and text detection with manual redaction controls, 3-layer validation, and full offline operation.",
};

const featureSections = [
  {
    id: "video",
    title: "Video Redaction",
    description:
      "Import any video format and let AI detect faces, license plates, and on-screen text automatically. Draw manual redaction regions, preview effects in real time, and export with verified results.",
    capabilities: [
      "YOLOv8n face and license plate detection",
      "Tesseract OCR for on-screen text",
      "IoU tracker follows subjects across frames",
      "Manual redaction box drawing",
      "Per-region blur, pixelate, or blackout",
      "Adjustable effect strength",
      "Real-time frame preview",
      "Project resume (close and reopen anytime)",
      "Full undo/redo support",
      "Cooperative pause and cancel",
    ],
    formats: "MP4, AVI, MOV, MKV, WebM, FLV, WMV, and more via FFmpeg",
  },
  {
    id: "audio",
    title: "Audio Redaction",
    description:
      "Extract audio waveforms, render mute/beep/tone/silence ranges, and transcribe speech locally. Detect spoken PII using a local LLM without sending audio to any cloud service.",
    capabilities: [
      "Waveform extraction via FFmpeg",
      "Manual mute, beep, tone, and silence ranges",
      "Local whisper.cpp transcription",
      "Spoken PII detection via local LLM",
      "Audio range rendering with preview",
      "Multiple output formats",
    ],
    formats: "WAV, MP3, FLAC, AAC, and more",
  },
  {
    id: "images",
    title: "Image Redaction",
    description:
      "Detect and redact faces, license plates, and sensitive content from images. Process individual photos or batch-process entire directories.",
    capabilities: [
      "Face detection and redaction",
      "License plate detection and redaction",
      "Manual redaction overlays",
      "Blur, pixelate, and blackout effects",
      "Batch processing for large photo sets",
      "Preview before export",
    ],
    formats: "PNG, JPG, BMP, TIFF, and more",
  },
  {
    id: "documents",
    title: "Document Redaction",
    description:
      "Permanently remove sensitive text from PDF documents. AI-powered PII detection identifies names, addresses, phone numbers, and other personal information for redaction.",
    capabilities: [
      "PDF text-based redaction",
      "AI-powered PII detection",
      "Permanent content destruction",
      "Batch document processing",
      "Metadata stripping",
      "Audit trail for compliance",
    ],
    formats: "PDF",
  },
];

export default function FeaturesPage() {
  return (
    <section className="pt-32 pb-section sm:pt-40">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-display font-bold text-primary-800">Features</h1>
          <p className="mx-auto max-w-2xl text-body-xl text-primary-500">
            Everything you need to permanently redact sensitive content from video, audio, images, and documents.
            Every feature runs locally on your machine.
          </p>
        </div>

        <div className="space-y-16">
          {featureSections.map((section, i) => (
            <div
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-panel border border-surface-300 bg-surface-50 p-8 sm:p-10"
            >
              <div className="mb-6">
                <span className="mb-2 inline-block text-body-sm font-medium uppercase tracking-wider text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mb-3 text-heading-xl font-semibold text-primary-800">{section.title}</h2>
                <p className="text-body-lg leading-relaxed text-primary-500">{section.description}</p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-heading font-semibold text-primary-800">Capabilities</h3>
                  <ul className="space-y-2">
                    {section.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-body-sm text-primary-600">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-heading font-semibold text-primary-800">Supported Formats</h3>
                  <p className="text-body text-primary-500">{section.formats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
