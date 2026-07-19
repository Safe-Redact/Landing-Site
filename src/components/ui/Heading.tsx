import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  children: ReactNode;
}

const levelStyles: Record<HeadingLevel, string> = {
  h1: "text-display-lg tracking-tight text-primary-800",
  h2: "text-display-sm tracking-tight text-primary-800",
  h3: "text-heading-lg text-primary-800",
  h4: "text-heading text-primary-800",
};

function Heading({ level = "h2", className, children, ...props }: HeadingProps) {
  const Tag = level;

  return (
    <Tag className={cn("font-semibold text-balance", levelStyles[level], className)} {...props}>
      {children}
    </Tag>
  );
}

export { Heading, type HeadingProps };
