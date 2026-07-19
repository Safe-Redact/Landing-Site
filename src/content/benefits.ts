import type { Benefit } from "@/types";

export const benefits: Benefit[] = [
  {
    icon: "wifi-off",
    title: "Fully Offline",
    description:
      "No cloud, no telemetry, no internet required after installation. Your sensitive data never leaves your machine. Ideal for air-gapped networks, classified environments, and organizations with strict data policies.",
  },
  {
    icon: "heart",
    title: "Open Source & Free",
    description:
      "MIT licensed. Inspect every line of code, contribute features, or fork it for your organization. The project uses Clean Architecture with clear boundaries, making it straightforward to extend or customize.",
  },
  {
    icon: "shield-check",
    title: "3-Layer Validation",
    description:
      "The only redaction tool that verifies its own work. Structural checks, obscurement verification, and residual AI re-detection ensure every export is truly permanent, not just visually hidden.",
  },
  {
    icon: "monitor",
    title: "Windows Native",
    description:
      "Built on .NET 10 with WPF. Feels like a first-class Windows application because it is one. Fast startup, small footprint, and native OS integration. No Electron, no webview, no resource bloat.",
  },
  {
    icon: "cpu",
    title: "AI Models You Control",
    description:
      "ONNX-based detection with GPU (DirectML) or CPU provider selection. Swap detection models by dropping files into a folder, no code changes required. Model manifest registry keeps everything versioned.",
  },
  {
    icon: "building",
    title: "Enterprise Ready",
    description:
      "SQLite with EF Core migrations for non-destructive upgrades. Audit trails on every state transition. Structured logging with Serilog. WiX/MSI installer support for deployment across teams and departments.",
  },
];
