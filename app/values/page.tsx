"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ValuesPage() {
  const [sortOrder, setSortOrder] = useState<"featured" | "low-to-high" | "high-to-low">("featured");

  const boxes = [
    {
      title: "Red Willow Gun",
      price: 2.40,
      description: "Value: $2.40",
      image: "/red_willow_gun.png",
    },
    {
      title: "Blue Willow Gun",
      price: 1.60,
      description: "Value: $1.60",
      image: "/blue_willow_gun.png",
    },
    {
      title: "Green Willow Gun",
      price: 1.20,
      description: "Value: $1.20",
      image: "/green_willow_gun.png",
    },
    {
      title: "Purple Willow Gun",
      price: 1.40,
      description: "Value: $1.40",
      image: "/purple_willow_gun.png",
    },
  ];

  // Dynamic sorting based on dropdown selection
  const sortedBoxes = [...boxes].sort((a, b) => {
    if (sortOrder === "low-to-high") return a.price - b.price;
    if (sortOrder === "high-to-low") return b.price - a.price;
    return 0; // Default Featured order
  });

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
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_#000000_30%,_#1e0038_100%)]" />

      <motion.div
        className="pointer-events-none fixed z-10 w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-[90px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Top Navbar */}
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
          <Link 
            href="/news" 
            className="px-5 py-2 text-sm font-bold tracking-wider text-purple-300 hover:text-white transition-all rounded-xl"
          >
            NEWS
          </Link>
        </div>
      </nav>

      <section className="relative z-20 max-w-6xl mx-auto px-6 py-12 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-3">Latest MVSD Value Conversions</h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-6">
            Check out the most recent rates of your MVSD items.
          </p>

          {/* Sort Dropdown Menu */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="text-sm font-extrabold tracking-widest text-slate-300 uppercase">
              SORT:
            </span>
            <div className="relative inline-block">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "featured" | "low-to-high" | "high-to-low")}
                className="appearance-none bg-purple-950/60 text-white font-bold text-sm px-5 py-2.5 pr-10 rounded-xl border border-purple-500/60 focus:outline-none focus:border-purple-400 cursor-pointer shadow-md transition-all"
              >
                <option value="featured" className="bg-slate-900 text-white">
                  Featured
                </option>
                <option value="low-to-high" className="bg-slate-900 text-white">
                  Lowest to Highest Value
                </option>
                <option value="high-to-low" className="bg-slate-900 text-white">
                  Highest to Lowest Value
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-purple-400">
                ▼
              </div>
            </div>
          </div>
        </motion.div>

        {/* Display Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedBoxes.map((box, idx) => (
            <motion.div
              key={box.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
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