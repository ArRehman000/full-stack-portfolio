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
      "Built full-stack features across frontend (Next.js/React) and backend (Node.js/Express) with MongoDB for production applications.",
      "Developed an AI-powered RAG application for intelligent document search and Q&A, integrating vector-based retrieval with LLM responses.",
      "Contributed to Petalnex HRMS, covering attendance, leave, task, and employee management modules.",
      "Designed RESTful APIs and implemented authentication and secure data handling for enterprise workflows.",
    ],
    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RAG",
      "Pinecone",
      "REST API",
      "Authentication",
    ],
    highlightTags: ["Next.js", "RAG"],
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
      "Integrated LangChain.js for AI-driven automation and natural language processing features.",
      "Built a Chrome extension to enhance browser functionality and user productivity.",
      "Developed a React Native mobile app with a Groq-model-powered backend for AI-driven features.",
      "Built a fitness app backend with Node.js, Express.js, and TypeScript, including structured APIs and MongoDB optimization.",
    ],
    tags: [
      "LangChain.js",
      "React Native",
      "Groq API",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Chrome Extension APIs",
      "MongoDB",
    ],
    highlightTags: ["LangChain.js", "Groq API"],
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
      "Built web applications and APIs using React.js, Next.js, Node.js, and Express.",
      "Designed SQL/NoSQL database schemas and handled AI model request processing for backend services.",
      "Developed Web3 dApp features using Ethereum and smart contracts.",
    ],
    tags: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "SQL",
      "NoSQL",
      "Ethereum",
      "Smart Contracts",
      "dApps",
    ],
    highlightTags: ["Ethereum", "Smart Contracts"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] px-6 py-16 md:px-14 selection:bg-purple-500/30">
      <div className="max-w-4xl">
        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-7 bg-purple-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">
              Career
            </span>
          </div>
          <h2 className="mt-4 text-[34px] font-medium leading-tight text-[#f0eeff]">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-700">
            3+ years &middot; 3 companies &middot; full-stack all the way
          </p>
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
                  <div
                    className={cn(
                      "w-[39px] h-[39px] rounded-full border flex items-center justify-center bg-[#0a0a0f] z-10 relative transition-colors duration-300",
                      exp.isCurrent
                        ? "border-purple-500/60 bg-purple-500/8"
                        : "border-white/6",
                    )}
                  >
                    <div
                      className={cn(
                        "w-[11px] h-[11px] rounded-full transition-all duration-300",
                        exp.isCurrent
                          ? "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                          : "bg-[#2a2a35]",
                      )}
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={cn(
                    "flex-1 rounded-2xl border p-6 transition-all duration-300",
                    exp.isCurrent
                      ? "border-purple-500/22 bg-purple-500/[0.04] hover:border-purple-500/35 shadow-sm shadow-purple-500/5"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-purple-500/20 hover:bg-purple-500/[0.03]",
                  )}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-[10px] flex items-center justify-center text-[11px] font-bold border transition-colors duration-300",
                          exp.logoVariant === "purple" &&
                            "bg-purple-500/14 text-purple-300 border-purple-500/25",
                          exp.logoVariant === "teal" &&
                            "bg-teal-500/12 text-teal-400 border-teal-500/25",
                          exp.logoVariant === "coral" &&
                            "bg-orange-500/12 text-orange-400 border-orange-500/25",
                        )}
                      >
                        {exp.initials}
                      </div>
                      <div>
                        <h3 className="text-[15px] font-medium text-zinc-100">
                          {exp.company}
                        </h3>
                        <p className="text-[11px] text-zinc-600 font-medium tracking-tight mt-0.5">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={cn(
                          "px-2.5 py-1 rounded-full text-[10px] font-semibold border flex items-center gap-1.5 transition-colors duration-300",
                          exp.isCurrent
                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                            : "bg-white/5 text-zinc-500 border-white/5",
                        )}
                      >
                        {exp.isCurrent && (
                          <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                        )}
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
                      <li
                        key={idx}
                        className="flex gap-3 text-[13px] leading-relaxed text-zinc-500 group/item"
                      >
                        <Check
                          size={14}
                          className="mt-1 shrink-0 text-purple-500/50 group-hover/item:text-purple-500 transition-colors"
                        />
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
                              : "bg-white/[0.03] text-zinc-500 border-white/[0.06] hover:text-zinc-400 hover:border-white/10",
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
