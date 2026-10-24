
export default function ProcessStep({ step, isLast }) {
  const Icon = step.icon;

  return (
    <article className="relative flex gap-5 sm:gap-6">
      {/* Icon and connecting line */}
      <div className="flex shrink-0 flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-400/25 bg-lime-400/10 text-lime-400 transition duration-300 hover:bg-lime-400 hover:text-slate-950">
          <Icon size={25} strokeWidth={1.8} />
        </div>

        {!isLast && (
          <div className="mt-3 min-h-10 w-px flex-1 bg-linear-to-b from-lime-400/50 to-slate-700" />
        )}
      </div>

      {/* Step content */}
      <div className={isLast ? 'pb-0' : 'pb-8'}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm font-bold text-lime-400">
            {step.number}
          </span>

          <h3 className="text-lg font-bold text-white sm:text-xl">
            {step.title}
          </h3>
        </div>

        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          {step.description}
        </p>

        <p className="mt-3 text-sm font-medium text-lime-300">
          {step.note}
        </p>
      </div>
    </article>
  );
}
