import type { Metadata } from "next";
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
              <div
                key={taller.title}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#d8f3dc]"
              >
                <h3 className="font-bold text-[#2d6a4f] transition-colors group-hover:text-[#1b4332]">{taller.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{taller.description}</p>
              </div>
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
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2d6a4f] transition-colors">{proyecto.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-700">{proyecto.description}</p>
                <p className="mt-2 leading-relaxed text-gray-500">{proyecto.details}</p>

                {"juegos" in proyecto && proyecto.juegos && (
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {proyecto.juegos.map((juego) => (
                      <div key={juego} className="flex items-start gap-2 rounded-lg bg-[#f5f5f5] p-3 text-sm text-gray-600">
                        <span className="mt-0.5 text-[#2d6a4f]">✦</span>
                        {juego}
                      </div>
                    ))}
                  </div>
                )}

                {"years" in proyecto && proyecto.years && (
                  <div className="mt-6 space-y-3">
                    {Object.entries(proyecto.years).map(([year, municipios]) => (
                      <div key={year}>
                        <span className="inline-block rounded-full bg-[#d8f3dc] px-3 py-0.5 text-xs font-semibold text-[#2d6a4f]">{year}</span>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{municipios.join(" | ")}</p>
                      </div>
                    ))}
                  </div>
                )}
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
            {actividadesLudicasContent.proyectos.slice(3).map((proyecto, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2d6a4f] transition-colors">
                  {proyecto.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{proyecto.description}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{proyecto.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
