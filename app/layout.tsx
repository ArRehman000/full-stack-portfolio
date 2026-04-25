import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdur Rehman | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, Node.js, and AI integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="flex min-h-screen bg-[#0a0a0f] text-white selection:bg-purple-500/30">
        <Sidebar />
        <main className="flex-1 md:ml-[260px] pb-16 md:pb-0 overflow-y-auto w-full">
          {children}
        </main>
        <MobileNav />
      </body>
    </html>
  );
}
