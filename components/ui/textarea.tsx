import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-2xl border border-white/10 glass bg-transparent px-5 py-4 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan disabled:cursor-not-allowed disabled:opacity-50 cursor-none transition-colors duration-300 focus-visible:border-accent-cyan/50 hover:border-white/20 resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
