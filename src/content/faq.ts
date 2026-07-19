import type { FaqItem } from "@/types";

export const faqItems: FaqItem[] = [
  {
    question: "What is Safe Redact?",
    answer:
      "Safe Redact is a free, open-source desktop application for Windows that automatically detects and redacts sensitive content from video, audio, images, and documents. It uses AI to identify faces, license plates, on-screen text, and spoken PII, then applies permanent redaction effects. The entire pipeline runs locally on your machine.",
  },
  {
    question: "Is it really offline?",
    answer:
      "Yes. Safe Redact runs entirely on your local machine. No data is sent to any cloud service, no telemetry is collected, and no internet connection is required after installation. All AI inference happens locally using ONNX Runtime. The app is specifically designed for air-gapped networks and security-sensitive environments.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "Video: MP4, AVI, MOV, MKV, WebM, FLV, WMV, and anything FFmpeg supports. Audio: WAV, MP3, FLAC, AAC, and more. Images: PNG, JPG, BMP, TIFF. Documents: PDF. If your file plays in VLC or opens in a standard viewer, Safe Redact can likely process it.",
  },
  {
    question: "How does the AI detection work?",
    answer:
      'Safe Redact uses YOLOv8n models for face and license plate detection, and Tesseract OCR for on-screen text recognition. An IoU (Intersection over Union) tracker follows detected subjects across frames, creating persistent tracks like "Face 1" or "Plate 3" that you can review individually. Audio transcription uses local whisper.cpp, and spoken PII detection runs via a local LLM.',
  },
  {
    question: "What is 3-layer validation?",
    answer:
      "After redaction, Safe Redact runs three independent verification passes: (1) structural checks confirm the output matches the source format and integrity. (2) Obscurement verification samples rendered output and checks pixel luminance in redacted regions; areas that are too bright trigger a hard failure. (3) Residual re-detection runs the same AI detectors on the output; if any targets are still found, the export is flagged or blocked based on your settings.",
  },
  {
    question: "Can I contribute to the project?",
    answer:
      "Absolutely. Safe Redact is MIT licensed and welcomes contributions. You can review the code, submit bug reports, suggest features, or contribute pull requests. The project uses Clean Architecture with clear layer boundaries (Contracts, Application, Infrastructure, Presentation), making it straightforward to work on specific areas without affecting others.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "Safe Redact requires Windows 10 or 11. To build from source, you need the .NET 10 SDK (10.0.301 or compatible). A GPU with DirectML support is recommended for faster AI inference but not required; CPU fallback works fine. The app probes your hardware at startup (CPU cores, RAM, disk space, CUDA, DirectML) and adapts accordingly.",
  },
  {
    question: "Does it handle audio redaction?",
    answer:
      "Safe Redact can extract audio waveforms, render mute/beep/tone/silence ranges, and run local whisper.cpp transcription. Spoken PII detection runs via a local LLM (LLaMA-based).",
  },
  {
    question: "How does Safe Redact compare to cloud-based tools?",
    answer:
      "Cloud-based redaction services require uploading your sensitive files to external servers, a non-starter for law enforcement body camera footage, legal evidence, classified material, or any content subject to data governance policies. Safe Redact keeps everything on your machine, provides verifiable 3-layer validation, and costs nothing. The tradeoff is that you need a reasonably powerful Windows machine rather than a web browser.",
  },
];
