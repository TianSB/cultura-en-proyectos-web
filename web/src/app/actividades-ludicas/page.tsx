import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { actividadesLudicasContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Actividades Lúdicas",
};

export default function ActividadesLudicasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081c15] via-[#1b4332] to-[#2d6a4f] pt-32 pb-20">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-[#52b788] opacity-10 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#d8f3dc] backdrop-blur-sm">
              Talleres
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {actividadesLudicasContent.title}
            </h1>
            <p className="mt-2 text-xl text-[#d8f3dc]">{actividadesLudicasContent.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-gray-700">{actividadesLudicasContent.intro}</p>
            <p className="mt-4 leading-relaxed text-gray-600">{actividadesLudicasContent.description}</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Catálogo */}
      <section className="relative overflow-hidden bg-[#f5f5f5] py-20">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-[#d8f3dc] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">
              Catálogo
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Catálogo de{" "}
              <span className="text-gradient">talleres</span>
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
            {actividadesLudicasContent.catalogo.map((taller) => (
              <Link
                key={taller.slug}
                href={`/actividades-ludicas/${taller.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#d8f3dc]"
              >
                <div className="relative h-36 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${taller.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#2d6a4f] transition-colors group-hover:text-[#1b4332]">{taller.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{taller.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="inline-block rounded-full bg-[#d8f3dc] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">
            Destacados
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            Proyectos{" "}
            <span className="text-gradient">destacados</span>
          </h2>
        </ScrollReveal>
        <div className="mt-10 space-y-10">
          {actividadesLudicasContent.proyectos.slice(0, 3).map((proyecto, idx) => (
            <ScrollReveal key={proyecto.slug} delay={idx * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Link href={`/actividades-ludicas/${proyecto.slug}`}>
                  {"image" in proyecto && proyecto.image && (
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${proyecto.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2d6a4f] transition-colors">{proyecto.title}</h3>
                    <p className="mt-3 leading-relaxed text-gray-700">{proyecto.description}</p>
                    <p className="mt-2 leading-relaxed text-gray-500">{proyecto.details}</p>
                  </div>
                </Link>

                {"juegos" in proyecto && proyecto.juegos && (
                  <div className="px-8 pb-6">
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {proyecto.juegos.map((juego) => (
                        <div key={juego} className="flex items-start gap-2 rounded-lg bg-[#f5f5f5] p-3 text-sm text-gray-600">
                          <span className="mt-0.5 text-[#2d6a4f]">✦</span>
                          {juego}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {"years" in proyecto && proyecto.years && (
                  <div className="px-8 pb-8">
                    <div className="mt-6 space-y-3">
                      {Object.entries(proyecto.years).map(([year, municipios]) => (
                        <div key={year}>
                          <span className="inline-block rounded-full bg-[#d8f3dc] px-3 py-0.5 text-xs font-semibold text-[#2d6a4f]">{year}</span>
                          <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{municipios.join(" | ")}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="px-8 pb-6">
                  <Link
                    href={`/actividades-ludicas/${proyecto.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#2d6a4f] transition-all duration-300 hover:gap-2"
                  >
                    Ver proyecto completo
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Más proyectos */}
      <section className="relative overflow-hidden bg-[#f5f5f5] py-20">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-[#d8f3dc] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">
              Iniciativas
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Más{" "}
              <span className="text-gradient">iniciativas</span>
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 stagger-children">
            {actividadesLudicasContent.proyectos.slice(3).map((proyecto) => (
              <Link
                key={proyecto.slug}
                href={`/actividades-ludicas/${proyecto.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {"image" in proyecto && proyecto.image && (
                  <div className="relative h-36 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${proyecto.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2d6a4f] transition-colors">
                    {proyecto.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{proyecto.description}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{proyecto.details}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
