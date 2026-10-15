import React from "react";
import { ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const LeftSection = () => {
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
        <span className="text-xs font-semibold tracking-wide text-lime-300 sm:text-sm">
          YOUR FRIENDLY DEV TEAM
        </span>
      </div>

      <h1 className="mt-7 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
        Things break.
        <br />
        <span className="text-lime-400">We fix them.</span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
        From stubborn bugs to full-stack applications, we build reliable web
        experiences without the unnecessary drama.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-300"
        >
          Let's fix it
          <ArrowUpRight size={19} />
        </Link>

        <Link
          to="/projects"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-lime-400/50 hover:bg-white/5"
        >
          See our work
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="mt-10 flex items-center gap-3 text-sm text-slate-400">
        <Code2 size={20} className="text-lime-400" />
        <p>Less drama. Better code. Fewer bugs.</p>
      </div>
    </div>
  );
};

export default LeftSection;
