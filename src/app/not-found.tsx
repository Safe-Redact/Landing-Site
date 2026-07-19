import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-100">
        <svg className="h-10 w-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </div>
      <h1 className="mb-2 text-display-sm font-bold text-primary-800">Page Not Found</h1>
      <p className="mb-8 max-w-md text-body-lg text-primary-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-control bg-accent px-6 py-3 text-body font-medium text-white transition-colors hover:bg-accent-dark"
      >
        Back to {siteConfig.name}
      </Link>
    </section>
  );
}
