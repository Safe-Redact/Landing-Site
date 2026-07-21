"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/content/site";
import { MobileNav } from "./MobileNav";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-primary-800/95 shadow-lg backdrop-blur-md" : "bg-primary-800",
      )}
    >
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-control bg-accent">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span className="text-heading font-semibold text-white">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/download"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control bg-accent px-5 py-2.5 text-body-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-accent-dark hover:shadow-md"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-control text-white transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

export { Header };
