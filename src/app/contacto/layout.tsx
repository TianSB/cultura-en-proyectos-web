import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Comunicate con Cultura en Proyectos. Por consultas, propuestas o cualquier información, completá nuestro formulario de contacto.",
  openGraph: {
    title: "Contacto | Cultura en Proyectos",
    description:
      "Comunicate con Cultura en Proyectos. Por consultas, propuestas o cualquier información, completá nuestro formulario de contacto.",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
