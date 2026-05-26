import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { heroSlides } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#081c15] via-[#1b4332] to-[#2d6a4f]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 animate-gradient opacity-60"
          style={{
            background: "linear-gradient(135deg, #081c15 0%, #1b4332 25%, #2d6a4f 50%, #52b788 75%, #2d6a4f 100%)",
            backgroundSize: "400% 400%",
          }}
        />

        {/* Floating decorative circles */}
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-[#52b788] opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-[#d8f3dc] opacity-10 blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2d6a4f] opacity-20 blur-3xl animate-pulse-glow" />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30" />

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="animate-fade-in">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#d8f3dc] backdrop-blur-sm">
                Fundación Argentina
              </span>
            </div>
            <h1 className="animate-fade-in-delay-1 mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Cultura en{" "}
              <span className="bg-gradient-to-r from-[#d8f3dc] via-[#52b788] to-[#d8f3dc] bg-clip-text text-transparent">
                Proyectos
              </span>
            </h1>
            <p className="animate-fade-in-delay-2 mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl max-w-2xl">
              Desarrollo y gestión de proyectos culturales, artísticos,
              educativos y tecnológicos, con especial acento en la inclusión y
              la sustentabilidad ambiental.
            </p>
            <div className="animate-fade-in-delay-3 mt-10 flex flex-wrap gap-4">
              <Link
                href="/proyectos"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#1b4332] shadow-xl shadow-black/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#d8f3dc] to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative">Ver proyectos</span>
                <svg className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/nosotros"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:-translate-y-0.5"
              >
                Sobre nosotros
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ═══ HIGHLIGHTS ═══ */}
      <section className="relative -mt-16 z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3 stagger-children">
          {heroSlides.slice(1).map((slide) => (
            <Link
              key={slide.title}
              href={slide.href}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-300/50"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d8f3dc]/0 to-[#d8f3dc]/0 transition-all duration-300 group-hover:from-[#d8f3dc]/30 group-hover:to-[#d8f3dc]/10" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#d8f3dc] text-[#2d6a4f] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2d6a4f] group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {slide.title === "Ayni Lab" ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-[#2d6a4f]">
                  {slide.title}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-500">
                  {slide.subtitle}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2d6a4f] transition-all duration-300 group-hover:gap-2">
                  {slide.cta}
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="relative overflow-hidden bg-[#f5f5f5] py-24 sm:py-32">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />
        <ScrollReveal>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-[#d8f3dc] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">
                Quiénes somos
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                ¿Quiénes{" "}
                <span className="text-gradient">somos</span>?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Somos una fundación argentina conformada por un grupo
                transdisciplinar de profesionales de la cultura, el diseño y las
                ciencias. Trabajamos de manera colectiva en cada proyecto,
                integrando arte, tecnología, inclusión y sustentabilidad.
              </p>
              <Link
                href="/nosotros"
                className="group mt-8 inline-flex items-center gap-2 font-semibold text-[#2d6a4f] transition-all duration-300 hover:text-[#1b4332]"
              >
                Conocé más sobre nosotros
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ═══ AYNI LAB PREVIEW ═══ */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal variant="fade-left">
              <div>
                <span className="inline-block rounded-full bg-[#d8f3dc] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">
                  Ayni Lab
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Espacio de trabajo{" "}
                  <span className="text-gradient">multidisciplinario</span>
                </h2>
                <p className="mt-6 leading-relaxed text-gray-600">
                  Espacio de trabajo multidisciplinario concebido para investigar y
                  experimentar con el arte y la tecnología. Apostamos a la formación
                  en pos del desarrollo sostenible de proyectos culturales con
                  especial acento en la reutilización creativa de materiales y el
                  trabajo colaborativo.
                </p>
                <Link
                  href="/ayni-lab"
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2d6a4f] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#1b4332] hover:shadow-xl hover:-translate-y-0.5"
                >
                  Explorar Ayni Lab
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={150}>
              <div className="group relative rounded-2xl bg-gradient-to-br from-[#d8f3dc] to-[#b7e4c7] p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                {/* Decorative corner */}
                <div className="absolute -top-2 -right-2 h-16 w-16 rounded-2xl bg-[#2d6a4f] opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20" />
                <h3 className="relative text-lg font-bold text-[#1b4332]">
                  Estructura del Lab
                </h3>
                <ul className="relative mt-6 space-y-4">
                  {[
                    { icon: "🔬", text: "Laboratorio: experimentación, desarrollo y producción" },
                    { icon: "🛠️", text: "Talleres: profesionalización y experimentación" },
                    { icon: "🎪", text: "Muestras y encuentros: compartir con la comunidad" },
                    { icon: "🏠", text: "Residencias: producir con herramientas del lab" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-sm text-[#1b4332]">
                      <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-white/60 text-xs backdrop-blur-sm">
                        {item.icon}
                      </span>
                      <span className="leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ NUMBERS / STATS ═══ */}
      <section className="relative bg-gradient-to-br from-[#1b4332] to-[#081c15] py-20">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            {[
              { number: "37+", label: "Proyectos realizados" },
              { number: "70+", label: "Municipios alcanzados" },
              { number: "15+", label: "Años de trayectoria" },
              { number: "6", label: "Talleres activos en Ayni Lab" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white sm:text-5xl">
                  <span className="bg-gradient-to-r from-[#d8f3dc] to-[#52b788] bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#d8f3dc] opacity-30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#d8f3dc] opacity-20 blur-3xl" />
        <ScrollReveal>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                ¿Tenés un proyecto{" "}
                <span className="text-gradient">en mente</span>?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Trabajemos juntos para hacerlo realidad.
              </p>
              <Link
                href="/contacto"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2d6a4f] px-8 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[#1b4332] hover:shadow-2xl hover:-translate-y-0.5"
              >
                Contactanos
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
