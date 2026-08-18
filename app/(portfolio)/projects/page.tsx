"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "AI/LLM", "Web3", "SaaS", "Backend", "Automation", "Chrome Ext."];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return PROJECTS;
    if (activeTab === "Backend") return PROJECTS.filter(p => p.category === "API");
    return PROJECTS.filter(p => p.category === activeTab);
  }, [activeTab]);

  return (
    <main className="min-h-screen bg-[#0a0a0f] px-6 py-16 md:px-14 selection:bg-purple-500/30">
      <div className="max-w-6xl">
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-7 bg-purple-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">Work</span>
          </div>
          <h2 className="mt-4 text-[34px] font-medium leading-tight text-[#f0eeff]">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-700">10 projects shipped across AI, Web3, SaaS and automation</p>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-1.5 rounded-full text-[11px] font-medium border transition-all duration-200",
                activeTab === tab
                  ? "bg-purple-500/12 border-purple-500/30 text-purple-300"
                  : "bg-white/[0.03] border-white/[0.07] text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.05]"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={cn(
                    "group block rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1",
                    project.featured 
                      ? "border-purple-500/22 shadow-sm shadow-purple-500/5 bg-purple-500/[0.02]" 
                      : "border-white/[0.07] bg-white/[0.02] hover:border-purple-500/25"
                  )}
                >
                  {/* Card Cover */}
                  <div 
                    className={cn(
                      "h-28 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02] bg-gradient-to-br",
                      project.coverGradient
                    )}
                  >
                    {/* Grid Overlay */}
                    <div 
                      className="absolute inset-0 opacity-20 pointer-events-none" 
                      style={{ 
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                        backgroundSize: '28px 28px'
                      }} 
                    />
                    
                    {/* Cover Label */}
                    <span className="text-[22px] font-bold tracking-tighter text-white/10 uppercase select-none transition-all duration-500 group-hover:scale-110 group-hover:text-white/15">
                      {project.coverLabel}
                    </span>

                    {/* Badge */}
                    <div className={cn(
                      "absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border",
                      project.badgeVariant === "ai" && "bg-purple-500/20 border-purple-500/35 text-purple-300",
                      project.badgeVariant === "web3" && "bg-blue-500/15 border-blue-500/30 text-blue-300",
                      project.badgeVariant === "saas" && "bg-teal-500/12 border-teal-500/30 text-teal-400",
                      project.badgeVariant === "tool" && "bg-amber-500/12 border-amber-500/30 text-amber-400",
                      project.badgeVariant === "api" && "bg-orange-500/12 border-orange-500/30 text-orange-400",
                      project.badgeVariant === "automation" && "bg-green-500/10 border-green-500/25 text-green-400",
                    )}>
                      {project.badgeLabel}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className="text-[13px] font-semibold text-zinc-100 mb-1.5 transition-colors group-hover:text-purple-400">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[10px] text-zinc-600 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] transition-colors group-hover:border-white/10 group-hover:text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Card Footer */}
                    <div className="flex justify-between items-center pt-3 border-t border-white/5">
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium text-purple-300 bg-purple-500/10 border border-purple-500/25 transition-all hover:bg-purple-500/20">
                            <ExternalLink size={12} />
                            {project.badgeVariant === "tool" ? "Store" : project.badgeVariant === "automation" ? "Demo" : "Live"}
                          </div>
                        )}
                      </div>
                      <span className="text-[11px] font-bold text-zinc-800 tabular-nums">
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
