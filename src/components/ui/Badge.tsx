import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "success";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default: "bg-surface-200 text-primary-600",
    accent: "bg-accent-100 text-accent-700",
    success: "bg-green-100 text-green-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-chip px-3 py-1 text-caption font-medium",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Badge, type BadgeProps };
