import { CircleCheck, Bug, GitBranch } from "lucide-react";

const HeroSection = () => {
  return (
    <div>
      <div className="relative mx-auto w-full max-w-lg">
        {/* Decorative background */}
        <div className="absolute -inset-5 rounded-[2rem] bg-lime-400/10 blur-2xl" />

        {/* Terminal window */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-lime-400" />
            </div>

            <span className="text-xs text-slate-400">bugfix-terminal</span>

            {/* <Terminal size={17} className="text-slate-400" /> */}
          </div>

          <div className="space-y-5 p-5 sm:p-7">
            <div>
              <p className="text-xs text-slate-500">~/bugfix-website</p>

              <p className="mt-2 font-mono text-sm sm:text-base">
                <span className="text-lime-400">$</span>{" "}
                <span className="text-white">npm run build</span>
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <CircleCheck size={17} className="shrink-0 text-lime-400" />

                <span className="text-slate-300">Bug identified and fixed</span>
              </div>

              <div className="flex items-start gap-3">
                <CircleCheck size={17} className="shrink-0 text-lime-400" />
                <span className="text-slate-300">
                  Components rendered successfully
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CircleCheck size={17} className="shrink-0 text-lime-400" />
                <span className="text-slate-300">Production build ready</span>
              </div>
            </div>

            <div className="rounded-xl border border-lime-400/20 bg-lime-400/10 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400 text-slate-950">
                  <Bug size={23} />
                </div>

                <div>
                  <p className="font-semibold text-white">All systems go!</p>
                  <p className="mt-1 text-xs text-lime-300">
                    Error 404: Excuses not found.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating card */}
        <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-xl border border-white/10 bg-slate-800 p-3 shadow-xl sm:-left-7">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300">
            <GitBranch size={22} />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Ship better code</p>
            <p className="text-xs text-slate-400">One fix at a time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
