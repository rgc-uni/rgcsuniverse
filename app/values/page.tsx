"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const middlemen = [
    {
      rank: "01",
      name: "Reapuh",
      handle: "Owner, Most Trusted Middleman",
      vouches: "2000+",
    },
    {
      rank: "02",
      name: "mira",
      handle: "Middleman",
      vouches: "400+",
    },
    {
      rank: "03",
      name: "97dw",
      handle: "Middleman",
      vouches: "300+",
    },
  ];

  // Mouse position tracking
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth springs for cursor glow animation
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      className="relative text-white min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat bg-fixed bg-slate-900 pb-64"
      style={{ backgroundImage: "url('/rgc.webp')" }}
    >
      {/* Smaller Interactive Purple Glow Tracker */}
      <motion.div
        className="pointer-events-none fixed z-10 w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-[90px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

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
      <section className="relative z-20 h-screen flex flex-col justify-end items-center text-center p-6 pb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold tracking-tight sm:text-8xl mb-2 text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.95)]"
        >
          RGC's Universe
        </motion.h1>

        {/* Animated Status Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-center gap-2.5 mb-4 text-xs sm:text-sm font-semibold tracking-[0.25em] text-purple-200/90 uppercase"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500 shadow-[0_0_10px_#a855f7]"></span>
          </span>
          MIDDLEMAN ONLINE 24/7
        </motion.div>
        
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

      {/* Middleman Section Below Hero */}
      <section className="relative z-20 max-w-4xl mx-auto px-6 pt-20 space-y-8">
        {/* Purple Diamond Divider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-[1px] w-28 sm:w-48 bg-gradient-to-r from-transparent via-purple-500 to-purple-400 shadow-[0_0_8px_#a855f7]" />
          <div className="w-3.5 h-3.5 rotate-45 bg-purple-400 border border-purple-200 shadow-[0_0_12px_#a855f7]" />
          <div className="h-[1px] w-28 sm:w-48 bg-gradient-to-l from-transparent via-purple-500 to-purple-400 shadow-[0_0_8px_#a855f7]" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-white uppercase drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            OUR TOP <span className="text-purple-400">MIDDLEMANS</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {middlemen.map((mm, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ amount: 0.3 }}
              className="bg-black/90 backdrop-blur-md rounded-xl border border-purple-900/60 p-4 sm:p-5 flex items-center justify-between shadow-[0_0_20px_rgba(40,0,70,0.6)] hover:border-purple-600 transition-all duration-300"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="border border-purple-800/80 bg-purple-950/30 text-purple-400 font-bold px-3 py-1.5 rounded-lg text-sm sm:text-base">
                  {mm.rank}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{mm.name}</h3>
                  <p className="text-xs sm:text-sm text-purple-300/80">{mm.handle}</p>
                </div>
              </div>

              <div className="text-right">
                <div className="text-lg sm:text-xl font-extrabold text-purple-400 tracking-wide">{mm.vouches}</div>
                <div className="text-[10px] sm:text-xs tracking-widest text-slate-400 uppercase">VOUCHES</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}