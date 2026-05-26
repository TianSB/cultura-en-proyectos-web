import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { formacionProfesionalContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Formación Profesional",
};

export default function FormacionProfesionalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081c15] via-[#1b4332] to-[#2d6a4f] pt-32 pb-20">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#d8f3dc] backdrop-blur-sm">
              Capacitación
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {formacionProfesionalContent.title}
            </h1>
            <p className="mt-2 text-xl text-[#d8f3dc]">{formacionProfesionalContent.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Programas */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {formacionProfesionalContent.programas.map((programa, idx) => (
            <ScrollReveal key={programa.slug} delay={idx * 100}>
              <Link
                href={`/formacion-profesional/${programa.slug}`}
                className="group block rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10"
              >
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#2d6a4f] transition-colors">
                  {programa.title}
                </h2>
                <p className="mt-3 leading-relaxed text-gray-700">{programa.description}</p>
                {programa.details && <p className="mt-2 leading-relaxed text-gray-500">{programa.details}</p>}

                {"ejes" in programa && programa.ejes && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {programa.ejes.map((eje) => (
                      <div key={eje.name} className="rounded-xl bg-[#f5f5f5] p-5 transition-colors hover:bg-[#d8f3dc]/50">
                        <h3 className="font-bold text-[#2d6a4f]">{eje.name}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-gray-600">{eje.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {"especialistas" in programa && programa.especialistas && (
                  <div className="mt-6 space-y-4">
                    <h3 className="font-semibold text-[#2d6a4f]">Especialistas</h3>
                    {programa.especialistas.map((esp) => (
                      <div key={esp.name} className="rounded-xl border border-gray-100 bg-white p-4">
                        <h4 className="font-bold text-gray-900">{esp.name}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-gray-600">{esp.bio}</p>
                      </div>
                    ))}
                  </div>
                )}

                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#2d6a4f] transition-all duration-300 group-hover:gap-2">
                  Ver programa completo
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
