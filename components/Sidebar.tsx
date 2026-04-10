"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  Code2, 
  Cpu, 
  Mail, 
} from "lucide-react";
import { cn } from "@/lib/utils";

// Custom Brand Icons as they are not available in current lucide-react version
const GithubIcon = ({ size = 20, className = "" }) => (
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

const LinkedinIcon = ({ size = 20, className = "" }) => (
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


const NAV_ITEMS = [
  { name: "Overview", icon: LayoutDashboard, href: "/" },
  { name: "About", icon: User, href: "/about" },
  { name: "Experience", icon: Briefcase, href: "/experience" },
  { name: "Projects", icon: Code2, href: "/projects" },
  { name: "Skills", icon: Cpu, href: "/about#skills" },
  { name: "Contact", icon: Mail, href: "/contact" },
];

const SOCIAL_LINKS = [
  { name: "GitHub", icon: GithubIcon, href: "https://github.com/ArRehman000" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/abdur-rehman-273b271bb/" },
  { name: "Email", icon: Mail, href: "mailto:ar.abdurrehman611@gmail.com" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 hidden h-full w-[260px] flex-col border-r border-white/5 bg-[#0f0f1a] md:flex">
      {/* Profile Section */}
      <div className="flex flex-col items-start p-8 pb-4">
        <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10 shadow-lg shadow-purple-600/10">
          <img 
            src="/profileImage.png" 
            alt="Abdur Rehman" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-medium text-zinc-100">Abdur Rehman</h2>
          <p className="text-xs uppercase tracking-wider text-zinc-500">Full Stack Developer</p>
        </div>
        
        {/* Availability Badge */}
        <div className="mt-4 flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span className="text-[10px] font-medium text-green-500/90 uppercase tracking-tight">Available for work</span>
        </div>
      </div>

      <div className="my-6 border-t border-white/5 px-8" />

      {/* Navigation */}
      <nav className="flex-1 space-y-1.5 px-4 pt-2">
        <p className="px-4 mb-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-600">Main</p>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-4 py-2.5 transition-all duration-200",
                isActive 
                  ? "bg-purple-500/10 border-l-2 border-purple-500 text-purple-400" 
                  : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300 border-l-2 border-transparent"
              )}
            >
              <item.icon size={18} className={cn(isActive ? "text-purple-400" : "text-zinc-500 group-hover:text-zinc-300")} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Socials */}
      <div className="p-8">
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              {...(link.name !== "Email" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-500 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
              title={link.name}
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
