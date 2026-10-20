
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7">
      {/* Card number */}
      <span className="absolute right-6 top-6 font-mono text-sm text-slate-300 transition group-hover:text-lime-600">
        {service.number}
      </span>

      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-lime-100 text-slate-950 transition duration-300 group-hover:bg-lime-400">
        <Icon size={26} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950">
        {service.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
        {service.description}
      </p>

      {/* Visual affordance */}
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-950">
        <span>Explore service</span>

        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </article>
  );
}
