"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function ValuesPage() {
  const boxes = [
    {
      title: "Red Willow Gun",
      description: "Value: $2.40",
      image: "/red_willow_gun.png",
    },
    {
      title: "Blue Willow Gun",
      description: "Value: $1.60",
      image: "/blue_willow_gun.png",
    },
    {
      title: "Green Willow Gun",
      description: "Value: $1.20",
      image: "/green_willow_gun.png",
    },
    {
      title: "Purple Willow Gun",
      description: "Value: $1.40",
      image: "/purple_willow_gun.png",
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
    <div className="relative text-white min-h-screen overflow-x-hidden bg-black pt-28">
      {/* Background Radial Gradient */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_#000000_30%,_#1e0038_100%)]" />

      {/* Interactive Purple Glow Tracker */}
      <motion.div
        className="pointer-events-none fixed z-10 w-[500px] h-[500px] rounded-full bg-purple-600/25 blur-[120px]"
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
            className="px-5 py-2 text-sm font-bold tracking-wider text-purple-300 hover:text-white transition-all rounded-xl"
          >
            HOME
          </Link>
          <Link 
            href="/values" 
            className="px-5 py-2 text-sm font-bold tracking-wider text-white bg-purple-800/80 border border-purple-500/60 rounded-xl shadow-md"
          >
            VALUES
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <section className="relative z-20 max-w-6xl mx-auto px-6 py-12 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-3">Latest MVSD Value Conversions</h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Check out the most recent rates of your MVSD items.
          </p>
        </motion.div>

        {/* 4 Animated Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {boxes.map((box, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.3 }}
              className="bg-purple-950/40 backdrop-blur-md rounded-2xl border-2 border-purple-900/90 overflow-hidden shadow-[0_0_25px_rgba(40,0,70,0.8)] flex flex-col p-4"
            >
              <div className="w-full h-52 flex items-center justify-center p-4 bg-purple-950/60 rounded-xl mb-2 border border-purple-900/40">
                <img 
                  src={box.image} 
                  alt={box.title} 
                  className="w-full h-full object-contain scale-110 drop-shadow-lg"
                />
              </div>
              <div className="p-2">
                <h3 className="text-2xl font-bold mb-1 text-white">{box.title}</h3>
                <p className="text-purple-300 text-xl font-semibold">{box.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text Below Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="text-center pt-8"
        >
          <h3 className="text-2xl font-semibold mb-2">Ready to get started?</h3>
          <p className="text-slate-300">
            Join our Discord server today to open a ticket or ask any questions!
          </p>
        </motion.div>
      </section>
    </div>
  );
}