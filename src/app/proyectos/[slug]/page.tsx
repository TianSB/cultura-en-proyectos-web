import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import VideoEmbed from "@/components/VideoEmbed";
import { proyectosContent } from "@/lib/data";

export async function generateStaticParams() {
  return proyectosContent.categorias.flatMap((cat) =>
    cat.proyectos.map((p) => ({ slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  for (const cat of proyectosContent.categorias) {
    const proyecto = cat.proyectos.find((p) => p.slug === slug);
    if (proyecto) {
      return {
        title: proyecto.title,
        description: proyecto.description,
        openGraph: {
          title: proyecto.title,
          description: proyecto.description,
          images: proyecto.image ? [{ url: proyecto.image }] : [],
        },
      };
    }
  }
  return { title: "Proyecto | Cultura en Proyectos" };
}

function findProyecto(slug: string) {
  for (const cat of proyectosContent.categorias) {
    const proyecto = cat.proyectos.find((p) => p.slug === slug);
    if (proyecto) return { proyecto, categoria: cat.titulo };
  }
  return null;
}

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = findProyecto(slug);

  if (!found) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Proyecto no encontrado</h1>
        <Link
          href="/proyectos"
          className="mt-4 inline-block text-[#2d6a4f] hover:underline"
        >
          Volver a Proyectos
        </Link>
      </div>
    );
  }

  const { proyecto, categoria } = found;

  // Build related projects from the same category (excluding current)
  const related = proyectosContent.categorias
    .flatMap((cat) => cat.proyectos)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-32">
        <div className="absolute inset-0">
          <Image
            src={proyecto.image}
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
              href="/proyectos"
              className="mb-6 inline-flex items-center text-sm text-[#d8f3dc] hover:text-white transition-colors"
            >
              <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Volver a Proyectos
            </Link>
            <div>
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-[#d8f3dc] backdrop-blur-sm">
                {categoria}
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {proyecto.title}
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
                    src={proyecto.image}
                    alt={proyecto.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            {/* Video embeds */}
            {proyecto.videos && (
              <VideoEmbed videos={proyecto.videos} title="Video del proyecto" />
            )}

            <ScrollReveal>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
                <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
                  {proyecto.description}
                </p>
              </div>
            </ScrollReveal>

            {/* Gallery */}
            {proyecto.galeria && proyecto.galeria.length > 1 && (
              <ScrollReveal>
                <div className="mt-12">
                  <h2 className="mb-6 text-2xl font-bold text-[#1b4332]">Galería</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {proyecto.galeria.map((img: string, i: number) => (
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

      {/* ═══ RELATED PROJECTS ═══ */}
      <section className="bg-[#f8faf8] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-2 text-center text-2xl font-bold text-[#1b4332]">
              Otros proyectos
            </h2>
            <p className="mb-10 text-center text-gray-600">
              Explorá más proyectos de Cultura en Proyectos
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, idx) => (
              <ScrollReveal key={p.slug} delay={idx * 100}>
                <Link
                  href={`/proyectos/${p.slug}`}
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
    </>
  );
}
