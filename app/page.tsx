"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-6xl font-extrabold tracking-tight sm:text-8xl mb-6">
          My Big Title
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl">
          This is the text right underneath the title. Scroll down to see the sections slide in!
        </p>
        <div className="mt-12 animate-bounce text-slate-400">
          ↓ Scroll Down
        </div>
      </section>

      {/* Content Sections */}
      <section className="min-h-screen max-w-4xl mx-auto px-6 py-20 space-y-24">
        {/* First Section - Slides in from left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          className="p-8 bg-slate-800 rounded-2xl border border-slate-700"
        >
          <h2 className="text-3xl font-bold mb-4">First Section</h2>
          <p className="text-slate-300 leading-relaxed">
            This card slides in smoothly from the left side of the screen as soon as you scroll into view.
          </p>
        </motion.div>

        {/* Second Section - Slides in from right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          className="p-8 bg-slate-800 rounded-2xl border border-slate-700"
        >
          <h2 className="text-3xl font-bold mb-4">Second Section</h2>
          <p className="text-slate-300 leading-relaxed">
            This card slides in from the right side as you continue scrolling down.
          </p>
        </motion.div>
      </section>
    </div>
  );
}