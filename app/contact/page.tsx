import { SectionHeading } from "@/components/ui/section-heading";
import ContactForm from "@/components/contact/contact-form";
import Footer from "@/components/layout/footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Contact Us | EDITKARO.IN",
  description: "Get in touch with us to discuss your next video project.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col pt-32">
      <section className="py-20 px-6 container mx-auto relative z-10">
        <SectionHeading 
          title="Let's Talk" 
          highlightWord="Talk"
          subtitle="Ready to elevate your brand's content? Reach out and let's create something extraordinary together."
        />

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto mt-16">
          
          {/* Left Side: Company Info */}
          <div className="w-full lg:w-5/12 flex flex-col gap-10">
            <div>
              <h3 className="text-3xl font-heading font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 group-hover:border-accent-cyan/50 group-hover:text-accent-cyan transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="text-white font-medium">hello@editkaro.in</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 group-hover:border-accent-purple/50 group-hover:text-accent-purple transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="text-white font-medium">+91 (800) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 group-hover:border-accent-blue/50 group-hover:text-accent-blue transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Our Studio</p>
                  <p className="text-white font-medium">123 Creative Hub, Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-7/12">
            <div className="glass border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />
              
              <h3 className="text-2xl font-heading font-bold text-white mb-8 relative z-10">Send Us a Message</h3>
              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
