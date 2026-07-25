"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
 extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 variant?: "default" | "outline" | "ghost" | "gradient";
 size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
 ({ className, variant = "default", size = "default", ...props }, ref) => {
 return (
 <button
 ref={ref}
 className={cn(
 "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-light disabled:pointer-events-none disabled:opacity-50 ",
 {
 "bg-white text-black hover:bg-slate-light hover:shadow-[0_0_20px_rgba(164,181,190,0.4)]": variant === "default",
 "border border-white/20 glass hover:bg-white/10 hover:border-white/30 text-white": variant === "outline",
 "hover:bg-white/10 hover:text-white text-gray-300": variant === "ghost",
 "bg-gradient-to-r from-slate-medium via-slate-light to-slate-dark text-black hover:opacity-90 shadow-[0_0_20px_rgba(164,181,190,0.2)]": variant === "gradient",
 "h-12 px-8 py-3": size === "default",
 "h-10 px-6 py-2 text-xs": size === "sm",
 "h-14 px-10 py-4 text-base": size === "lg",
 "h-12 w-12": size === "icon",
 },
 className
 )}
 {...props}
 />
 );
 }
);
Button.displayName = "Button";

export { Button };
