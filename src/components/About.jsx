import React from 'react';
import { 
  Sparkles, 
  Code2, 
  Heart, 
  Lightbulb, 
  Award, 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const coreValues = [
    {
      title: "Creativity & Aesthetics",
      desc: "Creating bold, memorable visual identities and fluid motion design that elevate your brand above the noise.",
      icon: Lightbulb,
      color: "purple"
    },
    {
      title: "Uncompromising Quality",
      desc: "Writing strictly-typed, scalable code that adheres to strict industry best practices, testing, and modern standards.",
      icon: ShieldCheck,
      color: "cyan"
    },
    {
      title: "Continuous Innovation",
      desc: "Leveraging the newest advancements in Next.js, Flutter, cloud infrastructure, and custom AI model fine-tuning.",
      icon: Cpu,
      color: "indigo"
    },
    {
      title: "Client-First Transparency",
      desc: "Direct communication, realistic timelines, honest technical consulting, and zero unnecessary agency markups.",
      icon: Heart,
      color: "emerald"
    }
  ];

  return (
    <section id="about" className="relative py-28 bg-[#030508] border-t border-slate-900/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Developer Profile</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 font-display">
            Meet <span className="text-gradient">Arun Goswami</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Passionate software engineer, web architect, and AI solutions builder committed to turning ambitious concepts into polished digital reality.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Portrait & Quick Stats */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            <div className="relative w-full max-w-sm aspect-square rounded-3xl p-1 bg-gradient-to-br from-purple-500/40 via-indigo-500/20 to-cyan-500/40 shadow-[0_0_40px_rgba(168,85,247,0.25)]">
              <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-slate-950">
                <img
                  src="/assets/arun-goswami.jpg"
                  alt="Arun Goswami - Web Development, Software & AI Engineer"
                  className="w-full h-full object-cover object-top filter contrast-105"
                />

                {/* Cyber gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-transparent to-transparent opacity-70" />

                {/* Overlaid Status Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white font-mono">Arun Goswami</span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/30">
                    Lead Engineer
                  </span>
                </div>
              </div>

              {/* Floating mini badge: Direct Contact */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 p-3 rounded-2xl glass-panel border border-cyan-500/40 shadow-xl">
                <div className="text-[10px] font-mono text-slate-400">Direct Contact</div>
                <div className="text-xs font-bold text-cyan-300 font-mono">7011880423</div>
              </div>
            </div>

            {/* Quick Contact Chips below avatar */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 w-full max-w-sm">
              <a
                href={PERSONAL_INFO.phoneTel}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-purple-500/50 text-xs text-slate-200 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>Call: 7011880423</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 hover:bg-emerald-950/60 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Compelling Story & Core Values */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Building Scalable Digital Products with <span className="text-gradient">Passion & Precision</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Hello, I'm <strong className="text-white">Arun Goswami</strong>. Over the years, I have specialized in building robust 
                web applications, custom software platforms, fluid mobile apps, and custom AI solutions that empower businesses to scale.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you are a startup needing a high-converting MVP, an established business looking to modernize an outdated legacy website, or an enterprise seeking to train and deploy private AI models with zero data leakage, I bring hands-on architectural expertise to every phase of the project.
              </p>
            </div>

            {/* Core Values Grid: Creativity, Quality, Innovation, Client Satisfaction */}
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
                      <h4 className="text-sm font-bold text-white">{val.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Summary bullet tags */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <CheckCircle2 className="w-4 h-4" /> Web Development
              </span>
              <span className="flex items-center gap-1.5 text-purple-300">
                <CheckCircle2 className="w-4 h-4" /> Custom Software
              </span>
              <span className="flex items-center gap-1.5 text-indigo-300">
                <CheckCircle2 className="w-4 h-4" /> Mobile Applications
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4" /> AI Model Training & Support
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
