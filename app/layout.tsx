import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/smoothScroll";
import CustomCursor from "@/components/layout/customCursor";
import Navbar from "@/components/layout/navbar";
import ToastProvider from "@/components/ui/toast-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
 title: "EDITKARO.IN | Premium Video Editing Agency",
 description: "Stories That Stop The Scroll. Cinematic commercials, and viral social content.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="en" className="dark">
 <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased bg-background text-foreground relative`}>
 <div className="fixed inset-0 pointer-events-none bg-noise opacity-[0.03] z-40 mix-blend-overlay"></div>
 <div className="fixed inset-0 pointer-events-none bg-grid-pattern z-0 opacity-40"></div>
 <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-50 mix-blend-screen">
 <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-slate-medium/10 rounded-full blur-[150px] animate-blob" />
 <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-slate-dark/15 rounded-full blur-[180px] animate-blob animation-delay-2000" />
 </div>
 <SmoothScroll>
 <CustomCursor />
 <Navbar />
 {children}
 <ToastProvider />
 </SmoothScroll>
 </body>
 </html>
 );
}