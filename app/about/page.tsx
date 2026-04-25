"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  Mail,
  GraduationCap,
  Terminal,
  Server,
  Database,
  Globe,
  Cpu,
  Cloud,
  Zap,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ChromeIcon = ({ size = 20, className = "" }) => (
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
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" x2="12" y1="8" y2="8" />
    <line x1="3.95" x2="8.54" y1="6.06" y2="14.03" />
    <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
  </svg>
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const INFO_GRID = [
  { label: "Location", value: "Islamabad, PK", icon: MapPin },
  { label: "Experience", value: "2+ Years", icon: Calendar },
  {
    label: "Availability",
    value: "Open to work",
    icon: Clock,
    valueClassName: "text-green-500",
  },
  { label: "Email", value: "ar.abdurrehman611@gmail.com", icon: Mail },
];

const SKILL_CARDS = [
  {
    category: "Frontend",
    tags: ["React", "Next.js", "Tailwind"],
    icon: Terminal,
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
  },
  {
    category: "Backend",
    tags: ["Node.js", "Express", "NestJS"],
    icon: Server,
    iconBg: "bg-teal-500/15",
    iconColor: "text-teal-400",
  },
  {
    category: "Databases",
    tags: ["MongoDB", "SQL", "Firebase"],
    icon: Database,
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
  },
  {
    category: "Web3",
    tags: ["Ethereum", "Web3.js", "NFT"],
    icon: Globe,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
  },
  {
    category: "AI / LLM",
    tags: ["LangChain", "OpenAI", "RAG"],
    icon: Cpu,
    iconBg: "bg-coral-500/15",
    iconColor: "text-coral-400",
  },
  {
    category: "Cloud",
    tags: ["AWS", "Azure"],
    icon: Cloud,
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-400",
  },
  {
    category: "Automation",
    tags: ["n8n", "AI Chatbot"],
    icon: Zap,
    iconBg: "bg-green-500/15",
    iconColor: "text-green-400",
  },
  {
    category: "Chrome Ext.",
    tags: ["Extensions", "JS"],
    icon: ChromeIcon,
    iconBg: "bg-zinc-500/15",
    iconColor: "text-zinc-400",
  },
];

const TOOLS = [
  { name: "Git", color: "bg-red-500" },
  { name: "VS Code", color: "bg-blue-500" },
  { name: "Postman", color: "bg-orange-500" },
  { name: "Insomnia", color: "bg-purple-500" },
  { name: "GitHub", color: "bg-zinc-100" },
  { name: "TypeScript", color: "bg-amber-500" },
];

export default function AboutPage() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-[#0a0a0f] px-6 py-16 md:px-14">
      <div className="max-w-5xl">
        {/* About Section */}
        <motion.section
          ref={aboutRef}
          initial="initial"
          animate={isAboutInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid gap-12 md:grid-cols-2"
        >
          {/* Left Column */}
          <motion.div variants={fadeIn} className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-purple-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">
                  About me
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-medium leading-tight text-[#f0eeff]">
                Passionate about building{" "}
                <span className="text-purple-400">great products</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-zinc-500">
              <p>
                I'm a Full Stack Developer with 3 years of professional
                experience turning ideas into production-ready web applications.
                I've worked across startups and agencies, contributing to
                everything from AI-powered platforms to Web3 dApps.
              </p>
              <p>
                My strength lies in owning features end-to-end — architecting
                the backend, designing the database schema, and building the
                frontend interface, all with a focus on performance and clean
                code.
              </p>
            </div>

            <div className="mt-4 flex gap-4 rounded-xl border border-purple-500/20 bg-purple-950/20 p-5 group">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-purple-400/20 shadow-lg shadow-purple-500/10">
                <img
                  src="/profileImage.png"
                  alt="Abdur Rehman"
                  className="h-full w-full object-cover grayscale-[0.2] transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0a0a0f] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-purple-300">
                  Currently at Petalnex
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  Building a full HRMS system with MERN stack — modules for
                  attendance, leaves, tasks, meetings and notifications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={fadeIn} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {INFO_GRID.map((item) => {
                const isEmail = item.label === "Email";

                const Card = (
                  <div
                    className={cn(
                      "rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]",
                      isEmail && "hover:border-purple-500/30",
                    )}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 font-mono">
                      {item.label}
                    </p>
                    <p
                      className={cn(
                        "mt-1.5 text-sm font-medium text-zinc-300",
                        item.valueClassName,
                      )}
                    >
                      {item.value}
                    </p>
                  </div>
                );

                if (isEmail) {
                  return (
                    <a key={item.label} href={`mailto:${item.value}`}>
                      {Card}
                    </a>
                  );
                }

                return <div key={item.label}>{Card}</div>;
              })}
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10">
                <GraduationCap size={20} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-300">
                  BSc Software Engineering
                </h3>
                <p className="text-xs text-zinc-500">
                  COMSATS University Islamabad, Abbottabad
                </p>
                <p className="mt-1 text-[11px] text-zinc-600">
                  Graduated July 2023
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Divider */}
        <div className="my-16 h-[1px] w-full bg-white/5" />

        {/* Skills Section */}
        <motion.section
          id="skills"
          ref={skillsRef}
          initial="initial"
          animate={isSkillsInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="space-y-12"
        >
          <div>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-purple-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">
                Skills & Tech Stack
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_CARDS.map((skill) => (
              <motion.div
                key={skill.category}
                variants={fadeIn}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/[0.04]"
              >
                <div
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-[9px] mb-4 transition-transform group-hover:scale-110",
                    skill.iconBg,
                  )}
                >
                  <skill.icon size={18} className={skill.iconColor} />
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium border border-white/5 bg-white/5 text-zinc-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Row */}
          <div className="flex flex-wrap gap-2 pt-4">
            {TOOLS.map((tool) => (
              <motion.div
                key={tool.name}
                variants={fadeIn}
                className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 transition-colors hover:border-white/20"
              >
                <div className={cn("h-1.5 w-1.5 rounded-full", tool.color)} />
                <span className="text-xs text-zinc-500">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
