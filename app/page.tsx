"use client";

import { motion } from "framer-motion";

export default function Home() {
  const boxes = [
    {
      title: "Red Willow Gun",
      description: "$2.40",
      image: "/red_willow_gun.png",
    },
    {
      title: "Blue Willow Gun",
      description: "$1.60",
      image: "/blue_willow_gun.png",
    },
    {
      title: "Green Willow Gun",
      description: "$1.20",
      image: "/green_willow_gun.png",
    },
    {
      title: "Purple Willow Gun",
      description: "$1.40",
      image: "/purple_willow_gun.png",
    },
  ];

  return (
    <div 
      className="text-white min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat bg-fixed bg-slate-900"
      style={{ backgroundImage: "url('/rgc.webp')" }}
    >
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

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Text Above Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-3">Latest MVSD Value Conversions</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
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
              className="bg-purple-950/70 backdrop-blur-md rounded-2xl border border-purple-800/60 overflow-hidden shadow-2xl flex flex-col p-4"
            >
              <div className="w-full h-32 flex items-center justify-center p-2">
                <img 
                  src={box.image} 
                  alt={box.title} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4 pt-2">
                <h3 className="text-2xl font-bold mb-1">{box.title}</h3>
                <p className="text-purple-200 text-xl font-semibold">{box.description}</p>
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
          <p className="text-slate-400">
            Join our Discord server today to open a ticket or ask any questions!
          </p>
        </motion.div>
      </section>
    </div>
  );
}