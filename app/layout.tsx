import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/smoothScroll";
import CustomCursor from "@/components/layout/customCursor";
import Navbar from "@/components/layout/navbar";

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
        <div className="fixed inset-0 pointer-events-none bg-noise opacity-[0.03] z-50 mix-blend-overlay"></div>
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}