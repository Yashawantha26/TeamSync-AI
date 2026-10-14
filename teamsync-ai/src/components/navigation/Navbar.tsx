"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
{ label: "Home", href: "/" },
{ label: "Features", href: "/#features" },
{ label: "How It Works", href: "/#how-it-works" },
{ label: "Our Team", href: "/#team" },
];

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <header className="navbar"> <div className="container navbar-inner">
<Link
href="/"
className="brand"
onClick={() => setMenuOpen(false)}
> <span className="brand-icon"> <Sparkles size={21} /> </span>

```
      <span>
        TeamSync<span className="brand-accent"> AI</span>
      </span>
    </Link>

    <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}

      <Link
        href="/login"
        className="nav-login"
        onClick={() => setMenuOpen(false)}
      >
        Login
      </Link>

      <Link
        href="/register"
        className="button button-primary nav-cta"
        onClick={() => setMenuOpen(false)}
      >
        Get Started
      </Link>
    </nav>

    <button
      type="button"
      className="mobile-menu-button"
      aria-label={menuOpen ? "Close navigation" : "Open navigation"}
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
</header>
);
}
