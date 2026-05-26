"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navItems } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/5"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group text-lg font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-[#2d6a4f] to-[#52b788] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#1b4332] group-hover:to-[#2d6a4f]">
            Cultura en
          </span>
          <span className="text-gray-500 transition-colors group-hover:text-gray-700">
            {" "}Proyectos
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#1b4332]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-black/5"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-4/5 -translate-x-1/2 rounded-full bg-[#2d6a4f] animate-slide-down" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="group relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 rounded-full bg-gray-700 transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-gray-700 transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-gray-700 transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile nav panel */}
      <nav
        className={`fixed top-0 right-0 z-40 h-full w-72 border-l border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pt-24">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`relative rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#d8f3dc] text-[#1b4332]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#2d6a4f]" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
