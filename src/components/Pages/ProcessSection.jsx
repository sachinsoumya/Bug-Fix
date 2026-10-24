import { Link } from "react-router-dom";

import { ArrowUpRight, Terminal } from "lucide-react";

import { processSteps } from "../../data/ProcessStep";
import ProcessStep from "./ProcessStep";

const ProcessSection = () => {
  return (
    <section className="overflow-hidden bg-slate-950 px-5 py-20 text-white sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: introduction */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-lime-300">
              <Terminal size={15} />
              Method behind the madness
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Our process.
              <br />
              <span className="text-lime-400">Minus the chaos.</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-400">
              Great software is not built by randomly changing code until the
              error disappears. We investigate, solve, test, and deliver with a
              clear process.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <p className="text-sm leading-7 text-slate-300">
                “It worked yesterday.”
              </p>

              <p className="mt-2 text-xl font-bold text-lime-400">
                Let's make it work today.
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-300"
            >
              Start a project
              <ArrowUpRight size={19} />
            </Link>
          </div>

          {/* Right: five process steps */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 sm:p-8">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
