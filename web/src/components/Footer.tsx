import Link from "next/link";
import { siteConfig, navItems } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#1b1b1b] text-gray-300">
      {/* Top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#2d6a4f] via-[#52b788] to-[#2d6a4f]" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Cultura en
              <span className="text-[#52b788]"> Proyectos</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Desarrollo y gestión de proyectos culturales, artísticos,
              educativos y tecnológicos.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Secciones
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-all duration-200 hover:text-[#52b788] hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-all duration-200 hover:text-[#52b788]"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-200 hover:border-[#52b788] hover:text-[#52b788] hover:bg-[#52b788]/10"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-200 hover:border-[#52b788] hover:text-[#52b788] hover:bg-[#52b788]/10"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-200 hover:border-[#52b788] hover:text-[#52b788] hover:bg-[#52b788]/10"
                  aria-label="YouTube"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.vimeo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-200 hover:border-[#52b788] hover:text-[#52b788] hover:bg-[#52b788]/10"
                  aria-label="Vimeo"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs text-gray-600">
          &copy; {currentYear} Cultura en Proyectos. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
