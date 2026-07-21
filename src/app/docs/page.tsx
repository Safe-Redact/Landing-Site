"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sections = [
  {
    title: "Getting Started",
    items: [
      { slug: "installation", label: "Installation" },
      { slug: "quick-start", label: "Quick Start" },
      { slug: "system-requirements", label: "System Requirements" },
    ],
  },
  {
    title: "User Guide",
    items: [
      { slug: "video-redaction", label: "Video Redaction" },
      { slug: "audio-redaction", label: "Audio Redaction" },
      { slug: "image-redaction", label: "Image Redaction" },
      { slug: "document-redaction", label: "Document Redaction" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { slug: "building-from-source", label: "Building from Source" },
      { slug: "ai-models", label: "AI Models" },
      { slug: "troubleshooting", label: "Troubleshooting" },
    ],
  },
];

const docs: Record<string, { title: string; content: string }> = {
  installation: {
    title: "Installation",
    content: `## Download

Download the latest release from the [Download page](/download).

## Install

1. Run the installer (.msi or .exe)
2. Follow the installation wizard
3. Safe Redact will be installed to \`C:\\Program Files\\Safe Redact\\\`
4. Launch from the Start Menu or desktop shortcut

## First Launch

On first launch, Safe Redact probes your hardware:
- CPU cores and speed
- Available RAM
- Disk space in the workspace directory
- GPU capabilities (CUDA, DirectML)

If a GPU is not detected, the app falls back to CPU inference. This is normal and does not affect functionality, only speed.

## Configuration

The default workspace is located at \`%LOCALAPPDATA%\\SafeRedact\\Workspace\\\`. You can change this in Settings.`,
  },
  "quick-start": {
    title: "Quick Start",
    content: `## Redact Your First Video

1. **Import**: Click File > Open or drag a video file into the editor
2. **Detect**: Click the "AI Detection" button in the toolbar. Safe Redact will scan frames and identify faces, license plates, and text
3. **Review**: Browse the Video Activity panel. Accept or reject each detected finding
4. **Export**: Click "Export" in the top-right corner. Three-layer validation runs automatically
5. **Done**: Your redacted video is saved to your chosen location

## Manual Redaction

If the AI misses something:
1. Navigate to the frame where you want to add redaction
2. Select "Manual" from the toolbar
3. Draw a rectangle over the sensitive area
4. Choose an effect (blur, pixelate, or blackout)
5. Set the time range for the redaction

## Preview

Before exporting, you can preview the actual redacted output on any frame. Click the "Preview" button to see exactly what the exported video will look like.`,
  },
  "system-requirements": {
    title: "System Requirements",
    content: `## Minimum Requirements

| Component | Requirement |
|-----------|-------------|
| OS | Windows 10 (64-bit) or Windows 11 |
| RAM | 8 GB |
| Disk | 500 MB for application + workspace space |
| GPU | Not required (CPU fallback included) |

## Recommended

| Component | Recommendation |
|-----------|----------------|
| OS | Windows 11 |
| RAM | 16 GB or more |
| GPU | DirectML-compatible GPU (NVIDIA, AMD, or Intel) |
| Disk | SSD for workspace |

## Build Requirements

To build from source:
- .NET 10 SDK (10.0.301 or compatible)
- Windows 10/11

## GPU Support

Safe Redact supports GPU acceleration via DirectML. This works with:
- NVIDIA GPUs (via DirectML)
- AMD GPUs (via DirectML)
- Intel GPUs (via DirectML)

If no GPU is detected, the app uses CPU inference. This is slower but fully functional.`,
  },
  "video-redaction": {
    title: "Video Redaction",
    content: `## Importing Video

Safe Redact supports all video formats that FFmpeg can handle: MP4, AVI, MOV, MKV, WebM, FLV, WMV, and many more.

Drag and drop a file or use File > Open. The app probes the video and displays codec, duration, dimensions, and FPS information.

## AI Detection

Click "AI Detection" to automatically identify:
- **Faces** (YOLOv8n model)
- **License plates** (YOLOv8n model)
- **On-screen text** (Tesseract OCR)

The IoU tracker follows each detected subject across frames, creating persistent tracks like "Face 1", "Plate 2", etc.

## Manual Redaction

Select "Manual" from the toolbar, then draw rectangles on the video preview. Each box can have:
- A custom effect (blur, pixelate, or blackout)
- Adjustable strength
- A specific time range

## Review

The Video Activity panel shows one row per detected subject. You can:
- Accept or reject individual findings
- Search through detected tracks
- View thumbnails and frame counts

## Effects

- **Blur**: Gaussian blur with adjustable radius
- **Pixelate**: Mosaic effect with adjustable block size
- **Blackout**: Solid color overlay with adjustable opacity

## Export

Click "Export" to render the redacted video. Three-layer validation runs automatically before the file is saved.`,
  },
  "audio-redaction": {
    title: "Audio Redaction",
    content: `## Audio Waveform

Safe Redact extracts audio waveforms using FFmpeg. The waveform is displayed in the timeline for visual reference.

## Manual Audio Redaction

Select audio ranges in the timeline and apply effects:
- **Mute**: Silence the selected range
- **Beep**: Replace with a tone
- **Tone**: Replace with a configurable tone
- **Silence**: Replace with complete silence

## Transcription

When configured, Safe Redact can transcribe audio using local whisper.cpp. This requires:
- Setting the \`SAFEREDACT_WHISPER_CLI\` environment variable
- Setting the \`SAFEREDACT_WHISPER_MODEL\` environment variable

## Spoken PII Detection

After transcription, a local LLM analyzes the text for spoken PII (names, phone numbers, addresses, etc.). Detected items appear as redaction plan items in the timeline.`,
  },
  "image-redaction": {
    title: "Image Redaction",
    content: `## Importing Images

Safe Redact supports PNG, JPG, BMP, TIFF, and other common image formats.

## AI Detection

The same YOLO models used for video also work on images. Safe Redact detects faces and license plates in static images.

## Manual Redaction

Draw rectangles on the image to redact specific areas. Choose from blur, pixelate, or blackout effects.

## Batch Processing

For large photo sets, Safe Redact can process multiple images in sequence. Import a folder and apply the same detection settings to all images.`,
  },
  "document-redaction": {
    title: "Document Redaction",
    content: `## PDF Redaction

Safe Redact supports text-based redaction of PDF documents.

## AI PII Detection

The AI scans document text for personally identifiable information:
- Names and addresses
- Phone numbers and email addresses
- Social Security numbers
- Dates of birth
- Account numbers

## Permanent Removal

Unlike visual overlay redaction, Safe Redact performs permanent content destruction on PDF text. The redacted content cannot be recovered from the exported file.

## Batch Processing

Process multiple PDFs at once. Import a folder and apply the same detection settings to all documents.`,
  },
  "building-from-source": {
    title: "Building from Source",
    content: `## Prerequisites

- Windows 10 or 11
- .NET 10 SDK (10.0.301 or compatible)

## Clone and Build

\`\`\`
git clone https://github.com/Safe-Redact/Redact.git
cd Redact
dotnet build Redactor.sln -c Release
\`\`\`

## Run

\`\`\`
dotnet run --project src/Presentation/Redactor.App -c Release
\`\`\`

## Run Tests

\`\`\`
dotnet test Redactor.sln
\`\`\`

## Project Structure

The solution uses Clean Architecture:
- \`src/Core/Redactor.Contracts\` - Shared types and interfaces
- \`src/Core/Redactor.Application\` - Orchestration and business logic
- \`src/Core/Redactor.AI.Abstractions\` - AI adapter interfaces
- \`src/Infrastructure/\` - FFmpeg, ONNX, SQLite implementations
- \`src/Presentation/Redactor.App\` - WPF application`,
  },
  "ai-models": {
    title: "AI Models",
    content: `## Detection Models

Safe Redact uses YOLOv8n models for visual detection:
- **Face detection**: \`yolov8n-face.onnx\`
- **License plate detection**: \`yolov8n-plate.onnx\`

## OCR Engine

Tesseract 4.1.1 is used for on-screen text recognition.

## Model Swapping

Models are file-based. To swap a detection model:
1. Place the new ONNX model in the \`models/detection/\` folder
2. Update the model manifest (\`models.manifest.json\`)
3. Restart the application

No code changes are required.

## GPU Acceleration

ONNX Runtime supports GPU acceleration via DirectML. The app probes for GPU availability at startup and selects the optimal provider automatically.

## Audio Models

- **Transcription**: whisper.cpp with GGML models
- **Spoken PII detection**: LLaMA-based local LLM`,
  },
  troubleshooting: {
    title: "Troubleshooting",
    content: `## App Won't Start

- Ensure .NET 10 runtime is installed
- Check that the workspace directory is writable
- Run as administrator if permissions are an issue

## AI Detection Is Slow

- A GPU with DirectML support significantly speeds up inference
- Without a GPU, detection runs on CPU (slower but functional)
- Reduce the frame sampling rate in Settings

## Export Fails

- Check available disk space in the workspace directory
- Ensure the output path is writable
- Verify the source file is not corrupted (ffprobe will report errors)

## Audio Transcription Not Working

- Ensure \`SAFEREDACT_WHISPER_CLI\` and \`SAFEREDACT_WHISPER_MODEL\` are set
- Verify whisper.cpp is installed and accessible
- Check that the audio file has a detectable audio stream

## Validation Fails

- Layer 1 (Structural): The output file may be corrupted. Try re-exporting.
- Layer 2 (Obscurement): The redaction effect may be too weak. Increase strength.
- Layer 3 (Re-detection): The AI still detects targets. Review and re-apply redaction.

## How to Report Issues

Open an issue on [GitHub](https://github.com/Safe-Redact/Redact/issues) with:
- Windows version
- .NET SDK version
- GPU model (if any)
- Steps to reproduce
- Error messages or screenshots`,
  },
};

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("installation");
  const currentDoc = docs[activeSection];

  return (
    <section className="pt-32 pb-section sm:pt-40">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2 text-display-sm font-bold text-primary-800">Documentation</h1>
          <p className="text-body-xl text-primary-500">Everything you need to get started with Safe Redact.</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="w-full shrink-0 lg:w-64">
            <nav className="sticky top-24 space-y-6">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-2 text-body-sm font-semibold uppercase tracking-wider text-muted">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.slug}>
                        <button
                          onClick={() => setActiveSection(item.slug)}
                          className={cn(
                            "w-full rounded-control px-3 py-2 text-left text-body-sm transition-colors",
                            activeSection === item.slug
                              ? "bg-accent-100 font-medium text-accent"
                              : "text-primary-600 hover:bg-surface-100 hover:text-primary-800",
                          )}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          <main className="flex-1 min-w-0">
            {currentDoc && (
              <article className="rounded-panel border border-surface-300 bg-surface-50 p-8 sm:p-10">
                <h2 className="mb-6 text-heading-xl font-semibold text-primary-800">{currentDoc.title}</h2>
                <div className="space-y-4 text-body leading-relaxed text-primary-600">
                  {currentDoc.content.split("\n\n").map((paragraph, i) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h3 key={i} className="mb-3 mt-8 text-heading-lg font-semibold text-primary-800">
                          {paragraph.replace("## ", "")}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith("| ")) {
                      const rows = paragraph.split("\n").filter((r) => r.startsWith("|"));
                      const isHeader = rows[0]?.includes("---");
                      const dataRows = isHeader ? rows.slice(2) : rows;
                      return (
                        <div key={i} className="my-4 overflow-x-auto rounded-control border border-surface-300">
                          <table className="w-full text-left text-body-sm">
                            <thead>
                              <tr className="border-b border-surface-300 bg-surface-100">
                                {rows[0]
                                  ?.split("|")
                                  .filter(Boolean)
                                  .map((cell, j) => (
                                    <th key={j} className="px-4 py-2 font-semibold text-primary-800">
                                      {cell.trim()}
                                    </th>
                                  ))}
                              </tr>
                            </thead>
                            <tbody>
                              {dataRows.map((row, j) => (
                                <tr key={j} className="border-b border-surface-300 last:border-b-0">
                                  {row
                                    .split("|")
                                    .filter(Boolean)
                                    .map((cell, k) => (
                                      <td key={k} className="px-4 py-2 text-primary-600">
                                        {cell.trim()}
                                      </td>
                                    ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    if (paragraph.startsWith("```")) {
                      const code = paragraph.replace(/```\w*\n?/, "").replace(/```$/, "");
                      return (
                        <pre key={i} className="my-4 overflow-x-auto rounded-control bg-primary-800 p-4">
                          <code className="text-body-sm text-white/80">{code}</code>
                        </pre>
                      );
                    }
                    if (paragraph.startsWith("- ")) {
                      return (
                        <ul key={i} className="my-3 space-y-2 pl-4">
                          {paragraph.split("\n").map((line, j) => (
                            <li key={j} className="flex items-start gap-2 text-body text-primary-600">
                              <svg className="mt-1 h-3 w-3 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                              {line.replace("- ", "")}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={i}>{paragraph}</p>;
                  })}
                </div>
              </article>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
