
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { services } from '../../data/ServiceData';


import ServiceCard from './ServiceCard';

export default function ServiceSection() {
  // Display four featured services on the Home page.
  const featuredServices = services.slice(0, 4);

  return (
    <section
      id="services"
      className="bg-[#F8F7F2] px-5 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-lime-700/20 bg-lime-100 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-lime-900">
              What we build & fix
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Your problems.
              <br />
              <span className="text-lime-700">
                Our next challenge.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              From fixing that one stubborn bug to building
              your next big idea, we turn technical headaches
              into working solutions.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex w-fit shrink-0 items-center gap-2 font-bold text-slate-950 transition hover:text-lime-700"
          >
            Explore all services
            <ArrowRight size={19} />
          </Link>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Brand personality */}
        <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-slate-950 px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm leading-6 text-slate-300 sm:text-base">
            It worked yesterday. Today is a different story.
          </p>

          <p className="font-semibold text-lime-400">
            Don't panic. Call BugFix.
          </p>
        </div>
      </div>
    </section>
  );
}
