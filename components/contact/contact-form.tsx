"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby3MEm21-ctlFS83OcUsuIvhewu5MTRhUSlNzprXSDUk9oTQLNpWlpstBrTtwj4RlCi/exec";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      if (data.phone) formData.append("phone", data.phone);
      formData.append("message", data.message);
      formData.append("type", "contact");

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      toast.success("Message sent! We'll get back to you shortly.");
      reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Name *</label>
          <Input 
            placeholder="John Doe" 
            {...register("name")} 
            className={errors.name ? "border-red-500/50" : ""}
          />
          {errors.name && <p className="text-red-400 text-xs mt-2 ml-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Email *</label>
          <Input 
            type="email" 
            placeholder="john@example.com" 
            {...register("email")}
            className={errors.email ? "border-red-500/50" : ""}
          />
          {errors.email && <p className="text-red-400 text-xs mt-2 ml-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Phone (Optional)</label>
        <Input 
          type="tel" 
          placeholder="+1 (555) 000-0000" 
          {...register("phone")} 
        />
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Message *</label>
        <Textarea 
          placeholder="Tell us about your project, goals, and timeline..." 
          {...register("message")}
          className={errors.message ? "border-red-500/50" : ""}
        />
        {errors.message && <p className="text-red-400 text-xs mt-2 ml-1">{errors.message.message}</p>}
      </div>

      <Button 
        type="submit" 
        variant="gradient" 
        size="lg" 
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Send Message <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
}
