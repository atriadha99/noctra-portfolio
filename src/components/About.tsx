'use client';

import { motion } from 'framer-motion';
import { Layers, Smartphone, Layout, Lightbulb, Database, Cloud } from 'lucide-react';

const capabilitiesList = [
  { icon: Layers, title: 'Web Development', desc: 'React, Next.js, and TypeScript architectures tuned for responsiveness and speed.' },
  { icon: Smartphone, title: 'Mobile Development', desc: 'Native Android Studio and Java implementations with Firebase synchronization.' },
  { icon: Layout, title: 'UI Implementation', desc: 'Transforming complex design system tokens into pixel-perfect, accessible code.' },
  { icon: Lightbulb, title: 'Product Thinking', desc: 'Evaluating user friction, product viability, and meaningful utility before writing a line of code.' },
  { icon: Database, title: 'Backend Integration', desc: 'Supabase PostgreSQL, Neon serverless databases, RESTful endpoints, and schema design.' },
  { icon: Cloud, title: 'Deployment & CI', desc: 'Vercel, Git workflows, performance budgeting, and continuous delivery.' },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex items-center gap-4 text-xs font-mono tracking-[0.25em] text-blue-400 mb-8 uppercase">
        <span>01 // PERSPECTIVE &amp; APPROACH</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Editorial Heading Column */}
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            BUILDING WITH
            <br />
            <span className="text-zinc-500">PURPOSE.</span>
          </h2>

          <div className="mt-8 space-y-4 text-xs font-mono text-zinc-400 border-l border-white/[0.08] pl-6">
            <p>
              <span className="text-white">STUDENT //</span> Informatics Engineering at Universitas Pamulang (GPA 3.20)
            </p>
            <p>
              <span className="text-white">DISCIPLINE //</span> 6+ Years Specialty F&amp;B Operations
            </p>
            <p>
              <span className="text-white">ETHOS //</span> Real-world durability over fleeting trends
            </p>
          </div>
        </div>

        {/* Narrative & Manifesto Column */}
        <div className="lg:col-span-7 space-y-8">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-200">
            I am a Front-End Developer and Informatics Engineering student who approaches software with the mindset of a digital craftsman.
          </p>

          <div className="space-y-6 text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
            <p>
              My journey combines academic computer science with over six years on the front lines of high-volume specialty coffee operations (Riels Coffee, Ayya, Djaman, and Ideologi Kopi). Working in fast-paced F&amp;B instilled an uncompromising standard: how to handle customer psychology under pressure, maintain strict workflow discipline, optimize cost structures (HPP), and solve real-world problems on the fly.
            </p>
            <p>
              In digital products, I translate that same operational rigor into software engineering. Whether engineering an industrial monitoring dashboard for PT ABB or designing the multi-platform finance ecosystem of TemuCashflow, I focus on building interfaces that are immediately clear, technically resilient, and genuinely useful.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="pt-8 border-t border-white/[0.08]">
            <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-6">
              DOMAINS OF PRACTICE
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {capabilitiesList.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group"
                >
                  <item.icon className="w-5 h-5 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-sm font-semibold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
