"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98] as any,
    },
  }),
};

const STATS = [
  { value: "2+", label: "Years experience" },
  { value: "8+", label: "Projects shipped" },
  { value: "3", label: "Companies" },
];

const TECH_STACK = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "Web3",
  "LangChain",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center px-6 md:px-14 py-20 overflow-hidden bg-[#0a0a0f]">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.05),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
        <div>
          {/* Eyebrow */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-purple-500" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-purple-400">
              Portfolio 2025
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-8 text-5xl md:text-7xl font-medium tracking-tight text-[#f0eeff] leading-[1.1]"
          >
            Building <span className="text-purple-400">digital</span> <br />
            experiences.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-6 text-xs uppercase tracking-[0.2em] font-medium text-zinc-500"
          >
            Full Stack Developer &bull; 2 Years
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-6 max-w-md text-sm leading-relaxed text-zinc-500/90"
          >
            Crafting scalable web applications from pixel-perfect UIs to robust
            backend systems. Specializing in React, Next.js, Node.js and modern
            cloud infrastructure.
          </motion.p>

          {/* Stats */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-12 flex flex-wrap gap-x-12 gap-y-6"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-medium text-zinc-100">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-12 flex flex-wrap gap-2"
          >
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-medium text-zinc-400 transition-colors hover:border-purple-500/20 hover:text-purple-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="group flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/20"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="/Abdur-FullStack-Resume.pdf"
              download="Abdur-FullStack-Resume.pdf"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-6 py-3.5 text-sm font-semibold text-zinc-400 transition-all hover:border-white/20 hover:text-white hover:bg-white/5"
            >
              Download CV
              <Download size={18} />
            </a>
          </motion.div>
        </div>

        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Decorative Circles */}
          <div className="absolute h-[420px] w-[420px] rounded-full border border-purple-500/10 animate-spin-slow" />
          <div className="absolute h-[340px] w-[340px] rounded-full border border-purple-500/20" />

          {/* Ambient Glow */}
          <div className="absolute -inset-4 bg-purple-500/20 blur-[80px] rounded-full animate-pulse" />

          {/* Main Image Container */}
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-white/10 p-2 bg-[#0a0a0f] shadow-2xl shadow-purple-500/20 group">
            <div className="h-full w-full overflow-hidden rounded-full relative">
              <img
                src="/profileImage.png"
                alt="Abdur Rehman"
                className="h-full w-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-60 mix-blend-overlay" />
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 right-12 rounded-2xl border border-white/10 bg-[#16161d]/80 backdrop-blur-md p-4 flex items-center gap-3 shadow-xl"
          >
            <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
              <span className="text-xs font-bold">AR</span>
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                Experience
              </p>
              <p className="text-xs font-semibold text-white">2+ Years</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
