import { Link } from "react-router-dom";
import { Bug} from "lucide-react";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-slate-950">
              <Bug size={23} />
            </span>

            <span className="text-2xl font-black text-white">
              BugFix<span className="text-lime-400">.</span>
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={`/about`}>About</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
            <li>
              <Link to={`/services`}>Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
