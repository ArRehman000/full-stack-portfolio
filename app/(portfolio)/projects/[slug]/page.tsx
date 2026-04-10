"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  ShieldCheck,
  Globe,
  Code2,
  Layers
} from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const router = useRouter();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0f] text-[#f0eeff]">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/projects" className="mt-4 text-purple-400 hover:underline">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] selection:bg-purple-500/30">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={cn(
          "absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.07]",
          "bg-gradient-to-br", project.coverGradient
        )} />
        <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:px-14 lg:py-20">
        {/* Navigation / Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10 flex items-center justify-between"
        >
          <button 
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-200"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] transition-colors group-hover:border-purple-500/30 group-hover:bg-purple-500/10 group-hover:text-purple-400">
              <ArrowLeft size={14} />
            </div>
            Back to Projects
          </button>

          <div className="hidden border-b border-white/5 pb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 sm:block">
            Project / {project.title}
          </div>
        </motion.div>

        {/* Hero Section */}
        <section className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 lg:grid-cols-[1fr_360px]"
          >
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-6 bg-purple-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-purple-400">{project.category}</span>
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#f0eeff] md:text-5xl lg:text-6xl">
                {project.title.split(' ')[0]} <span className="text-purple-400">{project.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400 max-w-2xl">
                {project.longDescription}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition-all hover:bg-purple-500 hover:-translate-y-0.5"
                  >
                    View Live Project
                    <ExternalLink size={16} />
                  </a>
                )}
                <div className="flex items-center gap-1.5 rounded-xl border border-white/5 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-zinc-300">
                  Role: {project.role.split('.')[0]}
                </div>
              </div>
            </div>

            {/* Visual Header / Mockup Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={cn(
                "relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 p-1 bg-gradient-to-br",
                project.coverGradient
              )}
            >
              {project.images && project.images.length > 0 ? (
                <div className="absolute inset-0">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="h-full w-full object-cover rounded-[22px] opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-black tracking-tighter text-white/40 uppercase select-none drop-shadow-2xl">
                      {project.coverLabel}
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-white/[0.02]" />
                  <div 
                    className="absolute inset-0 opacity-20" 
                    style={{ 
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                      backgroundSize: '40px 40px'
                    }} 
                  />
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-7xl font-black tracking-tighter text-white/10 uppercase select-none">
                      {project.coverLabel}
                    </span>
                  </div>
                </>
              )}
              
              {/* Floating Tech Badges */}
              <div className="absolute bottom-6 left-6 flex -space-x-3">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <div 
                    key={tag}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0f] text-[10px] font-bold text-zinc-300 shadow-xl"
                    style={{ zIndex: 3 - i }}
                  >
                    {tag.charAt(0)}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Content Grid */}
        <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
          {/* Main Content */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {/* Features */}
            <motion.div variants={fadeIn}>
              <h3 className="flex items-center gap-3 text-lg font-semibold text-zinc-100 mb-8">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck size={18} />
                </span>
                Core Features
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div 
                    key={feature} 
                    className="group flex gap-3 rounded-2xl border border-white/[0.05] bg-white/[0.01] p-5 transition-colors hover:border-emerald-500/20 hover:bg-emerald-500/[0.02]"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-500/60 group-hover:text-emerald-400 transition-colors" />
                    <p className="text-sm leading-relaxed text-zinc-400 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Showcase Image Area */}
            {project.images && project.images.length > 1 ? (
              <motion.div variants={fadeIn} className="space-y-4">
                {project.images.slice(1).map((img, idx) => (
                  <div key={idx} className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
                    <img 
                      src={img} 
                      alt={`${project.title} showcase ${idx + 1}`} 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
                  </div>
                ))}
              </motion.div>
            ) : project.images && project.images.length === 1 && project.images[0] ? (
               <motion.div variants={fadeIn} className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} showcase`} 
                    className="h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
               </motion.div>
            ) : (
              <motion.div variants={fadeIn} className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="absolute inset-0 flex items-center justify-center text-xs text-zinc-700 uppercase tracking-widest font-bold">
                  [ Project Interface Showcase Placeholder ]
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
              </motion.div>
            )}

            {/* Challenges */}
            <motion.div variants={fadeIn}>
              <h3 className="flex items-center gap-3 text-lg font-semibold text-zinc-100 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <Zap size={18} />
                </span>
                The Challenge
              </h3>
              <div className="relative rounded-2xl border border-white/[0.05] bg-white/[0.01] p-8">
                <p className="text-base leading-relaxed text-zinc-400 italic">
                  &quot;{project.challenges}&quot;
                </p>
                <div className="absolute -left-2 top-8 h-12 w-1 rounded-full bg-amber-500/40" />
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar / Sidebar Info */}
          <motion.aside 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-10"
          >
            {/* Tech Stack Card */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 lg:sticky lg:top-24">
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
                <Cpu size={14} className="text-purple-400" />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <div 
                    key={tech.name}
                    className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-purple-500/30 hover:bg-purple-500/5"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    {tech.name}
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-6 pt-10 border-t border-white/5">
                <div>
                  <h5 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
                    <Layers size={12} />
                    Category
                  </h5>
                  <p className="text-sm text-zinc-400">{project.category}</p>
                </div>
                <div>
                  <h5 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
                    <Globe size={12} />
                    Status
                  </h5>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-sm text-zinc-400">Completed / Live</p>
                  </div>
                </div>
                <div>
                   <h5 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-2">
                    <Code2 size={12} />
                    Source
                  </h5>
                  <p className="text-sm text-zinc-500 italic">Proprietary / NDA</p>
                </div>
              </div>

              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 py-3.5 text-xs font-bold uppercase tracking-widest text-purple-300 transition-all hover:bg-purple-500/20"
                >
                  Visit Project Site
                </a>
              )}
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="border-t border-white/5 bg-white/[0.01] py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-14 flex flex-col items-center">
          <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.3em] mb-4">Wanna see more?</p>
          <Link 
            href="/projects"
            className="text-2xl font-medium text-white hover:text-purple-400 transition-colors"
          >
            All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
