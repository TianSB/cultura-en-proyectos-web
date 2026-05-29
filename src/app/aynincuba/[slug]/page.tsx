import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { aynincubaContent } from "@/lib/data";

export async function generateStaticParams() {
  return aynincubaContent.programas.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const programa = aynincubaContent.programas.find((p) => p.slug === slug);
  return {
    title: programa?.title ?? "Programa AynIncuba",
  };
}

export default async function AynincubaProgramaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programa = aynincubaContent.programas.find((p) => p.slug === slug);

  if (!programa) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Programa no encontrado</h1>
        <Link
          href="/aynincuba"
          className="mt-4 inline-block text-[#2d6a4f] hover:underline"
        >
          Volver a AynIncuba
        </Link>
      </div>
    );
  }

  const related = aynincubaContent.programas
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
              href="/aynincuba"
              className="mb-6 inline-flex items-center text-sm text-[#d8f3dc] hover:text-white transition-colors"
            >
              <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Volver a AynIncuba
            </Link>
            <div>
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-[#d8f3dc] backdrop-blur-sm">
                Programa AynIncuba
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
              </div>
            </ScrollReveal>
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
                Explorá más programas de AynIncuba
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, idx) => (
                <ScrollReveal key={p.slug} delay={idx * 100}>
                  <Link
                    href={`/aynincuba/${p.slug}`}
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
