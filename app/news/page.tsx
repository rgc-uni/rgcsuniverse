"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function NewsPage() {
  const newsItems = [
    {
      date: "FEB 20, 2026",
      title: "New Season 1 Economy Prizes!",
      description: "We now have even MORE prizes to claim with coins, go check it out in the sub-announcements channel!",
    },
    {
      date: "FEB 15, 2026",
      title: "Season 1 Economy Has Begun!",
      description: "Earn Coins in the rgc-economy tab and save up to earn Roblox Prizes!",
    },
  ];

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

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
    <div className="relative text-white min-h-screen overflow-x-hidden bg-black pt-28 pb-48">
      {/* Background Radial Gradient */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_#000000_30%,_#1e0038_100%)]" />

      {/* Interactive Purple Glow Tracker */}
      <motion.div
        className="pointer-events-none fixed z-10 w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-[90px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Navigation Bar */}
      <nav className="fixed top-6 right-6 z-50">
        <div className="flex items-center gap-2 bg-purple-950/80 backdrop-blur-md border border-purple-700/60 p-1.5 rounded-2xl shadow-xl">
          <Link 
            href="/" 
            className="px-5 py-2 text-sm font-bold tracking-wider text-purple-300 hover:text-white transition-all rounded-xl"
          >
            HOME
          </Link>
          <Link 
            href="/values" 
            className="px-5 py-2 text-sm font-bold tracking-wider text-purple-300 hover:text-white transition-all rounded-xl"
          >
            VALUES
          </Link>
          <Link 
            href="/news" 
            className="px-5 py-2 text-sm font-bold tracking-wider text-white bg-purple-800/80 border border-purple-500/60 rounded-xl shadow-md"
          >
            NEWS
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <section className="relative z-20 max-w-4xl mx-auto px-6 py-12 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-widest text-white uppercase drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            LATEST <span className="text-purple-400">NEWS</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mt-2">
            Stay updated with the latest announcements and changes.
          </p>
        </motion.div>

        <div className="space-y-4">
          {newsItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ amount: 0.3 }}
              className="bg-purple-950/40 backdrop-blur-md rounded-2xl border-2 border-purple-900/90 p-6 shadow-[0_0_25px_rgba(40,0,70,0.8)] hover:border-purple-600 transition-all duration-300 space-y-2"
            >
              <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">
                {item.date}
              </span>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}