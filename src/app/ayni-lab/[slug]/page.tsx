import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import VideoEmbed from "@/components/VideoEmbed";
import { ayniLabContent } from "@/lib/data";

export async function generateStaticParams() {
  return ayniLabContent.talleres.map((taller) => ({
    slug: taller.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const taller = ayniLabContent.talleres.find((t) => t.slug === slug);
  return {
    title: taller?.title ?? "Taller | Ayni Lab",
    description: taller?.description,
    openGraph: {
      title: taller?.title ?? "Taller",
      description: taller?.description,
      images: taller?.image ? [{ url: taller.image }] : [],
    },
  };
}

// Map taller slugs to their subdirectory gallery images (relative to /images/ayni-lab/)
const galleryImages: Record<string, string[]> = {
  "grabado-no-toxico": [
    "grabado/destacada.webp",
    "grabado/obra.webp",
    "grabado/0.webp",
    "grabado/no-toxico-1.webp",
    "grabado/nt5.webp",
    "grabado/nt6.webp",
    "grabado/1.webp",
  ],
  "encuentro-aynilab-juegos": ["encuentro/encuentro.webp", "encuentro/slide.webp"],
  "taller-cerveza-artesanal": [
    "cerveza/destacada.webp",
    "cerveza/yatasto.webp",
    "cerveza/facebook-1.webp",
    "cerveza/facebook-2.webp",
    "cerveza/facebook-3.webp",
  ],
  "taller-escultura-chocolate": [
    "chocolate/escultura.webp",
    "chocolate/escultura-alt.webp",
    "chocolate/dragon.webp",
    "chocolate/dsc_3773.webp",
    "chocolate/en-proceso.webp",
    "chocolate/mono-caraya.webp",
    "chocolate/mono-caraya-alt.webp",
  ],
};

function TallerGallery({ slug }: { slug: string }) {
  const images = galleryImages[slug];
  if (!images || images.length === 0) return null;

  return (
    <ScrollReveal>
      <div className="mx-auto mb-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-[#1b4332]">Galería</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={img}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={`/images/ayni-lab/${img}`}
                alt={`Imagen ${i + 1} del taller`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default async function TallerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const taller = ayniLabContent.talleres.find((t) => t.slug === slug);

  if (!taller) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Taller no encontrado</h1>
        <Link
          href="/ayni-lab"
          className="mt-4 inline-block text-[#2d6a4f] hover:underline"
        >
          Volver a Ayni Lab
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* ═══ HERO with background image ═══ */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-32">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={taller.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081c15] via-[#081c15]/80 to-[#081c15]/40" />
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#52b788] to-transparent opacity-50" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/ayni-lab"
              className="mb-6 inline-flex items-center text-sm text-[#d8f3dc] hover:text-white transition-colors"
            >
              <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Volver a Ayni Lab
            </Link>
            <div>
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-[#d8f3dc] backdrop-blur-sm">
                {taller.category}
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {taller.title}
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
              {/* Featured image card */}
              <div className="relative mb-12 overflow-hidden rounded-2xl shadow-lg">
                <div className="relative aspect-[21/9]">
                  <Image
                    src={taller.image}
                    alt={taller.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 900px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            {/* Video embeds */}
            {taller.videos && (
              <VideoEmbed videos={taller.videos} title="Video del taller" />
            )}

            <ScrollReveal>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
                <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
                  {taller.description}
                </p>
                <div className="my-8 h-px bg-gradient-to-r from-[#52b788] via-[#d8f3dc] to-transparent" />
                <p className="leading-relaxed text-gray-600">
                  {taller.details}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      {galleryImages[slug] && galleryImages[slug].length > 0 && (
        <section className="bg-[#f8faf8] py-20">
          <TallerGallery slug={slug} />
        </section>
      )}

      {/* ═══ RELATED TALLERES ═══ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-2 text-center text-2xl font-bold text-[#1b4332]">
              Otros talleres
            </h2>
            <p className="mb-10 text-center text-gray-600">
              Explorá más propuestas de Ayni Lab
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ayniLabContent.talleres
              .filter((t) => t.slug !== slug)
              .slice(0, 3)
              .map((t) => (
                <ScrollReveal key={t.slug}>
                  <Link
                    href={`/ayni-lab/${t.slug}`}
                    className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={t.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#52b788]">
                        {t.category}
                      </span>
                      <h3 className="mt-1 font-semibold text-[#1b4332] group-hover:text-[#2d6a4f] transition-colors line-clamp-2">
                        {t.title}
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
