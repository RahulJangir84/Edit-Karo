import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
 extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
 ({ className, type, ...props }, ref) => {
 return (
 <input
 type={type}
 className={cn(
 "flex h-14 w-full rounded-2xl border border-white/10 glass bg-transparent px-5 py-3 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-light disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-300 focus-visible:border-slate-light/50 hover:border-white/20",
 className
 )}
 ref={ref}
 {...props}
 />
 );
 }
);
Input.displayName = "Input";

export { Input };
