import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "AynIncuba",
};

const servicios = [
  {
    title: "Networking",
    description:
      "Conexión con una red de emprendedores, mentores e inversores del sector cultural y creativo para potenciar tus proyectos.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Capacitaciones",
    description:
      "Programas de formación diseñados para fortalecer las habilidades de gestión, producción y comunicación de emprendedores culturales.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Tutoría",
    description:
      "Acompañamiento personalizado con consultores especializados que guían el desarrollo de tu proyecto creativo o emprendimiento.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Incubación",
    description:
      "Programa integral de incubación que brinda infraestructura, recursos y acompañamiento para lanzar y escalar emprendimientos culturales.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
];

export default function AynincubaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081c15] via-[#1b4332] to-[#2d6a4f] pt-32 pb-20">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-[#52b788] opacity-10 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/aynincuba/logo.png"
                alt="AynIncuba"
                className="mb-6 h-24 w-auto"
              />
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#d8f3dc] backdrop-blur-sm">
                Incubadora
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                AynIncuba
              </h1>
              <p className="mt-2 max-w-2xl text-xl text-[#d8f3dc]">
                Programa anual de acompañamiento a proyectos creativos y emprendedores
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Accreditation */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-[#d8f3dc] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">
              Acreditación
            </span>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              AynIncuba está acreditada como Incubadora ante la Subsecretaría de
              Emprendedores, perteneciente al Ministerio de Producción de la
              Nación bajo el nº de Registro nº 00466.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Servicios */}
      <section className="relative overflow-hidden bg-[#f5f5f5] py-20">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-[#d8f3dc] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">
              Servicios
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              ¿Qué ofrecemos en{" "}
              <span className="text-gradient">AynIncuba</span>?
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            {servicios.map((servicio) => (
              <div
                key={servicio.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#d8f3dc]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#d8f3dc] text-[#2d6a4f] transition-all duration-300 group-hover:bg-[#2d6a4f] group-hover:text-white">
                  {servicio.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-[#2d6a4f]">
                  {servicio.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {servicio.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-[#d8f3dc] px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2d6a4f]">
              La incubadora
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Impulsando proyectos{" "}
              <span className="text-gradient">creativos</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              AynIncuba es la incubadora de proyectos culturales y creativos de
              Cultura en Proyectos. Ofrece instancias de networking, formación,
              mentorías y niveles específicos de incubación para emprendedores
              del sector cultural.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Trabajamos con un consultor especializado que acompaña a cada
              emprendimiento en su proceso de desarrollo, brindando herramientas
              de gestión, producción y comunicación adaptadas a las necesidades
              específicas del sector cultural y creativo.
            </p>
            <div className="mt-8 rounded-2xl border border-gray-200 bg-[#f5f5f5] p-8">
              <h3 className="text-lg font-bold text-[#2d6a4f]">
                Programas destacados
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  {
                    name: "PreMICA",
                    desc: "Formación y profesionalización para emprendedores participantes del Mercado de Industrias Culturales Argentinas.",
                  },
                  {
                    name: "Espacio de Aceleración",
                    desc: "Programa intensivo de 14 semanas para potenciar emprendimientos creativos.",
                  },
                  {
                    name: "Consultorio de Proyectos",
                    desc: "Tutorías especializadas para emprendedores y gestores culturales.",
                  },
                ].map((programa) => (
                  <li key={programa.name} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#2d6a4f] text-xs text-white">
                      ✓
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">
                        {programa.name}
                      </span>
                      <p className="text-sm text-gray-600">{programa.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1b4332] to-[#081c15] py-20">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <ScrollReveal>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              ¿Tenés un proyecto{" "}
              <span className="text-[#52b788]">creativo</span>?
            </h2>
            <p className="mt-2 text-gray-400">
              Sumate a AynIncuba y recibí acompañamiento para hacerlo realidad
            </p>
            <a
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#52b788] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#40916c] hover:-translate-y-0.5"
            >
              Contactanos
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
