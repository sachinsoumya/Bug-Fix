import { TypeAnimation } from "react-type-animation";

// import { Link } from "react-router-dom";
// import { ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import HeroSection from "./HeroSection";
import LeftSection from "./LeftSection";
import SuperPower from "./SuperPower";
import ServiceSection from "./ServiceSection";
// import Marquee from "react-fast-marquee";

// const technologies = ["React", "Redux", "Node.js", "Express", "MongoDB", "AWS"];

export const Home = () => {
  return (
    <div>
      <div className="overflow-hidden  from-bg-slate-950 bg-linear-to-bl text-white text-center">
        {/* Hero section */}

        <TypeAnimation
          sequence={["We Build", 1000, "We Debug", 1000, "We Deploy", 1000]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "5em",
            display: "inline-block",
            fontWeight: "bold",
          }}
          repeat={Infinity}
        />

        <section className="relative">
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-28">
            {/* Left: content */}
            <LeftSection />

            {/* Right: visual */}
            <HeroSection />
          </div>
        </section>

        {/* Technology strip */}
        <section className="border-t border-white/10 bg-slate-900/60">
          <div className="mx-auto  max-w-7xl  px-5 py-8 sm:px-8 text-center">
            <p className="text-2xl font-bold tracking-[0.2em] text-slate-400 py-7">
              OUR EVERYDAY SUPERPOWERS
            </p>

            <SuperPower />
          </div>
        </section>

        <section>
          <ServiceSection />
        </section>
      </div>
    </div>
  );
};
