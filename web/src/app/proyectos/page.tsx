import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { proyectosContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Proyectos",
};

export default function ProyectosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081c15] via-[#1b4332] to-[#2d6a4f] pt-32 pb-20">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#d8f3dc] backdrop-blur-sm">
              Nuestra red
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {proyectosContent.title}
            </h1>
            <p className="mt-2 text-xl text-[#d8f3dc]">{proyectosContent.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-gray-700">{proyectosContent.intro}</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Categorías */}
      {proyectosContent.categorias.map((categoria, catIdx) => (
        <section
          key={categoria.titulo}
          className={`relative overflow-hidden py-20 ${
            catIdx % 2 === 0 ? "bg-[#f5f5f5]" : "bg-white"
          }`}
        >
          {catIdx % 2 === 0 && <div className="absolute inset-0 dot-pattern opacity-30" />}
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <span className="inline-block rounded-full bg-[#d8f3dc] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">
                {catIdx === 0 ? "Arte" : catIdx === 1 ? "Formación" : "Inclusión"}
              </span>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                {categoria.titulo}
              </h2>
            </ScrollReveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 stagger-children">
              {categoria.proyectos.map((proyecto, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#d8f3dc]"
                >
                  {"image" in proyecto && proyecto.image && (
                    <div className="relative h-40 overflow-hidden">
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
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {proyecto.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
