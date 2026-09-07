/* STREAMING_CHUNK:Configuring client directives and Framer Motion imports... */
"use client";

import { motion } from "framer-motion";

/* STREAMING_CHUNK:Defining the main home page component... /
export default function Home() {
return (

{/ Hero Section /}
/ STREAMING_CHUNK:Rendering Hero Section with title and subtitle... */

<motion.h1
initial={{ opacity: 0, y: -30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-6xl font-extrabold tracking-tight sm:text-8xl mb-6 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent"
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
        className="text-cyan-400 underline hover:text-cyan-300 transition-colors"
      >
        discord.gg/rgcs
      </a>
    </motion.p>

    <div className="mt-16 animate-bounce text-slate-400 flex flex-col items-center gap-2">
      <span className="text-sm tracking-wider uppercase">Scroll Down</span>
      <span className="text-2xl">↓</span>
    </div>
  </section>

  {/* Main Content Area */}
  /* STREAMING_CHUNK:Rendering main section with grid intro text... */
  <section className="max-w-6xl mx-auto px-6 py-16 space-y-20">
    
    {/* Intro Text Above the 4 Boxes */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ amount: 0.3 }}
      className="text-center space-y-4 max-w-3xl mx-auto"
    >
      <h2 className="text-4xl font-extrabold text-cyan-400">
        Why Choose RGC's Universe?
      </h2>
      <p className="text-slate-300 text-lg leading-relaxed">
        We provide fast, secure, and fully verified Roblox middleman services for high-value trades, collectibles, and accounts. Below is what sets our community apart.
      </p>
    </motion.div>

    {/* 4 Box Grid Section */}
    /* STREAMING_CHUNK:Rendering the 4 card grid with images and animations... */
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Box 1 - Slides in from Left */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="bg-slate-800 rounded-2xl border border-slate-700 p-6 flex flex-col hover:border-cyan-500/50 transition-colors shadow-lg"
      >
        <div className="w-full h-48 bg-slate-900 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-slate-700/60 relative">
          <img
            src="https://placehold.co/600x400/1e293b/38bdf8?text=Fast+%26+Secure"
            alt="Fast Trades"
            className="w-full h-full object-cover"
            onerror="this.style.display='none'"
          />
          <span className="text-cyan-400 font-semibold text-lg absolute">⚡ Instant Middleman</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Fast Trades</h3>
        <p className="text-slate-300 leading-relaxed">
          No long waiting times. Our trusted middlemen are ready around the clock to secure your trades swiftly and seamlessly.
        </p>
      </motion.div>

      {/* Box 2 - Slides in from Right */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="bg-slate-800 rounded-2xl border border-slate-700 p-6 flex flex-col hover:border-cyan-500/50 transition-colors shadow-lg"
      >
        <div className="w-full h-48 bg-slate-900 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-slate-700/60 relative">
          <img
            src="https://placehold.co/600x400/1e293b/818cf8?text=100%25+Safe"
            alt="Safe Middleman"
            className="w-full h-full object-cover"
            onerror="this.style.display='none'"
          />
          <span className="text-indigo-400 font-semibold text-lg absolute">🛡️ 100% Protection</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">100% Safe & Anti-Scam</h3>
        <p className="text-slate-300 leading-relaxed">
          Every step is recorded and monitored. We ensure both parties get exactly what was agreed upon without risk.
        </p>
      </motion.div>

      {/* Box 3 - Slides in from Left */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="bg-slate-800 rounded-2xl border border-slate-700 p-6 flex flex-col hover:border-cyan-500/50 transition-colors shadow-lg"
      >
        <div className="w-full h-48 bg-slate-900 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-slate-700/60 relative">
          <img
            src="https://placehold.co/600x400/1e293b/a855f7?text=Verified+Vouches"
            alt="Vouches"
            className="w-full h-full object-cover"
            onerror="this.style.display='none'"
          />
          <span className="text-purple-400 font-semibold text-lg absolute">⭐ 1000+ Vouches</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Verified Vouches</h3>
        <p className="text-slate-300 leading-relaxed">
          Check out hundreds of positive reviews from active Roblox traders on our main Discord channel before trading.
        </p>
      </motion.div>

      {/* Box 4 - Slides in from Right */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="bg-slate-800 rounded-2xl border border-slate-700 p-6 flex flex-col hover:border-cyan-500/50 transition-colors shadow-lg"
      >
        <div className="w-full h-48 bg-slate-900 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-slate-700/60 relative">
          <img
            src="https://placehold.co/600x400/1e293b/ec4899?text=Active+Support"
            alt="Support"
            className="w-full h-full object-cover"
            onerror="this.style.display='none'"
          />
          <span className="text-pink-400 font-semibold text-lg absolute">💬 Active Support</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">24/7 Ticket System</h3>
        <p className="text-slate-300 leading-relaxed">
          Have questions or need assistance? Open a ticket in our server anytime to get help from our experienced staff.
        </p>
      </motion.div>

    </div>

    {/* Text Below the 4 Boxes */}
    /* STREAMING_CHUNK:Rendering Call to Action footer section... */
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
      className="bg-slate-800/80 rounded-2xl border border-slate-700 p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-2xl"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
        Ready to start trading safely?
      </h2>
      <p className="text-slate-300 text-lg max-w-2xl mx-auto">
        Join thousands of traders in our community today. Create a ticket in seconds and let us handle the rest.
      </p>
      <div>
        <a
          href="https://discord.gg/rgcs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-lg rounded-xl shadow-lg transition-all hover:scale-105"
        >
          Join discord.gg/rgcs
        </a>
      </div>
    </motion.div>

  </section>
</div>


);
}