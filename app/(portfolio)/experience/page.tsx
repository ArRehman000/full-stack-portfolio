"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Experience {
  id: number;
  company: string;
  initials: string;
  location: string;
  role: string;
  period: string;
  isCurrent: boolean;
  logoVariant: "purple" | "teal" | "coral";
  bullets: string[];
  tags: string[];
  highlightTags: string[];
}

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Petalnex",
    initials: "PN",
    location: "Mansehra, Pakistan",
    role: "Full Stack Developer",
    period: "Sep 2025 — Present",
    isCurrent: true,
    logoVariant: "purple",
    bullets: [
      "Built scalable web apps using Next.js, React, Node.js and Express — focused on performance and clean, modular architecture.",
      "Designed RESTful APIs with auth, authorization and secure data handling for production environments.",
      "Developed a full HRMS platform — attendance, leaves, tasks, meetings, projects, departments and notifications modules.",
      "Led MongoDB schema design, indexing strategy and performance tuning across all collections."
    ],
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "HRMS", "REST API", "JWT Auth"],
    highlightTags: ["Next.js", "Node.js"]
  },
  {
    id: 2,
    company: "TwoCoders",
    initials: "TC",
    location: "Remote",
    role: "Full Stack Developer",
    period: "Oct 2024 — Aug 2025",
    isCurrent: false,
    logoVariant: "teal",
    bullets: [
      "Developed scalable apps with React, Next.js, Node.js, Express and NestJS ensuring high performance and smooth UX.",
      "Built Chrome extensions that enhanced browser productivity and boosted user engagement metrics.",
      "Integrated LangChain.js AI capabilities into apps for natural language processing and intelligent automation workflows.",
      "Built a fitness app backend with Node.js, Express, TypeScript and MongoDB — designed for future React Native mobile integration."
    ],
    tags: ["NestJS", "LangChain.js", "React", "Chrome Ext.", "TypeScript", "MongoDB", "AI Integration"],
    highlightTags: ["NestJS", "LangChain.js"]
  },
  {
    id: 3,
    company: "Octaloop Technologies",
    initials: "OL",
    location: "Islamabad, Pakistan",
    role: "Full Stack Developer",
    period: "Aug 2023 — Sep 2024",
    isCurrent: false,
    logoVariant: "coral",
    bullets: [
      "Built and maintained client web apps using React, Next.js, Node.js and Express across multiple simultaneous projects.",
      "Developed and integrated Web3 features — wallet connect, Ethereum smart contracts and NFT minting for dApps.",
      "Implemented server-side AI model request/response pipelines using Node.js for production applications.",
      "Designed and managed both SQL and NoSQL database schemas and data storage solutions across all client projects."
    ],
    tags: ["Web3.js", "Ethereum", "React", "Next.js", "Node.js", "SQL", "Smart Contracts", "Git"],
    highlightTags: ["Web3.js", "Ethereum"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] px-6 py-16 md:px-14 selection:bg-purple-500/30">
      <div className="max-w-4xl">
        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-7 bg-purple-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">Career</span>
          </div>
          <h2 className="mt-4 text-[34px] font-medium leading-tight text-[#f0eeff]">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-700">3 years &middot; 3 companies &middot; full-stack all the way</p>
        </header>

        {/* Timeline Content */}
        <div className="relative">
          {/* Vertical Timeline Spine */}
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/15 to-transparent" />

          {/* Experience List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {EXPERIENCES.map((exp) => (
              <motion.div 
                key={exp.id} 
                variants={itemVariants}
                className="group flex gap-8 mb-7 relative"
              >
                {/* Dot Column */}
                <div className="relative shrink-0 pt-5">
                  <div className={cn(
                    "w-[39px] h-[39px] rounded-full border flex items-center justify-center bg-[#0a0a0f] z-10 relative transition-colors duration-300",
                    exp.isCurrent ? "border-purple-500/60 bg-purple-500/8" : "border-white/6"
                  )}>
                    <div className={cn(
                      "w-[11px] h-[11px] rounded-full transition-all duration-300",
                      exp.isCurrent ? "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" : "bg-[#2a2a35]"
                    )} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={cn(
                  "flex-1 rounded-2xl border p-6 transition-all duration-300",
                  exp.isCurrent 
                    ? "border-purple-500/22 bg-purple-500/[0.04] hover:border-purple-500/35 shadow-sm shadow-purple-500/5" 
                    : "border-white/[0.07] bg-white/[0.02] hover:border-purple-500/20 hover:bg-purple-500/[0.03]"
                )}>
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-10 h-10 rounded-[10px] flex items-center justify-center text-[11px] font-bold border transition-colors duration-300",
                        exp.logoVariant === "purple" && "bg-purple-500/14 text-purple-300 border-purple-500/25",
                        exp.logoVariant === "teal" && "bg-teal-500/12 text-teal-400 border-teal-500/25",
                        exp.logoVariant === "coral" && "bg-orange-500/12 text-orange-400 border-orange-500/25",
                      )}>
                        {exp.initials}
                      </div>
                      <div>
                        <h3 className="text-[15px] font-medium text-zinc-100">{exp.company}</h3>
                        <p className="text-[11px] text-zinc-600 font-medium tracking-tight mt-0.5">{exp.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                       <span className={cn(
                        "px-2.5 py-1 rounded-full text-[10px] font-semibold border flex items-center gap-1.5 transition-colors duration-300",
                        exp.isCurrent 
                          ? "bg-green-500/10 text-green-500 border-green-500/20" 
                          : "bg-white/5 text-zinc-500 border-white/5"
                      )}>
                        {exp.isCurrent && <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />}
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Role Title */}
                  <div className="mb-6">
                    <span className="inline-flex rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-[11px] font-medium text-purple-400 leading-none">
                      {exp.role}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-8">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 text-[13px] leading-relaxed text-zinc-500 group/item">
                        <Check size={14} className="mt-1 shrink-0 text-purple-500/50 group-hover/item:text-purple-500 transition-colors" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tags.map((tag) => {
                      const isHighlighted = exp.highlightTags.includes(tag);
                      return (
                        <span 
                          key={tag} 
                          className={cn(
                            "px-3 py-1 rounded-md text-[11px] font-medium border transition-all duration-300",
                            isHighlighted 
                              ? "bg-purple-500/10 text-purple-400 border-purple-500/25 shadow-sm shadow-purple-500/10" 
                              : "bg-white/[0.03] text-zinc-500 border-white/[0.06] hover:text-zinc-400 hover:border-white/10"
                          )}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
