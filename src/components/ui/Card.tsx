import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "highlighted";
}

function Card({ className, variant = "default", ...props }: CardProps) {
  const variantStyles = {
    default: "bg-surface-100",
    bordered: "bg-surface-50 border border-surface-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
    highlighted: "bg-accent-50 border border-accent-200",
  };

  return (
    <div
      className={cn(
        "rounded-panel p-6 transition-all duration-300",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  title: string;
}

function CardHeader({ icon, title, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn("mb-3 flex items-center gap-3", className)} {...props}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-accent-100">
        {icon}
      </div>
      <h3 className="text-heading font-semibold text-primary-800">{title}</h3>
    </div>
  );
}

function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-body text-primary-500", className)} {...props} />;
}

export { Card, CardHeader, CardDescription, type CardProps };
