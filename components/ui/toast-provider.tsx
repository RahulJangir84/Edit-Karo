"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
 return (
 <Toaster
 position="bottom-right"
 toastOptions={{
 style: {
 background: "rgba(25, 25, 25, 0.8)",
 backdropFilter: "blur(16px)",
 border: "1px solid rgba(255, 255, 255, 0.1)",
 color: "#fff",
 borderRadius: "16px",
 },
 }}
 />
 );
}
