import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import VideoEmbed from "@/components/VideoEmbed";
import { formacionProfesionalContent } from "@/lib/data";

export async function generateStaticParams() {
  return formacionProfesionalContent.programas.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const programa = formacionProfesionalContent.programas.find((p) => p.slug === slug);
  return {
    title: programa?.title ?? "Programa | Formación Profesional",
    description: programa?.description,
    openGraph: {
      title: programa?.title ?? "Programa",
      description: programa?.description,
      images: programa?.image ? [{ url: programa.image }] : [],
    },
  };
}

export default async function ProgramaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programa = formacionProfesionalContent.programas.find((p) => p.slug === slug);

  if (!programa) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Programa no encontrado</h1>
        <Link
          href="/formacion-profesional"
          className="mt-4 inline-block text-[#2d6a4f] hover:underline"
        >
          Volver a Formación Profesional
        </Link>
      </div>
    );
  }

  const related = formacionProfesionalContent.programas
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-32">
        <div className="absolute inset-0">
          <Image
            src={programa.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081c15] via-[#081c15]/80 to-[#081c15]/40" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/formacion-profesional"
              className="mb-6 inline-flex items-center text-sm text-[#d8f3dc] hover:text-white transition-colors"
            >
              <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Volver a Formación Profesional
            </Link>
            <div>
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-[#d8f3dc] backdrop-blur-sm">
                Programa de formación
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {programa.title}
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="relative mb-12 overflow-hidden rounded-2xl shadow-lg">
                <div className="relative aspect-[21/9]">
                  <Image
                    src={programa.image}
                    alt={programa.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            {/* Video embeds */}
            {programa.videos && (
              <VideoEmbed videos={programa.videos} title="Video del programa" />
            )}

            <ScrollReveal>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
                <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
                  {programa.description}
                </p>

                {programa.details && (
                  <>
                    <div className="my-8 h-px bg-gradient-to-r from-[#52b788] via-[#d8f3dc] to-transparent" />
                    <p className="leading-relaxed text-gray-600">
                      {programa.details}
                    </p>
                  </>
                )}

                {/* Ejes temáticos (II Jornadas) */}
                {programa.ejes && (
                  <div className="mt-8">
                    <h3 className="mb-4 text-lg font-semibold text-[#1b4332]">Ejes temáticos</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {programa.ejes.map((eje) => (
                        <div
                          key={eje.name}
                          className="rounded-xl bg-[#f5f5f5] p-5 transition-colors hover:bg-[#d8f3dc]/50"
                        >
                          <h4 className="font-bold text-[#2d6a4f]">{eje.name}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-gray-600">
                            {eje.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Especialistas (II Jornadas) */}
                {programa.especialistas && (
                  <div className="mt-8 space-y-4">
                    <h3 className="text-lg font-semibold text-[#1b4332]">Especialistas</h3>
                    {programa.especialistas.map((esp) => (
                      <div
                        key={esp.name}
                        className="rounded-xl border border-gray-100 bg-[#f8faf8] p-5"
                      >
                        <h4 className="font-bold text-gray-900">{esp.name}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-gray-600">{esp.bio}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Gallery */}
            {programa.galeria && programa.galeria.length > 1 && (
              <ScrollReveal>
                <div className="mt-12">
                  <h2 className="mb-6 text-2xl font-bold text-[#1b4332]">Galería</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {programa.galeria.map((img: string, i: number) => (
                      <div key={img} className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                        <Image
                          src={img}
                          alt={`Imagen ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* ═══ RELATED PROGRAMS ═══ */}
      {related.length > 0 && (
        <section className="bg-[#f8faf8] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="mb-2 text-center text-2xl font-bold text-[#1b4332]">
                Otros programas
              </h2>
              <p className="mb-10 text-center text-gray-600">
                Explorá más programas de formación profesional
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, idx) => (
                <ScrollReveal key={p.slug} delay={idx * 100}>
                  <Link
                    href={`/formacion-profesional/${p.slug}`}
                    className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-[#1b4332] group-hover:text-[#2d6a4f] transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
