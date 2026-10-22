import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Code2, 
  Heart, 
  Lightbulb, 
  ShieldCheck, 
  Cpu, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Compass, 
  Palette, 
  Rocket, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, TECH_STACK, PROCESS_STEPS } from '../data/portfolioData';
import { soundFx } from '../utils/audioEffects';

export default function AboutPage() {
  const [activeTechCat, setActiveTechCat] = useState(0);

  const coreValues = [
    {
      title: "Creativity & Aesthetics",
      desc: "Creating bold, memorable visual identities, dark luxury aesthetics, and fluid micro-interactions that elevate your product above generic templates.",
      icon: Lightbulb,
    },
    {
      title: "Uncompromising Quality",
      desc: "Writing strictly-typed, scalable code adhering to modern clean architecture, automated linting, test-driven logic, and 95+ Lighthouse scores.",
      icon: ShieldCheck,
    },
    {
      title: "Continuous Innovation",
      desc: "Leveraging the newest advancements in Next.js 14, React 19, cross-platform Flutter, and custom open-source AI model fine-tuning.",
      icon: Cpu,
    },
    {
      title: "Client-First Transparency",
      desc: "Direct communication with Arun Goswami on WhatsApp and Phone. Honest timelines, weekly staging demos, and zero unnecessary agency markups.",
      icon: Heart,
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#030508] min-h-screen text-slate-100">
      
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/4 w-[600px] h-[350px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[400px] bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Company Profile</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-5 font-display">
            About <span className="text-gradient">AG TechLabs</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Founded by software architect <strong className="text-white">Arun Goswami</strong>, AG TechLabs is a high-end web, software, mobile, and AI engineering lab built for startups and enterprises seeking exceptional digital craft.
          </p>
        </div>

        {/* Founder Bio Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-24">
          
          {/* Left Column: Portrait & Direct Contact */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl p-1 bg-gradient-to-br from-purple-500/40 via-indigo-500/20 to-cyan-500/40 shadow-[0_0_40px_rgba(168,85,247,0.25)]">
              <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-slate-950">
                <img
                  src="/assets/arun-goswami.jpg"
                  alt="Arun Goswami - Founder & Lead Engineer at AG TechLabs"
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white font-mono">Arun Goswami</span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/30">
                    Founder & Lead Architect
                  </span>
                </div>
              </div>

              {/* Floating mini badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 p-3 rounded-2xl glass-panel border border-cyan-500/40 shadow-xl">
                <div className="text-[10px] font-mono text-slate-400">Direct Phone</div>
                <div className="text-xs font-bold text-cyan-300 font-mono">7011880423</div>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full max-w-sm">
              <a
                href={COMPANY_INFO.phoneTel}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-purple-500 text-xs text-slate-200 transition-all font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>Call: 7011880423</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 hover:bg-emerald-950/60 transition-all font-mono"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              The AG TechLabs Philosophy: <span className="text-gradient">Pure Craft, Zero Bloat</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At <strong className="text-white">AG TechLabs</strong>, we believe modern software should be beautiful, lightning-fast, and built to scale effortlessly. We reject the bloated agency model where clients get billed for endless meetings with middle managers while work is delegated to junior interns.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              When you partner with AG TechLabs, you work directly with <strong className="text-white">Arun Goswami</strong>. We architect the database, design the responsive interface, write strictly-typed frontend logic, and fine-tune your custom AI models. This results in faster delivery, zero miscommunication, and software that drives tangible revenue.
            </p>

            {/* Core Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-purple-500/30 transition-all"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 rounded-lg bg-slate-800 text-purple-400 border border-white/10">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white">{val.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* 4-STEP PROCESS SECTION */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-purple-400 font-semibold tracking-wider">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-display">
              Our 4-Step <span className="text-gradient">Execution Process</span>
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              From strategic discovery to production launch and warranty support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded bg-slate-800 text-cyan-300 border border-cyan-500/20 font-bold">
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{step.summary}</p>

                  <div className="border-t border-slate-800/80 pt-3">
                    <div className="text-[10px] font-mono uppercase text-slate-500 mb-1.5">Deliverables:</div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {step.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FULL TECH RADAR EXPLORER */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-slate-800/80 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
              Battle-Tested Technologies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-display">
              AG TechLabs <span className="text-gradient">Technology Radar</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Browse the production frameworks, cloud databases, and AI tooling we utilize.
            </p>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
            {TECH_STACK.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTechCat(idx);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTechCat === idx
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_STACK[activeTechCat].items.map((tech, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-950/60 text-purple-400 border border-purple-500/20 shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">{tech.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-purple-300">
                      {tech.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
