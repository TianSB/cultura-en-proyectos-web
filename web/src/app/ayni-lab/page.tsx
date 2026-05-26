import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ayniLabContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ayni Lab",
};

export default function AyniLabPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081c15] via-[#1b4332] to-[#2d6a4f] pt-32 pb-20">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-[#52b788] opacity-10 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#d8f3dc] backdrop-blur-sm">
              Laboratorio
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {ayniLabContent.title}
            </h1>
            <p className="mt-2 text-xl text-[#d8f3dc]">
              {ayniLabContent.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-gray-700">
              {ayniLabContent.description}
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              {ayniLabContent.extendedDescription}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Structure */}
      <section className="relative overflow-hidden bg-[#f5f5f5] py-20">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-[#d8f3dc] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">
              Estructura
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Estructura interna del{" "}
              <span className="text-gradient">Lab</span>
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            {ayniLabContent.structure.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#2d6a4f] transition-colors group-hover:text-[#1b4332]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talleres */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="inline-block rounded-full bg-[#d8f3dc] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">
            Actividades
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            Talleres y{" "}
            <span className="text-gradient">proyectos</span>
          </h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 stagger-children">
          {ayniLabContent.talleres.map((taller) => (
            <Link
              key={taller.slug}
              href={`/ayni-lab/${taller.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[#d8f3dc] opacity-50 transition-all duration-500 group-hover:scale-150" />
              <div className="relative">
                <span className="inline-block rounded-full bg-[#d8f3dc] px-3 py-1 text-xs font-semibold text-[#1b4332]">
                  {taller.category}
                </span>
                <h3 className="mt-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-[#2d6a4f]">
                  {taller.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
                  {taller.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2d6a4f] transition-all duration-300 group-hover:gap-2">
                  Leer más
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Social */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1b4332] to-[#081c15] py-20">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <ScrollReveal>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Redes sociales de{" "}
              <span className="text-[#52b788]">Ayni Lab</span>
            </h2>
            <p className="mt-2 text-gray-400">Seguinos en nuestras redes</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {[
                { name: "Instagram", href: "https://instagram.com/aynilab/" },
                { name: "Facebook", href: "https://facebook.com/pages/Ayni-Lab/1566164470335594" },
                { name: "Twitter", href: "https://twitter.com/AyniLab" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5"
                >
                  {social.name}
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
