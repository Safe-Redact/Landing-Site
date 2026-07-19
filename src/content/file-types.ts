import type { Feature } from "@/types";

export const fileTypes: Feature[] = [
  {
    icon: "video",
    title: "Video",
    description:
      "MP4, AVI, MOV, MKV, WebM, and anything FFmpeg supports. AI-powered face, license plate, and text detection with per-region blur, pixelate, or blackout effects.",
  },
  {
    icon: "headphones",
    title: "Audio",
    description:
      "WAV, MP3, FLAC, AAC, and more. Local whisper.cpp transcription, spoken PII detection via LLM, and mute/beep/tone/silence range rendering.",
  },
  {
    icon: "image",
    title: "Images",
    description:
      "PNG, JPG, BMP, TIFF. Face and license plate detection with redaction overlays. Batch processing for large photo sets.",
  },
  {
    icon: "file-text",
    title: "Documents",
    description:
      "PDF support with text-based redaction. AI-powered PII detection across document content for permanent removal.",
  },
];
