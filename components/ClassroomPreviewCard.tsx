"use client";

import { Sparkles } from "lucide-react";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ weight: "400", subsets: ["latin"] });

const avatars = [
  { initials: "AK", bg: "bg-[#5E8CFF]" },
  { initials: "SR", bg: "bg-pink-500" },
  { initials: "MV", bg: "bg-amber-500" },
  { initials: "+8", bg: "bg-emerald-500" },
];

export default function ClassroomPreviewCard() {
  return (
    <div className="relative w-full max-w-sm rounded-[2rem] border border-slate-200 bg-white/90 p-6 text-slate-900 shadow-2xl shadow-slate-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:text-[#F2F5FF]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-base font-semibold text-slate-900 dark:text-[#F2F5FF]">
          Physics-Wave Optics
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-700 dark:text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>

      {/* Avatars */}
      <div className="flex mb-5">
        {avatars.map((av, i) => (
          <div
            key={i}
            className={`${av.bg} w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-semibold shadow-sm dark:border-[#020617] ${i !== 0 ? "-ml-2" : ""}`}
          >
            {av.initials}
          </div>
        ))}
      </div>

      {/* Doubt bubble */}
      <div className="mb-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-[#5E8CFF]/25 dark:bg-[#5E8CFF]/10">
        <p className="mb-3 text-sm leading-relaxed text-slate-700 dark:text-[#F2F5FF]/80">
          Why does destructive interference produce dark fringes?
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">Arjun K.</span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700 dark:bg-[#5E8CFF]/15 dark:text-[#8BB8FF]">
            Answered
          </span>
        </div>
      </div>

      {/* AI answer bubble */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-400/20 dark:bg-emerald-400/[0.07]">
        <div className="mb-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
          <Sparkles className="w-3 h-3" />
          <span className={`${staatliches.className} tracking-[0.1em] uppercase`}>
            AI answer
          </span>
        </div>
        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300/75">
          When two waves meet with a phase difference of π, their amplitudes
          cancel resulting in zero intensity at that point.
        </p>
      </div>
    </div>
  );
}