import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function Footer() {
return ( <footer className="site-footer"> <div className="container"> <div className="footer-main">
{/* Brand */} <div className="footer-brand"> <Link href="/" className="brand"> <span className="brand-icon"> <Sparkles size={21} /> </span>

```
          <span>
            TeamSync<span className="brand-accent"> AI</span>
          </span>
        </Link>

        <p>
          One workspace for smarter meetings, organized projects,
          and meaningful team progress.
        </p>

        <span className="footer-team">
          Built by Team Tech Titans
        </span>
      </div>

      {/* Explore Links */}
      <div className="footer-links-column">
        <h4>Explore</h4>

        <Link href="/#features">Features</Link>
        <Link href="/#how-it-works">How It Works</Link>
        <Link href="/#team">Our Team</Link>
      </div>

      {/* Workspace Links */}
      <div className="footer-links-column">
        <h4>Workspace</h4>

        <Link href="/register">Get Started</Link>
        <Link href="/login">Login</Link>
        <Link href="/projects">Projects</Link>
      </div>

      {/* Project Information */}
      <div className="footer-links-column">
        <h4>Project</h4>

        <span>Rajeev Institute of Technology</span>
        <span>Hassan, Karnataka</span>
        <span>Computer Science and Engineering</span>
      </div>
    </div>

    {/* Copyright */}
    <div className="footer-bottom">
      <p>
        &copy; {new Date().getFullYear()} TeamSync AI. Built by Team
        Tech Titans.
      </p>

      <Link href="/#team" className="footer-credit">
        Meet the developers
        <ArrowUpRight size={15} />
      </Link>
    </div>
  </div>
</footer>
);
}
