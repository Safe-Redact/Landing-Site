import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Safe Redact",
  description:
    "Download Safe Redact for free. Offline AI-powered redaction for video, audio, images, and documents. Windows 10/11.",
};

const requirements = [
  { label: "Operating System", value: "Windows 10 or 11 (64-bit)" },
  { label: "RAM", value: "8 GB minimum, 16 GB recommended" },
  { label: "Disk Space", value: "500 MB for application, additional space for workspace" },
  { label: "GPU", value: "Optional. DirectML-compatible GPU for faster AI inference. CPU fallback included." },
  { label: "Internet", value: "Not required after installation" },
];

export default function DownloadPage() {
  return (
    <section className="pt-32 pb-section sm:pt-40">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-display font-bold text-primary-800">Download Safe Redact</h1>
          <p className="mb-8 text-body-xl text-primary-500">
            Free and open source. No account required. No telemetry collected.
          </p>

          <div className="mb-8 rounded-panel border border-surface-300 bg-surface-50 p-8">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-heading-lg font-semibold text-primary-800">Safe Redact for Windows</div>
                <div className="text-body-sm text-muted">Version 0.1.0 | ~45 MB</div>
              </div>
            </div>

            <a
              href="https://github.com/Safe-Redact/Redact/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-control bg-accent px-8 py-4 text-body-lg font-medium text-white shadow-lg shadow-accent/25 transition-all duration-200 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 sm:w-auto"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download for Windows
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-body-sm text-muted">
              <span>Windows 10/11</span>
            </div>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/Safe-Redact/Redact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body-sm font-medium text-primary-500 transition-colors hover:text-accent"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Source on GitHub
            </a>
            <span className="text-surface-300">|</span>
            <Link href="/docs" className="text-body-sm font-medium text-primary-500 transition-colors hover:text-accent">
              Read the Documentation
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-heading-xl font-semibold text-primary-800">System Requirements</h2>
          <div className="overflow-hidden rounded-panel border border-surface-300">
            <table className="w-full text-left">
              <tbody>
                {requirements.map((req, i) => (
                  <tr
                    key={req.label}
                    className={`border-b border-surface-300 last:border-b-0 ${
                      i % 2 === 0 ? "bg-surface-50" : "bg-surface-100"
                    }`}
                  >
                    <td className="px-6 py-4 text-body-sm font-medium text-primary-800">{req.label}</td>
                    <td className="px-6 py-4 text-body-sm text-primary-500">{req.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-panel border border-surface-300 bg-surface-50 p-6">
            <h3 className="mb-2 text-heading font-semibold text-primary-800">Build from Source</h3>
            <p className="mb-4 text-body text-primary-500">
              Safe Redact is open source. You can build it yourself from the GitHub repository.
            </p>
            <div className="overflow-x-auto rounded-control bg-primary-800 p-4">
              <code className="text-body-sm text-white/80">
                git clone https://github.com/Safe-Redact/Redact.git{"\n"}
                cd Redact{"\n"}
                dotnet build Redactor.sln -c Release{"\n"}
                dotnet run --project src/Presentation/Redactor.App -c Release
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
