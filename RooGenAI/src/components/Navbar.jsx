import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo/roogenai.png";

const Navbar = ({ scrollToSection, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", ref: refs.homeRef },
    { label: "Members", ref: refs.meetOurTeamRef },
    { label: "Advisors", ref: refs.meetOurAdvisorsRef },
    { label: "Contact", ref: refs.contactRef },
  ];

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false);
  };

  // -------- Brand lockup (icon + wordmark) ----------
  const Brand = () => (
    <button
      type="button"
      onClick={() => handleNavClick(refs.homeRef)}
      aria-label="Go to Home"
      className="group flex items-center gap-3 md:gap-4 select-none"
    >
      {/* icon tile */}
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800/70 ring-1 ring-neutral-700/60 group-hover:ring-neutral-500 transition">
        <img
          src={logo}
          alt="RooGenAI logo"
          className="h-10 w-10 rounded-xl ring-1 ring-neutral-700 object-cover block"
        />
      </span>
      {/* wordmark */}
      <span className="whitespace-nowrap text-2xl md:text-3xl font-semibold leading-none tracking-tight text-neutral-200 group-hover:text-white transition">
        RooGenAI
      </span>
    </button>
  );
  // ---------------------------------------------------

  return (
    <nav className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Brand (desktop) */}
        <div className="hidden md:block">
          <Brand />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-lg">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.ref)}
              className="hover:text-cyan-400 transition"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800">
          <div className="flex items-center justify-between px-6 py-3">
            <Brand />
          </div>
          <div className="flex flex-col items-center gap-4 pb-4 text-lg">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.ref)}
                className="hover:text-cyan-400 transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
