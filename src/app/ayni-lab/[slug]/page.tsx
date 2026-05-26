import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
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
    title: taller?.title ?? "Taller",
  };
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081c15] via-[#1b4332] to-[#2d6a4f] pt-32 pb-20">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-[#52b788] opacity-10 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {taller.title}
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-gray-700">
                {taller.description}
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-[#d8f3dc] to-transparent" />
              <p className="mt-6 leading-relaxed text-gray-600">
                {taller.details}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
