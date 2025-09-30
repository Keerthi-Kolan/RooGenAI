import React from "react";
import logo from "../assets/logo/roogenai.png";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Logo + tagline side by side */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <img
            src={logo}
            alt="RoogenAI logo"
            className="w-44 md:w-56 lg:w-64 h-auto rounded"
          />

          <p className="text-balance font-thin tracking text-2xl md:text-3xl leading-snug text-neutral-100">
            The First AI Processing Unit Revolutionizing the Future of
            Intelligent Systems with Unparalleled Speed and Precision.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-sm text-neutral-400 sm:flex-row">
          <p>© {new Date().getFullYear()} RoogenAI. All rights reserved.</p>
          <p>
            <a href="/privacy" className="hover:text-white transition">
              Privacy
            </a>
            <span className="mx-2">·</span>
            <a href="/terms" className="hover:text-white transition">
              Terms
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
