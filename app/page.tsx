"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div 
      className="text-white min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat bg-fixed bg-slate-900"
      style={{ backgroundImage: "url('/rgc.webp')" }}
    >
      {/* Top Navbar Positioned Right */}
      <nav className="fixed top-6 right-6 z-50">
        <div className="flex items-center gap-2 bg-purple-950/80 backdrop-blur-md border border-purple-700/60 p-1.5 rounded-2xl shadow-xl">
          <Link 
            href="/" 
            className="px-5 py-2 text-sm font-bold tracking-wider text-white bg-purple-800/80 border border-purple-500/60 rounded-xl shadow-md"
          >
            HOME
          </Link>
          <Link 
            href="/values" 
            className="px-5 py-2 text-sm font-bold tracking-wider text-purple-300 hover:text-white transition-all rounded-xl"
          >
            VALUES
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-end items-center text-center p-6 pb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold tracking-tight sm:text-8xl mb-4 text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.95)]"
        >
          RGC's Universe
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-200 max-w-2xl font-medium mb-6"
        >
          Reliable Roblox middleman at{" "}
          <a 
            href="https://discord.gg/rgcs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            discord.gg/rgcs
          </a>
        </motion.p>

        <div className="animate-bounce text-white font-medium">
          ↓ Scroll Down
        </div>
      </section>
    </div>
  );
}