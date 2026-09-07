"use client";

import { motion } from "framer-motion";

export default function Home() {
  const boxes = [
    {
      title: "Box 1",
      description: "Description for box 1 goes here.",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "Box 2",
      description: "Description for box 2 goes here.",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "Box 3",
      description: "Description for box 3 goes here.",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "Box 4",
      description: "Description for box 4 goes here.",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-6">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold tracking-tight sm:text-8xl mb-6 bg-gradient-to-r from-purple-500 via-purple-900 to-black bg-clip-text text-transparent"
        >
          RGC's Universe
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-300 max-w-2xl font-medium"
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

        <div className="mt-12 animate-bounce text-slate-400">
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
          <h2 className="text-4xl font-bold mb-3">Our Features & Services</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Check out what we offer down below. Everything is safe, fast, and transparent.
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
              className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-xl flex flex-col"
            >
              <img 
                src={box.image} 
                alt={box.title} 
                className="w-full h-48 object-cover border-b border-slate-700"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{box.title}</h3>
                <p className="text-slate-300">{box.description}</p>
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