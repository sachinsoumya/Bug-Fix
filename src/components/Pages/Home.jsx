import { TypeAnimation } from "react-type-animation";

import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import HeroSection from "./HeroSection";

const technologies = ["React", "Redux", "Node.js", "Express", "MongoDB", "AWS"];

export const Home = () => {
  return (
    <div>
      <div className="overflow-hidden  from-bg-slate-950 bg-linear-to-bl text-white text-center">
        {/* Hero section */}

        <TypeAnimation
          sequence={["We Build", 1000, "We Debug", 1000, "We Deploy", 1000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "5em", display: "inline-block" , fontWeight:"bold" }}
          repeat={Infinity}
        />

        <section className="relative">
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-28">
            {/* Left: content */}
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
                From stubborn bugs to full-stack applications, we build reliable
                web experiences without the unnecessary drama.
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

            {/* Right: visual */}
            <HeroSection />
          </div>
        </section>

        {/* Technology strip */}
        <section className="border-t border-white/10 bg-slate-900/60">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs font-bold tracking-[0.2em] text-slate-400">
              OUR EVERYDAY SUPERPOWERS
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="text-sm font-semibold text-slate-200 transition hover:text-lime-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
