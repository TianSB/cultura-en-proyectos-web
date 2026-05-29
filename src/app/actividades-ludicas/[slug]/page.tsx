import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import VideoEmbed from "@/components/VideoEmbed";
import { actividadesLudicasContent } from "@/lib/data";
import type { CatalogoItem, ProyectoActividad } from "@/lib/types";

export async function generateStaticParams() {
  const catalogoSlugs = actividadesLudicasContent.catalogo.map((t) => ({
    slug: t.slug,
  }));
  const proyectosSlugs = actividadesLudicasContent.proyectos.map((p) => ({
    slug: p.slug,
  }));
  return [...catalogoSlugs, ...proyectosSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const catalogoItem = actividadesLudicasContent.catalogo.find((t) => t.slug === slug);
  const proyectoItem = actividadesLudicasContent.proyectos.find((p) => p.slug === slug);
  const item = catalogoItem ?? proyectoItem;
  const description = item?.description ?? "";
  return {
    title: item?.title ?? "Actividad | Cultura en Proyectos",
    description,
    openGraph: {
      title: item?.title ?? "Actividad",
      description,
      images: item?.image ? [{ url: item.image }] : [],
    },
  };
}

export default async function ActividadPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const catalogoItem = actividadesLudicasContent.catalogo.find((t) => t.slug === slug);
  const proyectoItem = actividadesLudicasContent.proyectos.find((p) => p.slug === slug);
  const isProyecto = !!proyectoItem;
  const item = catalogoItem ?? proyectoItem;

  if (!item) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Actividad no encontrada</h1>
        <Link
          href="/actividades-ludicas"
          className="mt-4 inline-block text-[#2d6a4f] hover:underline"
        >
          Volver a Actividades Lúdicas
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-32">
        <div className="absolute inset-0">
          <Image
            src={item.image}
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
              href="/actividades-ludicas"
              className="mb-6 inline-flex items-center text-sm text-[#d8f3dc] hover:text-white transition-colors"
            >
              <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Volver a Actividades Lúdicas
            </Link>
            <div>
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-[#d8f3dc] backdrop-blur-sm">
                {isProyecto ? "Proyecto destacado" : "Taller del catálogo"}
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {item.title}
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
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            {/* Video embeds */}
            {"videos" in item && item.videos && (
              <VideoEmbed videos={item.videos} title="Video del taller" />
            )}

            <ScrollReveal>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
                <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
                  {item.description}
                </p>

                {/* ═══ INFO BAR: duración + edades (catálogo) ═══ */}
                {!isProyecto && catalogoItem && (
                  <div className="mt-8 flex flex-wrap gap-4">
                    {catalogoItem.duracion && (
                      <div className="inline-flex items-center gap-2 rounded-xl border border-[#d8f3dc] bg-[#f5faf5] px-4 py-2.5 text-sm text-[#2d6a4f]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                        </svg>
                        <span className="font-medium">Duración:</span>
                        <span>{catalogoItem.duracion}</span>
                      </div>
                    )}
                    {catalogoItem.edades && (
                      <div className="inline-flex items-center gap-2 rounded-xl border border-[#d8f3dc] bg-[#f5faf5] px-4 py-2.5 text-sm text-[#2d6a4f]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        <span className="font-medium">Edad:</span>
                        <span>{catalogoItem.edades}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* ═══ MATERIALES (catálogo) ═══ */}
                {!isProyecto && catalogoItem?.materiales && (
                  <div className="mt-8">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                      Materiales utilizados
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {catalogoItem.materiales.map((mat) => (
                        <span
                          key={mat}
                          className="inline-block rounded-full bg-gradient-to-r from-[#d8f3dc] to-[#b7e4c7] px-3.5 py-1.5 text-xs font-medium text-[#1b4332] shadow-sm"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {isProyecto && proyectoItem?.details && (
                  <>
                    <div className="my-8 h-px bg-gradient-to-r from-[#52b788] via-[#d8f3dc] to-transparent" />
                    <p className="leading-relaxed text-gray-600">
                      {proyectoItem.details}
                    </p>
                  </>
                )}

                {/* Juegos (Fernández Blanco) */}
                {"juegos" in item && (item as ProyectoActividad).juegos && (
                  <div className="mt-8">
                    <h3 className="mb-4 text-lg font-semibold text-[#1b4332]">Juegos incluidos</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {(item as ProyectoActividad).juegos!.map((juego: string) => (
                        <div
                          key={juego}
                          className="flex items-start gap-3 rounded-xl bg-[#f5f5f5] p-4"
                        >
                          <span className="mt-0.5 text-lg text-[#2d6a4f]">✦</span>
                          <span className="text-sm text-gray-700">{juego}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Municipios por año (AcercArte) */}
                {"years" in item && (item as ProyectoActividad).years && (
                  <div className="mt-8 space-y-4">
                    <h3 className="text-lg font-semibold text-[#1b4332]">Municipios visitados</h3>
                    {Object.entries((item as ProyectoActividad).years!).map(([year, municipios]) => (
                      <div key={year}>
                        <span className="inline-block rounded-full bg-[#d8f3dc] px-3 py-0.5 text-xs font-semibold text-[#2d6a4f]">
                          {year}
                        </span>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                          {(municipios as string[]).join(" | ")}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* ═══ GALERÍA ═══ */}
            {"galeria" in item && (item as CatalogoItem | ProyectoActividad).galeria && (item as CatalogoItem | ProyectoActividad).galeria!.length > 1 && (
              <ScrollReveal>
                <div className="mt-12">
                  <h2 className="mb-6 text-2xl font-bold text-[#1b4332]">Galería</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {(item as CatalogoItem | ProyectoActividad).galeria!.map((img: string, i: number) => (
                      <div
                        key={img}
                        className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
                      >
                        <Image
                          src={img}
                          alt={`Imagen ${i + 1} del taller`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* ═══ RELATED ITEMS ═══ */}
      <section className="bg-[#f8faf8] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-2 text-center text-2xl font-bold text-[#1b4332]">
              {isProyecto ? "Otros proyectos destacados" : "Más talleres"}
            </h2>
            <p className="mb-10 text-center text-gray-600">
              Explorá más propuestas de actividades lúdicas
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(isProyecto
              ? actividadesLudicasContent.proyectos.filter((p) => p.slug !== slug).slice(0, 3)
              : actividadesLudicasContent.catalogo.filter((t) => t.slug !== slug).slice(0, 3)
            ).map((related, idx) => (
              <ScrollReveal key={related.slug} delay={idx * 100}>
                <Link
                  href={`/actividades-ludicas/${related.slug}`}
                  className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={related.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[#1b4332] group-hover:text-[#2d6a4f] transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
