export const comparison = {
  headings: ["Feature", "Safe Redact", "Cloud Services"],
  rows: [
    { feature: "Data Location", safe: "Your machine only", cloud: "External servers" },
    { feature: "Internet Required", safe: "No, fully offline after install", cloud: "Yes, always" },
    { feature: "Cost", safe: "Free (MIT License)", cloud: "Per-file or subscription fees" },
    { feature: "Open Source", safe: "Yes, fully inspectable", cloud: "No, proprietary" },
    { feature: "Validation", safe: "3-layer automated verification", cloud: "Varies, often manual" },
    { feature: "Telemetry", safe: "Zero, none collected", cloud: "Typically collected" },
    { feature: "Air-Gapped Networks", safe: "Designed for it", cloud: "Not supported" },
    { feature: "Bulk Processing", safe: "Unlimited, local hardware", cloud: "Rate-limited, queue-based" },
    { feature: "Model Control", safe: "Swap ONNX models by file drop", cloud: "Fixed, vendor-controlled" },
    { feature: "Audit Trail", safe: "Every state transition logged", cloud: "Varies by provider" },
  ],
} as const;
