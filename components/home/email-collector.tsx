"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

// The Google Apps Script URL will go here
// Users should replace this with their actual deployed Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

const subscribeSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type SubscribeFormValues = z.infer<typeof subscribeSchema>;

export default function EmailCollector() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call if URL is not provided
    if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Subscribed successfully! (Simulation)");
      setIsSubmitting(false);
      reset();
      return;
    }

    try {
      // Assuming Google Apps Script accepts standard form data or JSON
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("type", "subscribe"); // Optional: to differentiate from contact form

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        // mode: "no-cors", // Sometimes needed for Google Apps Script
      });

      // When using no-cors, response.ok is always false/opaque, so we just assume success if it didn't throw
      toast.success("Thanks for subscribing!");
      reset();
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-accent-cyan/10 rounded-3xl blur-2xl -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass border border-white/10 rounded-3xl p-10 md:p-16 text-center overflow-hidden relative"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/20 rounded-full blur-[100px] pointer-events-none" />
          
          <SectionHeading 
            title="Stay Updated" 
            highlightWord="Updated"
            subtitle="Get the latest trends in video editing, social media algorithms, and exclusive agency offers."
            className="mb-8"
          />

          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto relative z-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 text-left">
                <Input 
                  placeholder="Enter your email address" 
                  {...register("email")}
                  className={errors.email ? "border-red-500/50 focus-visible:border-red-500/50" : ""}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-2 ml-2">{errors.email.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                variant="gradient" 
                disabled={isSubmitting}
                className="h-14 sm:w-auto w-full"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Subscribe <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">We respect your inbox. No spam, ever.</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
