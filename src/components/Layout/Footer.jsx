import { Link } from "react-router-dom";
import { Bug ,ArrowUpRight} from "lucide-react";

const footerLinks = [
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Tech Stack", to: "/tech-stack" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-slate-950">
                <Bug size={23} />
              </span>

              <span className="text-2xl font-black text-white">
                BugFix<span className="text-lime-400">.</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              We build it, break it, fix it, and make it work. Because “it
              worked yesterday” is not a deployment strategy.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="font-bold text-white">Explore</h2>

            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition hover:text-lime-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h2 className="font-bold text-white">Got a bug?</h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Tell us what broke. We'll figure out the next step.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-lime-400 px-4 py-3 font-bold text-slate-950 transition hover:bg-lime-300"
            >
              Let's fix it <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} BugFix. Built with caffeine and code.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:text-lime-400"
            >
              {/* <Github size={19} /> */}
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-lime-400"
            >
              
              
              
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
