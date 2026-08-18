"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Clock, 
  MapPin, 
  Mail, 
  ExternalLink, 
  ArrowUpRight,
  Loader2,
  Phone
} from "lucide-react";
import { cn } from "@/lib/utils";

// Custom Icon Components for Brand consistency
const LinkedInIcon = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SUBJECT_OPTIONS = ["Full-time Role", "Freelance Project", "Collaboration", "Just saying hi"];

const CONTACT_INFO = [
  { label: "Phone", value: "+92 307 759 0177", icon: Phone, color: "bg-purple-500/10", iconColor: "text-purple-400" },
  { label: "Email", value: "ar.abdurrehman611@gmail.com", icon: Mail, color: "bg-orange-500/10", iconColor: "text-orange-400" },
  { label: "LinkedIn", value: "linkedin.com/in/abdur-rehman-273b271bb/", icon: LinkedInIcon, color: "bg-blue-500/10", iconColor: "text-blue-400" },
  { label: "GitHub", value: "github.com/ArRehman000", icon: GithubIcon, color: "bg-zinc-500/10", iconColor: "text-zinc-400" },
];

const SOCIAL_CARDS = [
  { name: "LinkedIn", icon: LinkedInIcon, color: "text-blue-400", bg: "bg-blue-400/10", href: "https://www.linkedin.com/in/abdur-rehman-273b271bb/" },
  { name: "GitHub", icon: GithubIcon, color: "text-zinc-400", bg: "bg-zinc-400/10", href: "https://github.com/ArRehman000" },
  { name: "Email", icon: Mail, color: "text-orange-400", bg: "bg-orange-400/10", href: "mailto:ar.abdurrehman611@gmail.com" },
];

export default function ContactPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Full-time Role",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputStyles = "bg-white/[0.03] border border-white/[0.08] rounded-[10px] px-3.5 py-2.5 text-xs text-zinc-300 placeholder:text-zinc-700 outline-none focus:border-purple-500/40 focus:bg-purple-500/[0.04] transition w-full";

  return (
    <main className="min-h-screen bg-[#0a0a0f] px-6 py-16 md:px-14 relative overflow-hidden selection:bg-purple-500/30">
      {/* Background Glows */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,111,255,0.05),transparent_70%)] -top-24 -right-24 pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.04),transparent_70%)] -bottom-10 left-24 pointer-events-none" />

      <div className="max-w-6xl mx-auto lg:mx-0">
        <header className="mb-12 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-7 bg-purple-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">Contact</span>
          </div>
          <h2 className="mt-4 text-[34px] font-medium leading-tight text-[#f0eeff]">
            Let&apos;s <span className="text-purple-400">work together</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-700">Open to freelance projects, full-time roles and interesting collabs</p>
        </header>

        <motion.div 
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10"
        >
          {/* Left Column */}
          <motion.div variants={fadeIn} className="flex flex-col">
            {/* Availability Card */}
            <div className="bg-purple-500/[0.06] border border-purple-500/20 rounded-2xl p-5 flex gap-3.5 mb-5 group">
              <div className="w-10 h-10 rounded-[10px] bg-purple-500/14 border border-purple-500/25 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-purple-200">Available for new opportunities</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                  Currently open to full-time roles and freelance projects. Usually respond within 24 hours.
                </p>
                <div className="inline-flex items-center gap-1.5 mt-3.5 px-2.5 py-1 rounded-full bg-green-500/7 border border-green-500/20 text-green-400 text-[10px] font-medium uppercase tracking-wide">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400"></span>
                  </span>
                  Actively looking
                </div>
              </div>
            </div>

            {/* Info Rows */}
            <div className="flex flex-col gap-2.5 mb-10">
              {CONTACT_INFO.map((info) => {
                const isEmail = info.label === "Email";
                const href = isEmail ? `mailto:${info.value}` : info.label === "LinkedIn" ? `https://${info.value}` : info.label === "GitHub" ? `https://${info.value}` : undefined;
                
                const Content = (
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/20 transition cursor-pointer group">
                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", info.color)}>
                      <info.icon size={16} className={info.iconColor} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold">{info.label}</p>
                      <p className="text-xs text-zinc-400 mt-0.5">{info.value}</p>
                    </div>
                    <ExternalLink size={12} className="ml-auto text-zinc-700 group-hover:text-purple-500 transition-colors" />
                  </div>
                );

                if (href) {
                  return (
                    <a key={info.label} href={href} target={isEmail ? undefined : "_blank"} rel={isEmail ? undefined : "noopener noreferrer"}>
                      {Content}
                    </a>
                  );
                }

                return <div key={info.label}>{Content}</div>;
              })}
            </div>

            {/* Socials Block */}
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-600 mb-4 font-bold">Find me on</p>
              <div className="flex gap-2">
                {SOCIAL_CARDS.map((platform) => (
                  <a 
                    key={platform.name}
                    href={platform.href}
                    target={platform.name === "Email" ? undefined : "_blank"}
                    rel={platform.name === "Email" ? undefined : "noopener noreferrer"}
                    className="flex-1 py-4 px-2 rounded-xl border border-white/[0.06] bg-white/[0.02] flex flex-col items-center gap-2 hover:border-purple-500/25 hover:bg-purple-500/[0.05] transition cursor-pointer group"
                  >
                    <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110", platform.bg)}>
                      <platform.icon size={16} className={platform.color} />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-medium">{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div variants={fadeIn}>
            <div className="bg-white/[0.02] border border-white/[0.07] rounded-[18px] p-8 shadow-2xl">
              <h3 className="text-[15px] font-medium text-zinc-200">Send a message</h3>
              <p className="text-xs text-zinc-500 mt-1.5 mb-8">Fill out the form and I&apos;ll get back to you within 24 hours.</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <p className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold ml-1">First Name</p>
                    <input 
                      type="text" 
                      placeholder="John" 
                      className={inputStyles}
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold ml-1">Last Name</p>
                    <input 
                      type="text" 
                      placeholder="Doe" 
                      className={inputStyles}
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold ml-1">Email Address</p>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className={inputStyles}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold ml-1">I&apos;m reaching out about</p>
                  <div className="flex flex-wrap gap-2">
                    {SUBJECT_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setFormData({...formData, subject: opt})}
                        className={cn(
                          "px-3.5 py-1.5 rounded-full text-[10px] font-medium border transition-all duration-200",
                          formData.subject === opt
                            ? "bg-purple-500/10 border-purple-500/30 text-purple-300 shadow-sm shadow-purple-500/5"
                            : "bg-white/[0.03] border-white/[0.07] text-zinc-500 hover:text-zinc-300"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold ml-1">Message</p>
                  <textarea 
                    placeholder="Tell me about your project or opportunity..." 
                    className={cn(inputStyles, "h-24 resize-none")}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting || isSubmitted}
                  className={cn(
                    "w-full py-3.5 mt-4 rounded-[12px] text-sm font-semibold transition-all flex items-center justify-center gap-2",
                    isSubmitted 
                      ? "bg-emerald-500 text-white" 
                      : "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/10"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    "Message Sent ✓"
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-zinc-700 text-center mt-6">
                  No spam. Ever. I respond to every message personally.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
