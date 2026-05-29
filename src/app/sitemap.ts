import type { MetadataRoute } from "next";
import {
  proyectosContent,
  actividadesLudicasContent,
  ayniLabContent,
  formacionProfesionalContent,
  aynincubaContent,
} from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.culturaenproyectos.org";

  // Rutas estáticas principales
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/nosotros", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/ayni-lab", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/actividades-ludicas", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/formacion-profesional", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/proyectos", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/aynincuba", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contacto", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  // Rutas dinámicas: talleres de Ayni Lab
  const ayniLabRoutes = ayniLabContent.talleres.map((t) => ({
    path: `/ayni-lab/${t.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  // Rutas dinámicas: catálogo de actividades lúdicas
  const catalogoRoutes = actividadesLudicasContent.catalogo.map((t) => ({
    path: `/actividades-ludicas/${t.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  // Rutas dinámicas: proyectos de actividades lúdicas
  const proyectosActividadesRoutes = actividadesLudicasContent.proyectos.map((p) => ({
    path: `/actividades-ludicas/${p.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  // Rutas dinámicas: programas de formación
  const formacionRoutes = formacionProfesionalContent.programas.map((p) => ({
    path: `/formacion-profesional/${p.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  // Rutas dinámicas: proyectos
  const proyectosRoutes = proyectosContent.categorias.flatMap((cat) =>
    cat.proyectos.map((p) => ({
      path: `/proyectos/${p.slug}`,
      priority: 0.7,
      changeFrequency: "yearly" as const,
    }))
  );

  // Rutas dinámicas: programas de AynIncuba
  const aynincubaRoutes = aynincubaContent.programas.map((p) => ({
    path: `/aynincuba/${p.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  const allRoutes = [
    ...staticRoutes,
    ...ayniLabRoutes,
    ...catalogoRoutes,
    ...proyectosActividadesRoutes,
    ...formacionRoutes,
    ...proyectosRoutes,
    ...aynincubaRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
