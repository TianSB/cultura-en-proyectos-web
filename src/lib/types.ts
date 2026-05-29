// ─── Tipos centralizados para el sitio ────────────────

export interface SiteConfig {
  name: string;
  description: string;
  email: string;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
    vimeo: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface NosotrosContent {
  title: string;
  intro: string;
  description: string;
  values: Value[];
}

// ─── AynIncuba ─────────────────────────────────────────

export interface Servicio {
  title: string;
  description: string;
}

export interface Nivel {
  nombre: string;
  descripcion: string;
}

export interface Curso {
  titulo: string;
  docente: string;
  descripcion: string;
}

export interface ProgramaBase {
  slug: string;
  title: string;
  image: string;
  description: string;
  details?: string;
  galeria?: string[];
  videos?: string[];
}

export interface AynincubaPrograma extends ProgramaBase {}

export interface AynincubaContent {
  title: string;
  subtitle: string;
  description: string;
  accreditation: string;
  networking: string;
  niveles: Nivel[];
  cursos: Curso[];
  programas: AynincubaPrograma[];
  servicios: Servicio[];
}

// ─── Ayni Lab ──────────────────────────────────────────

export interface StructureItem {
  title: string;
  description: string;
}

export interface Taller {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  details: string;
  videos?: string[];
  galeria?: string[];
}

export interface AyniLabContent {
  title: string;
  subtitle: string;
  description: string;
  extendedDescription: string;
  structure: StructureItem[];
  talleres: Taller[];
}

// ─── Actividades Lúdicas ──────────────────────────────

export interface CatalogoItem {
  slug: string;
  title: string;
  image: string;
  description: string;
  duracion?: string;
  edades?: string;
  materiales?: string[];
  galeria?: string[];
  videos?: string[];
}

export interface ProyectoActividad {
  slug: string;
  title: string;
  image: string;
  description: string;
  details?: string;
  galeria?: string[];
  videos?: string[];
  juegos?: string[];
  years?: Record<string, string[]>;
}

export interface ActividadesLudicasContent {
  title: string;
  subtitle: string;
  intro: string;
  description: string;
  catalogo: CatalogoItem[];
  proyectos: ProyectoActividad[];
}

// ─── Formación Profesional ────────────────────────────

export interface Eje {
  name: string;
  description: string;
}

export interface Especialista {
  name: string;
  bio: string;
}

export interface ProgramaFormacion {
  slug: string;
  title: string;
  image: string;
  description: string;
  details?: string;
  galeria?: string[];
  videos?: string[];
  ejes?: Eje[];
  especialistas?: Especialista[];
}

export interface FormacionProfesionalContent {
  title: string;
  subtitle: string;
  programas: ProgramaFormacion[];
}

// ─── Proyectos ─────────────────────────────────────────

export interface Proyecto {
  slug: string;
  title: string;
  image: string;
  description: string;
  galeria?: string[];
  videos?: string[];
}

export interface Categoria {
  titulo: string;
  proyectos: Proyecto[];
}

export interface ProyectosContent {
  title: string;
  subtitle: string;
  image: string;
  intro: string;
  categorias: Categoria[];
}

// ─── Hero ──────────────────────────────────────────────

export interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  href: string;
}
