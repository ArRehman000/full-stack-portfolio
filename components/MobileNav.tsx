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
  Mail 
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", icon: LayoutDashboard, href: "/" },
  { name: "Experience", icon: Briefcase, href: "/experience" },
  { name: "Projects", icon: Code2, href: "/projects" },
  { name: "Contact", icon: Mail, href: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around border-t border-white/5 bg-[#0f0f1a]/80 backdrop-blur-lg md:hidden">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 transition-all duration-200",
              isActive ? "text-purple-400" : "text-zinc-500"
            )}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-medium">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
