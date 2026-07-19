import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, id, ...props }, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-body-sm font-medium text-primary-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={cn(
          "w-full rounded-control border border-surface-300 bg-surface-50 px-4 py-3 text-body text-primary-800 placeholder:text-muted transition-colors",
          "focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className,
        )}
        {...props}
      />
      {error && <p className="mt-1 text-body-sm text-red-600">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export { Input, type InputProps };
