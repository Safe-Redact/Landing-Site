"use client";

import { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/content/site";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", onEscape);
      return () => window.removeEventListener("keydown", onEscape);
    }
  }, [open, onClose]);

  return (
    <div className={cn("fixed inset-0 z-50 md:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
      <div
        className={cn(
          "absolute inset-0 bg-black/60 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <nav
        className={cn(
          "absolute right-0 top-0 h-full w-72 bg-primary-800 p-6 transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Mobile navigation"
      >
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" onClick={onClose}>
            <div className="flex h-8 w-8 items-center justify-center rounded-control bg-accent">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-heading font-semibold text-white">{siteConfig.name}</span>
          </Link>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-control text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-control px-4 py-3 text-body font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <Link
            href="/download"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-control bg-accent px-6 py-3 text-body font-medium text-white transition-colors hover:bg-accent-dark"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download
          </Link>
        </div>
      </nav>
    </div>
  );
}

export { MobileNav };
