import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: "default" | "surface" | "dark";
  container?: boolean;
}

function SectionWrapper({
  children,
  variant = "default",
  container = true,
  className,
  ...props
}: SectionWrapperProps) {
  const variantStyles = {
    default: "bg-surface-50",
    surface: "bg-surface-100",
    dark: "bg-primary-800 text-white",
  };

  return (
    <section className={cn("py-section", variantStyles[variant], className)} {...props}>
      {container ? <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">{children}</div> : children}
    </section>
  );
}

export { SectionWrapper, type SectionWrapperProps };
