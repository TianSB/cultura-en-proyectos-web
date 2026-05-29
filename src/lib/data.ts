// Datos centrales del sitio - extraídos de los documentos DOCX de migración web
// y enriquecidos con contenido real del sitio original (HTML)

import type {
  SiteConfig,
  NavItem,
  NosotrosContent,
  AynincubaContent,
  AyniLabContent,
  ActividadesLudicasContent,
  FormacionProfesionalContent,
  ProyectosContent,
  HeroSlide,
} from "./types";

export const siteConfig: SiteConfig = {
  name: "Cultura en Proyectos",
  description:
    "Desarrollo y gestión de proyectos culturales, artísticos, educativos y tecnológicos.",
  email: "info@culturaenproyectos.org",
  social: {
    facebook: "https://facebook.com/pages/Ayni-Lab/1566164470335594",
    twitter: "https://twitter.com/AyniLab",
    instagram: "https://instagram.com/aynilab/",
    youtube: "https://www.youtube.com/user/culturaenproyectos",
    vimeo: "https://vimeo.com/culturaenproyectos",
  },
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Ayni Lab", href: "/ayni-lab" },
  { label: "Actividades Lúdicas", href: "/actividades-ludicas" },
  { label: "Formación Profesional", href: "/formacion-profesional" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "AynIncuba", href: "/aynincuba" },
  { label: "Contacto", href: "/contacto" },
];

// ─── NOSOTROS ─────────────────────────────────────────

export const nosotrosContent: NosotrosContent = {
  title: "Nosotros",
  intro:
    "Cultura en proyectos es una fundación argentina que desarrolla y gestiona proyectos culturales, artísticos, educativos y tecnológicos, con especial acento en la inclusión y la sustentabilidad ambiental. Está conformada por un grupo transdisciplinar de profesionales de la cultura, el diseño y las ciencias que trabaja de manera colectiva en cada proyecto.",
  description:
    "Trabajamos colaborativamente con organismos gubernamentales, instituciones educativas, organizaciones de la sociedad civil y comunidades, generando espacios de creación, formación e intercambio que promueven el desarrollo sostenible y la transformación social a través del arte, la cultura y la tecnología.",
  values: [
    {
      title: "Transdisciplinariedad",
      description:
        "Integramos saberes de la cultura, el diseño, las ciencias y la tecnología para abordar cada proyecto desde múltiples perspectivas.",
    },
    {
      title: "Inclusión",
      description:
        "Diseñamos proyectos accesibles que contemplan la diversidad, incluyendo materiales en braille, diseño universal y participación comunitaria.",
    },
    {
      title: "Sustentabilidad",
      description:
        "Promovemos la reutilización creativa de materiales y la conciencia ambiental en todas nuestras actividades.",
    },
    {
      title: "Trabajo colaborativo",
      description:
        "Creemos en la fuerza del colectivo: cada proyecto se construye en diálogo con artistas, educadores, científicos y comunidades.",
    },
  ],
};

// ─── AYNI INCUBA ──────────────────────────────────────

export const aynincubaContent: AynincubaContent = {
  title: "AynIncuba",
  subtitle: "Programa anual de acompañamiento a proyectos creativos y emprendedores",
  description:
    "AynIncuba es la incubadora de proyectos culturales y creativos de Cultura en Proyectos. Ofrece instancias de networking, formación, mentorías y niveles específicos de incubación para emprendedores del sector cultural.",
  accreditation:
    "AynIncuba está acreditada como Incubadora ante la Subsecretaría de Emprendedores, perteneciente al Ministerio de Producción de la Nación bajo el nº de Registro nº 00466.",
  networking:
    "Espacio de diálogo entre los asistentes y un panel con emprendedores de gran trayectoria junto a actores relevantes del ecosistema creativo, articulados en mesas de trabajo, cuentan sus experiencias en el desarrollo de sus emprendimientos.",

  niveles: [
    {
      nombre: "Etapa idea-proyecto",
      descripcion:
        "Para emprendimientos o proyectos creativos autogestivos en etapa idea-proyecto. Se trabaja con un consultor para ajustar el proyecto, relevar las competencias del equipo y proveer las herramientas necesarias para el lanzamiento. Duración: 6 encuentros de 2 horas cada uno, con frecuencia quincenal (flexible).",
    },
    {
      nombre: "En marcha",
      descripcion:
        "Para emprendimientos o proyectos autogestivos en marcha. Se trabaja con un consultor sobre problemas críticos que constituyen obstáculos para el crecimiento. Los encuentros combinan aspectos prácticos y operativos con lineamientos estratégicos. Duración: 1 encuentro cada 4 meses de 2 horas cada uno.",
    },
  ],
  cursos: [
    {
      titulo: "Cómo hacer un plan de negocios innovador",
      docente: "Adrián Lebendiker",
      descripcion:
        "Planificación estratégica para tu emprendimiento cultural/creativo.",
    },
    {
      titulo: "Introducción al Marketing Digital",
      docente: "Agustina Sánchez",
      descripcion:
        "Herramientas y prácticas de mercado para impulsar tu emprendimiento creativo.",
    },
    {
      titulo: "Financiamiento para proyectos culturales y creativos",
      docente: "Clara Miravalle",
      descripcion:
        "En busca del financiamiento para concretar tu proyecto.",
    },
  ],
  programas: [
    {
      slug: "programa-anual-acompanamiento",
      title: "Programa Anual de Acompañamiento",
      image: "/images/aynincuba/proyectos.webp",
      description:
        "Programa integral de acompañamiento dirigido a emprendedores culturales, creativos y autogestivos que quieran concretar, potenciar o impulsar sus proyectos.",
      details:
        "Incluye 4 encuentros presenciales o virtuales de consultoría individual con frecuencia quincenal, 2 encuentros anuales entre emprendedores, vinculación con actores claves del ecosistema creativo y mentorías personalizadas. Se trabaja con un consultor para ajustar el proyecto, relevar las competencias del equipo y proveer las herramientas necesarias para el lanzamiento o crecimiento.",
    },
    {
      slug: "premica-aynincuba",
      title: "PreMICA",
      image: "/images/formacion/premica-proyectos.webp",
      description:
        "Formación y profesionalización para emprendedores participantes del Mercado de Industrias Culturales Argentinas (MICA).",
      details:
        "AynIncuba, a través de sus especialistas, ofrece capacitación, profesionalización y tutoría para emprendedores que participan del MICA, el mercado más importante de industrias culturales del país. El programa brinda herramientas de gestión, producción y comunicación para potenciar sus proyectos.",
    },
    {
      slug: "espacio-aceleracion-aynincuba",
      title: "Espacio de Aceleración de Emprendimientos Creativos",
      image: "/images/formacion/espacio-aceleracion.webp",
      description:
        "Programa intensivo de 14 semanas para potenciar emprendimientos creativos, organizado con el Ministerio de Gestión Cultural de la Ciudad de Buenos Aires.",
      details:
        "El programa contó con la participación de especialistas como Adrián Lebendiker e incluyó una Jornada de Networking presencial. Orientado a potenciar emprendimientos creativos a través de formación intensiva, mentorías y vinculación con actores clave del ecosistema.",
    },
  ],
  servicios: [
    {
      title: "Networking",
      description:
        "Conexión con una red de emprendedores, mentores e inversores del sector cultural y creativo para potenciar tus proyectos. Encuentros entre emprendedores, con instituciones de apoyo, proveedores y entidades de financiamiento.",
    },
    {
      title: "Capacitaciones",
      description:
        "Encuentros, workshops, cursos virtuales y presenciales con más de 10 años de experiencia en la capacitación a emprendedores creativos y gestores culturales de toda Latinoamérica.",
    },
    {
      title: "Tutoría y Mentoría",
      description:
        "Acompañamiento personalizado con un consultor especializado (tutor) o con un emprendedor experimentado (mentor) que ha logrado desarrollar con éxito su proyecto. Luego de un formulario de diagnóstico, se propone un plan de trabajo y presupuesto.",
    },
    {
      title: "Incubación",
      description:
        "Niveles específicos de incubación: desde etapa idea-proyecto con 6 encuentros quincenales, hasta programas de desarrollo para emprendimientos en marcha con encuentros estratégicos cada 4 meses.",
    },
  ],
};

// ─── AYNI LAB ─────────────────────────────────────────

export const ayniLabContent: AyniLabContent = {
  title: "Ayni Lab",
  subtitle: "Espacio de trabajo multidisciplinario",
  description:
    "Ayni Lab es un espacio de trabajo multidisciplinario concebido para investigar y experimentar con el arte y la tecnología. Apostamos a la formación en pos del desarrollo sostenible de proyectos culturales con especial acento en la reutilización creativa de materiales y el trabajo colaborativo.",
  extendedDescription:
    "Es un ámbito para que creativos, diseñadores, gestores culturales, ingenieros y arquitectos materialicen sus ideas y puedan profundizar en el uso de herramientas digitales y nuevas tecnologías.",
  structure: [
    {
      title: "Laboratorio",
      description:
        "Ámbito de experimentación, desarrollo y producción de proyectos.",
    },
    {
      title: "Talleres",
      description: "De profesionalización y de experimentación.",
    },
    {
      title: "Muestras y encuentros",
      description: "Para compartir proyectos con la comunidad.",
    },
    {
      title: "Residencias",
      description:
        "Para experimentar y producir apropiándose de las herramientas y recursos disponibles.",
    },
  ],
  talleres: [
    {
      slug: "olni",
      title: "Taller O.L.N.I. — Objeto Luminoso No Identificado",
      category: "Talleres",
      image: "/images/ayni-lab/encuentro.webp",
      description:
        "En el marco del proyecto Pasos discretos, en conjunto con Espacio Nixso y Espacio Pla, se desarrolló el taller OLNI: Objeto Luminoso No Identificado. Dirigido a chicos y chicas de 6 a 12 años, consistió en la elaboración de un universo de objetos luminosos a partir del ensamble y modificación de objetos de uso cotidiano y circuitos electrónicos.",
      details:
        "Durante la experiencia se acercaron principios de la electrónica junto con conceptos de reutilización creativa. Al cerrar el taller, los objetos luminosos se unieron colectivamente formando un escenario del espacio exterior, encendidos por una batería con fuente renovable de energía. Cada participante se llevó su objeto lumínico a casa.",
    },
    {
      slug: "grabado-no-toxico",
      title:
        "Taller de Grabado no tóxico | Graciela Buratti — Espacio Memoria y DDHH",
      category: "Talleres",
      image: "/images/ayni-lab/no-toxico.webp",
      description:
        "En el marco del proyecto Ideas que traman, AyniLab produjo el taller de Grabado, a cargo de la grabadora Graciela Buratti. La propuesta, dirigida a estudiantes de cuarto año del secundario de la Escuela de Artes Visuales Rogelio Yrurtia, se centró en la técnica del colagraph y la punta seca, empleando materiales y químicos no tóxicos.",
      details:
        "La actividad se realizó en el Espacio Memoria y Derechos Humanos [Ex-ESMA] en mayo de 2017.",
      videos: ["https://www.youtube.com/embed/yL80OAt6ixk"],
    },
    {
      slug: "arte-callejero",
      title:
        "Taller de Arte Callejero | GAC — Espacio Memoria y DDHH",
      category: "Talleres",
      image: "/images/ayni-lab/slide.webp",
      description:
        "En el marco del proyecto Ideas que traman, se produjo un taller de arte callejero e intervención urbana para estudiantes de nivel secundario de la Escuela de Artes Visuales Rogelio Yrurtia.",
      details:
        "El taller estuvo a cargo del GAC (Grupo de Arte Callejero) y se desarrolló en el Espacio Memoria y Derechos Humanos [Ex ESMA] en mayo de 2017.",
    },
    {
      slug: "fotografia-estenopeica",
      title:
        "Taller de Fotografía Estenopeica — Espacio Memoria y DDHH",
      category: "Talleres",
      image: "/images/ayni-lab/encuentro.webp",
      description:
        "En mayo de 2017, en el marco de Ideas que traman, se llevó a cabo un taller de fotografía estenopeica para estudiantes de la Escuela de Artes Visuales Rogelio Yrurtia.",
      details:
        "Los participantes recorrieron el Espacio Memoria y Derechos Humanos con cámaras construidas a partir de cajas y registraron el entorno. Las fotografías se revelaron en el laboratorio móvil de fotografía estenopeica desarrollado en AyniLab.",
    },
    {
      slug: "bordando-en-el-parque",
      title:
        "Bordando en el parque — Casona de los Olivera, Parque Avellaneda",
      category: "Talleres",
      image: "/images/ayni-lab/encuentro.webp",
      description:
        "En el marco de su residencia en el taller de AyniLab, Nilda Rosemberg dictó el taller Bordando en el parque, en la Casona de los Olivera, en el Parque Avellaneda de la Ciudad de Buenos Aires. Se compartieron técnicas básicas de bordado: punto yerba, punto cadena y variantes, punto relleno y punto cruz. El taller fue abierto a todo público.",
      details:
        "Archivo Broderie: catálogo abierto al registro fotográfico y ficha informativa de piezas y objetos relacionados con el bordado y la costura que traen los visitantes.",
    },
    {
      slug: "fase-8",
      title: "AyniLab en FASE 8 — Centro Cultural Recoleta",
      category: "Muestras y encuentros",
      image: "/images/ayni-lab/slide.webp",
      description:
        "Del 29 de noviembre al 18 de diciembre de 2016 se realizó en el Centro Cultural Recoleta la octava edición de FASE, encuentro de experimentación, reflexión, crítica y promoción de las artes visuales, la ciencia y la tecnología.",
      details:
        "Por segundo año consecutivo AyniLab formó parte del encuentro, acompañando a los artistas Jason Lee (Taiwán) y Leo Núñez (Argentina). Jason Lee presentó Exception Scene II: obra interactiva que combina mapping de posición con origami mediante un dispositivo kinect. Leo Núñez presentó Pasos Discretos en el Patio de los Tilos: red de autómatas celulares lumínicos alimentados con paneles fotovoltaicos móviles que responden al movimiento de los visitantes mediante sensores.",
    },
    {
      slug: "encuentro-aynilab-juegos",
      title: "Encuentro AyniLab: juegos y juguetes",
      category: "Muestras y encuentros",
      image: "/images/ayni-lab/encuentro/encuentro.webp",
      description:
        "AyniLab organizó y produjo el Encuentro AyniLab, donde se presentaron juegos, prototipos, ensayos, notas y registros desarrollados en el espacio de experimentación multidisciplinar.",
      details:
        "En el marco de este encuentro se presentaron los juegos y prototipos desarrollados en el laboratorio, así como ensayos, notas y registros que documentan el proceso de creación colectiva.",
    },
    {
      slug: "taller-cerveza-artesanal",
      title: "Taller de cerveza artesanal",
      category: "Talleres",
      image: "/images/ayni-lab/cerveza/destacada.webp",
      description:
        "Cultura en proyectos desarrolló un taller de cerveza artesanal dictado por el maestro cervecero Ricardo Chucrallah. Los participantes tuvieron la experiencia de producir cerveza orgánica y artesanal.",
      details:
        "En la clase práctica los alumnos participaron del proceso aprendiendo y cuidando cada paso. Los cereales que forman parte de la preparación son la cebada, el lúpulo, la avena y el trigo. Los participantes aprendieron sobre el aprovechamiento del residuo orgánico conocido como mosto.",
    },
    {
      slug: "taller-escultura-chocolate",
      title: "Taller de escultura en chocolate — Rubén Darré",
      category: "Talleres",
      image: "/images/ayni-lab/chocolate/escultura.webp",
      description:
        "AynIncuba acompañó el Taller de escultura en chocolate de Rubén Darré. Con técnicas utilizadas en la escultura y las artes visuales, este taller explora la versatilidad del chocolate como material escultórico.",
      details:
        "Rubén Darré participa como escultor de hielo y en chocolate en la Coppa Del Mondo de la Gellatería en Rimini, Italia. El taller combina técnicas escultóricas tradicionales con la manipulación del chocolate como medio artístico.",
    },
  ],
};

// ─── ACTIVIDADES LÚDICAS ──────────────────────────────

export const actividadesLudicasContent: ActividadesLudicasContent = {
  title: "Actividades Lúdicas",
  subtitle: "Talleres de Reutilización Creativa",
  intro:
    "Cultura en proyectos desarrolla y produce talleres creativos ideados para la reutilización de materiales en desuso, a través del arte y la tecnología, con actividades para toda la familia a cargo de artistas y especialistas.",
  description:
    "Estos talleres itinerantes promueven instancias de encuentro ciudadanas donde poner en juego la creatividad. Crean ámbitos en los que la educación ambiental sobre residuos, reutilización y reciclaje es posible a través del juego y la participación activa.",
  catalogo: [
    {
      slug: "torres-de-desafio-vertical",
      title: "Torres de Desafío Vertical",
      image: "/images/actividades/torres-desafio.webp",
      description:
        "Mobiliario lúdico que combina ensamble, reutilización de materiales y juego colaborativo. Los participantes arman caminos verticales por donde cae una bolita metálica por gravedad.",
      duracion: "45–60 min",
      edades: "Desde 6 años",
      materiales: ["Madera reutilizada", "Bolitas metálicas", "Cuerda", "Piezas de ensamble"],
      galeria: ["/images/actividades/torres-1.webp"],
    },
    {
      slug: "cajas-de-musica",
      title: "Cajas de Música",
      image: "/images/actividades/acercarte.webp",
      description:
        "Instrumentos de gran tamaño realizados con caños de PVC, botellas de plástico infladas o alambres tensados.",
      duracion: "60 min",
      edades: "Desde 8 años",
      materiales: ["Caños de PVC", "Botellas de plástico", "Alambre", "Cintas adhesivas", "Elementos de percusión"],
    },
    {
      slug: "espacio-de-juegos",
      title: "Espacio de Juegos",
      image: "/images/actividades/acercarte.webp",
      description:
        "Ambiente integrado de mobiliario lúdico y juegos de ingenio. Combinación de juego y educación ambiental.",
      duracion: "Libre recorrido",
      edades: "Todas las edades",
      materiales: ["Madera", "Plástico reciclado", "Engranajes", "Piezas de encastre", "Telas"],
    },
    {
      slug: "taller-de-espirografo",
      title: "Taller de Espirógrafo",
      image: "/images/actividades/espirografo.webp",
      description:
        "Diseños colaborativos con engranajes y color en papeles reutilizados.",
      duracion: "45 min",
      edades: "Desde 5 años",
      materiales: ["Papel reutilizado", "Engranajes", "Marcadores", "Cintas", "Ruedas dentadas"],
      galeria: [
        "/images/actividades/espirografo.webp",
        "/images/actividades/espirografo-1.webp",
      ],
    },
    {
      slug: "orquesta-de-automatas",
      title: "Orquesta de Autómatas",
      image: "/images/actividades/acercarte.webp",
      description:
        "Máquinas creadas con partes reutilizadas para un concierto colectivo.",
      duracion: "60–75 min",
      edades: "Desde 8 años",
      materiales: ["Piezas metálicas", "Engranajes", "Motores", "Cables", "Maderas", "Elementos sonoros"],
    },
    {
      slug: "taller-de-titeres",
      title: "Taller de Títeres",
      image: "/images/actividades/acercarte.webp",
      description:
        "Reutilización de percha, telas, trapos, tuercas, hilo y tapones para títeres y marionetas.",
      duracion: "60 min",
      edades: "Desde 4 años",
      materiales: ["Perchas", "Telas y trapos", "Tuercas", "Hilo", "Tapones", "Botones"],
    },
    {
      slug: "taller-de-grabado",
      title: "Taller de Grabado",
      image: "/images/ayni-lab/no-toxico.webp",
      description:
        "Matrices de impresión con tetrabricks, radiografías y otros materiales reutilizados.",
      videos: ["https://www.youtube.com/embed/yL80OAt6ixk"],
      duracion: "75 min",
      edades: "Desde 10 años",
      materiales: ["Tetrabricks", "Radiografías", "Tinta no tóxica", "Rodillos", "Papel reciclado"],
      galeria: [
        "/images/ayni-lab/no-toxico.webp",
        "/images/actividades/grabado-1.webp",
        "/images/actividades/grabado-2.webp",
        "/images/actividades/grabado-3.webp",
        "/images/actividades/grabado-4.webp",
        "/images/actividades/grabado-5.webp",
        "/images/actividades/grabado-6.webp",
      ],
    },
    {
      slug: "motores-a-goma",
      title: "Motores a Goma",
      image: "/images/actividades/acercarte.webp",
      description:
        "Juguetes a motor con sorbetes, clips, remaches y palitos de helado.",
      duracion: "45 min",
      edades: "Desde 6 años",
      materiales: ["Sorbetes", "Clips", "Remaches", "Palitos de helado", "Gomas elásticas", "Tapitas"],
    },
    {
      slug: "taller-de-soldadura",
      title: "Taller de Soldadura",
      image: "/images/actividades/acercarte-tejedor.webp",
      description:
        "Reutilización de chatarra (tuercas, tornillos, clavos, chapas) para crear esculturas colaborativas. Apto desde 6 años.",
      duracion: "60 min",
      edades: "Desde 6 años",
      materiales: ["Tuercas", "Tornillos", "Clavos", "Chapas", "Alambre", "Piezas de chatarra"],
    },
    {
      slug: "fotografia-al-paso",
      title: "Fotografía al Paso",
      image: "/images/actividades/vuelta-verde.webp",
      description:
        "Laboratorio móvil de fotografía estenopeica. Cámaras hechas con sachets de leche, fotogramas con objetos cotidianos.",
      duracion: "60 min",
      edades: "Desde 8 años",
      materiales: ["Sachets de leche", "Papel fotosensible", "Objetos cotidianos", "Cinta adhesiva", "Tijeras"],
    },
    {
      slug: "accesorios-textiles",
      title: "Accesorios Textiles",
      image: "/images/actividades/acercarte-rojas.webp",
      description:
        "Prendas personales con telas recuperadas del desecho textil. Técnicas de anudado, trenzado y plegado.",
      duracion: "60 min",
      edades: "Desde 8 años",
      materiales: ["Telas recuperadas", "Hilo", "Tijeras", "Cintas", "Broches", "Botones"],
    },
    {
      slug: "taller-de-plastico",
      title: "Taller de Plástico",
      image: "/images/actividades/acercarte.webp",
      description:
        "Juguetes con envases plásticos reutilizados.",
      duracion: "45 min",
      edades: "Desde 5 años",
      materiales: ["Envases plásticos", "Tapitas", "Cintas", "Tijeras", "Pegamento"],
    },
    {
      slug: "tacho-a-la-vista",
      title: "Tacho a la Vista",
      image: "/images/actividades/vuelta-verde.webp",
      description:
        "Juegos con latas, plástico, cartón, corcho, madera, tela y papel.",
      duracion: "45–60 min",
      edades: "Desde 4 años",
      materiales: ["Latas", "Plástico", "Cartón", "Corcho", "Madera", "Tela", "Papel"],
    },
    {
      slug: "taller-textil",
      title: "Taller Textil",
      image: "/images/actividades/acercarte.webp",
      description: "Morrales y carteras con telas en desuso.",
      duracion: "75 min",
      edades: "Desde 10 años",
      materiales: ["Telas en desuso", "Hilo", "Agujas", "Tijeras", "Cierres", "Botones"],
    },
    {
      slug: "fabrica-de-papel",
      title: "Fábrica de Papel",
      image: "/images/actividades/acercarte-rojas.webp",
      description:
        "Reciclaje de papel con pulpa y semillas. Papel plantable.",
      duracion: "60 min",
      edades: "Desde 6 años",
      materiales: ["Papel usado", "Agua", "Semillas", "Moldes", "Esponjas", "Tela"],
    },
    {
      slug: "espacio-escenico",
      title: "Espacio Escénico",
      image: "/images/actividades/acercarte.webp",
      description:
        "Teatro de apropiación del espacio público con objetos reutilizados.",
      duracion: "60 min",
      edades: "Desde 6 años",
      materiales: ["Objetos reutilizados", "Telas", "Cartón", "Pintura", "Elementos escénicos"],
    },
    {
      slug: "taller-ilusiones-opticas",
      title: "Taller de Ilusiones Ópticas / Rotoscopio",
      image: "/images/actividades/espirografo.webp",
      description:
        "Elaboración de rotoscopio con cartón, papel, hilo y marcadores.",
      duracion: "45 min",
      edades: "Desde 7 años",
      materiales: ["Cartón", "Papel", "Hilo", "Marcadores", "Tijeras", "Compás"],
    },
  ],
  proyectos: [
    {
      slug: "talleres-reutilizacion-creativa-acercarte",
      title: "Talleres de Reutilización Creativa en AcercArte",
      image: "/images/actividades/acercarte.webp",
      description:
        "AcercArte es una iniciativa del Ministerio de Gestión Cultural de la Provincia de Buenos Aires que lleva de manera gratuita propuestas culturales y artísticas a los municipios bonaerenses. Con más de 70 municipios recorridos, Cultura en proyectos forma parte de esta experiencia itinerante con los Talleres de Reutilización Creativa.",
      galeria: [
        "/images/actividades/acercarte-1.webp",
        "/images/actividades/acercarte-2.webp",
      ],
      details:
        "El grabado, la música y el ensamble forman parte de las actividades que permiten reutilizar telas, plástico, papel, tetrabricks y convertirlos en pinturas, cajas musicales y títeres, entre otras creaciones.",
      years: {
        "2019": [
          "Mercedes", "San Antonio de Areco", "Villarino", "Mar Chiquita",
          "Miramar", "Pinamar", "Mar del Plata", "Tandil", "Olavarría",
          "Campana", "San Nicolás",
        ],
        "2018": [
          "Mar del Plata", "Tigre", "Villa Gesell", "Monte Hermoso",
          "Berazategui", "Mar de Ajó", "Malvinas Argentinas", "Guaminí",
          "Exaltación de la Cruz", "Cañuelas", "Carlos Casares", "Salto",
          "Chascomús",
        ],
        "2017": [
          "Mar del Plata", "Pinamar", "Brandsen", "Mar Chiquita", "Merlo",
          "Coronel Rosales", "San Fernando", "Miramar", "Tres de Febrero",
          "Ezeiza", "Rauch", "Adolfo Alsina", "José C. Paz",
          "Coronel Dorrego", "Carlos Tejedor", "Laprida", "General Alvear",
          "Junín", "Carmen de Areco", "San Cayetano", "Rojas", "Lobería",
          "Colón", "San Pedro", "Coronel Pringles", "Lezama",
          "General Arenales", "General Rodríguez", "General La Madrid",
          "Florentino Ameghino", "Suipacha", "Maipú", "Coronel Suárez",
          "Saladillo", "Tornquist", "Castelli", "La Plata", "Chivilcoy",
          "San Isidro", "General Lavalle", "Pellegrini", "General Viamonte",
          "Tres Arroyos", "General Belgrano", "General Guido", "Salliqueló",
          "Ayacucho", "Rivadavia",
        ],
        "2016": [
          "Campana", "Tandil", "Bahía Blanca", "Lanús", "Olavarría",
          "Nueve de Julio", "Lomas de Zamora", "Bragado", "Lobos",
          "Almirante Brown", "Baradero", "Lincoln", "Vicente López",
          "Chacabuco", "Trenque Lauquen", "San Martín", "Pergamino",
          "Villegas", "Morón", "Carmen de Patagones", "Saavedra (Pigüé)",
          "Pilar", "Las Flores", "Gonzáles Chaves", "Berisso", "Necochea",
          "Dolores", "Florencio Varela", "Arrecifes", "Puán", "Quilmes",
          "Azul", "25 de Mayo", "San Vicente", "Bolívar", "Magdalena",
          "San Miguel", "Luján", "Madariaga", "Balcarce",
        ],
      },
    },
    {
      slug: "espacio-experimentacion-fernandez-blanco",
      title:
        "Espacio de Experimentación Lúdico y Creativo — Museo Fernández Blanco",
      image: "/images/actividades/espirografo.webp",
      galeria: [
        "/images/actividades/fblanco-1.webp",
        "/images/actividades/fblanco-2.webp",
        "/images/actividades/fblanco-3.webp",
        "/images/actividades/fblanco-4.webp",
        "/images/actividades/fblanco-5.webp",
        "/images/actividades/fblanco-6.webp",
        "/images/actividades/fblanco-7.webp",
      ],
      description:
        "En el marco del Programa Narrativas Cruzadas (Eje Activaciones-Innovación de Museos de Buenos Aires), AyniLab estuvo presente en una jornada de juego y actividades en el Museo Fernández Blanco, con un espacio compuesto por mobiliario lúdico y desarrollos del lab.",
      details:
        "Los asistentes al museo pudieron experimentar con la creación de dibujos colaborativos con los espirógrafos, el diseño de recorridos espaciales con las torres de desafío vertical, y otros dispositivos de ingenio y creatividad creados bajo la premisa de la reutilización de materiales.",
      juegos: [
        "Espirógrafos: mesa de dibujo grupal con mecanismo de ruedas dentadas.",
        "Torres de desafío vertical: estructura de cuatro paredes con piezas de madera reutilizadas para construir recorridos por los que cae una esfera metálica.",
        "Pirámide humana: hombrecitos de madera para apilar en infinitas combinaciones.",
        "Ciudad infinita: placas de madera encastrables con ventanas y techos para construir ciudades continuas.",
      ],
    },
    {
      slug: "torres-desafio-vertical-proyecto",
      title: "Torres de Desafío Vertical",
      image: "/images/actividades/torres-desafio.webp",
      galeria: ["/images/actividades/torres-1.webp"],
      description:
        "En el marco del programa El Estado en tu Barrio y del festival AcercArte se puso a disposición la Torre de Recorridos Espaciales, mobiliario lúdico que combina la lógica del ensamble, la reutilización de materiales en desuso y el juego colaborativo.",
      details:
        "Los participantes eligen las combinaciones posibles de los elementos para armar un camino en el que circula una bola metálica movilizada por la fuerza de gravedad. El clásico 'juego de armar' renovado por sus dimensiones, que invita a interacción corporal y colaboración colectiva. Este mobiliario lúdico se desarrolló en AyniLab.",
    },
    {
      slug: "reutilizacion-creativa-estado-barrio",
      title: "Reutilización Creativa en El Estado en tu Barrio",
      image: "/images/actividades/estado-barrio.webp",
      description:
        "Convocados por el Ministerio de Gestión Cultural de la Provincia de Buenos Aires, la fundación se sumó a El Estado en tu Barrio, programa del Ministerio de Desarrollo Social que permite a las comunidades realizar trámites de manera directa y cercana a sus hogares.",
      details:
        "Cultura en proyectos puso a disposición una zona de descanso y esparcimiento compuesta por la Torre de Desafío Vertical y el Espirógrafo, dos juegos colaborativos que promueven la búsqueda de soluciones conjuntas, la diversión y el asombro.",
    },
    {
      slug: "reutilizacion-creativa-vuelta-verde",
      title: "Reutilización Creativa en la Feria Vuelta Verde",
      image: "/images/actividades/vuelta-verde.webp",
      galeria: [
        "/images/actividades/vuelta-verde-2.webp",
        "/images/actividades/vuelta-verde-3.webp",
        "/images/actividades/vuelta-verde-4.webp",
        "/images/actividades/vuelta-verde-5.webp",
        "/images/actividades/vuelta-verde-6.webp",
        "/images/actividades/vuelta-verde-7.webp",
        "/images/actividades/vuelta-verde-8.webp",
        "/images/actividades/vuelta-verde-mapa.webp",
      ],
      description:
        "La Feria Vuelta Verde se realizó en diferentes parques de la ciudad desde mayo de 2014 hasta noviembre de 2015. A través de diferentes actividades, este encuentro de reutilización creativa permitió experimentar con técnicas como fotografía estenopeica, fabricación de papel y diversos talleres de reutilización.",
      details:
        "Las sucesivas ediciones de Vuelta Verde fomentaron la vitalidad de los espacios públicos, promoviendo la educación ambiental sobre residuos, reutilización y reciclaje a través del juego y la participación activa. Vuelta Verde fue impulsada por el Ministerio de Ambiente y Espacio Público de la Ciudad de Buenos Aires.",
      videos: [
        "https://player.vimeo.com/video/98362200",
        "https://player.vimeo.com/video/101739686",
        "https://www.youtube.com/embed/x7W2WqS64f8",
      ],
    },
    {
      slug: "espacio-juegos-villa-ventana",
      title: "Espacio de Juegos en Villa Ventana y Sierra de la Ventana",
      image: "/images/actividades/acercarte.webp",
      description:
        "En el verano de 2018, durante enero y febrero, Cultura en proyectos llevó su Espacio de juegos, los Espirógrafos y la Torre de Desafío Vertical a Villa Ventana y Sierra de la Ventana, Provincia de Buenos Aires.",
      details:
        "Invitados por la Biblioteca Popular Macedonio Fernández, participaron de la Fiesta de la Golondrina y de una jornada de biblioteca de juegos y merienda saludable. Las tres actividades fueron gratuitas y abiertas a toda la comunidad.",
    },
    {
      slug: "talleres-reutilizacion-mercedes",
      title: "Talleres de Reutilización Creativa en Mercedes",
      image: "/images/actividades/vuelta-verde.webp",
      galeria: [
        "/images/actividades/mercedes-1.webp",
        "/images/actividades/mercedes-2.webp",
        "/images/actividades/mercedes-3.webp",
        "/images/actividades/mercedes-4.webp",
        "/images/actividades/mercedes-5.webp",
      ],
      description:
        "Cultura en proyectos llevó sus talleres de reutilización creativa a la ciudad de Mercedes, Provincia de Buenos Aires, ofreciendo actividades lúdicas y educativas para toda la familia.",
      details:
        "Los talleres incluyeron actividades de grabado, música y ensamble, permitiendo reutilizar telas, plástico, papel y tetrabricks para convertirlos en pinturas, cajas musicales y títeres, entre otras creaciones.",
    },
  ],
};

// ─── FORMACIÓN PROFESIONAL ────────────────────────────

export const formacionProfesionalContent: FormacionProfesionalContent = {
  title: "Formación Profesional",
  subtitle: "Capacitación y desarrollo para el sector cultural",
  programas: [
    {
      slug: "i-jornadas-creativas",
      title: "I Jornadas Creativas Córdoba – Buenos Aires",
      image: "/images/formacion/jornadas-1.webp",
      description:
        "Seminario y expo orientados a la profesionalización de emprendedores creativos y organizaciones culturales, favoreciendo el intercambio de experiencias, la colaboración y el trabajo en red.",
      details:
        "Se llevaron a cabo en el Área de Gestión Cultural FCE UNC (Córdoba) y en el Espacio Fundación Telefónica (Buenos Aires). Se desarrolló el seminario 'Gestión de Emprendimientos Creativos y Organizaciones Culturales' y la Expo Emprendimientos Creativos.",
      galeria: [
        "/images/formacion/gallery/jornadas-1-001.webp",
        "/images/formacion/gallery/jornadas-1-003.webp",
      ],
    },
    {
      slug: "ii-jornadas-creativas",
      title: "II Jornadas Creativas Córdoba – Buenos Aires",
      image: "/images/formacion/jornadas-2.webp",
      description:
        "La segunda edición se desarrolló los días 10, 11 y 12 de octubre en Córdoba y Buenos Aires, con los seminarios 'Innovación estratégica y comunicación en organizaciones culturales/creativas' y 'Ciudades y experiencias creativas para una economía creativa', a cargo de Roberto Gómez de la Iglesia y Miren Martín Morato (c2+i).",
      videos: ["https://player.vimeo.com/video/96648456"],
      ejes: [
        {
          name: "Economía Creativa",
          description:
            "El seminario analizó estrategias de impulso creativo en ciudades y territorios, usando el caso de la transformación de Bilbao y el 'Efecto Guggenheim' para profundizar la relación entre marca-territorio, sectores creativos y economía creativa.",
        },
        {
          name: "Innovación Estratégica",
          description:
            "El seminario expuso herramientas para comprender las dinámicas de proyectos emprendedores y plantear innovación organizativa, tomando como caso Conexiones improbables.",
        },
      ],
      especialistas: [
        {
          name: "Roberto Gómez de la Iglesia",
          bio: "Creador y director de c2+i y Conexiones improbables. Fundador de Grupo Xabide. Director de Divergentes y Disonancias, plataformas de relación entre artistas y empresas para la innovación abierta.",
        },
        {
          name: "Miren Martín Morato",
          bio: "Lic. Ciencias de la Información (UPV), Master en Dirección de Marketing y Comunicación (UOC). Periodista de radio por más de 25 años. Responsable de Marketing y Comunicación de Conexiones improbables.",
        },
      ],
      galeria: [
        "/images/formacion/gallery/ii-jornadas-1.webp",
        "/images/formacion/gallery/ii-jornadas-2.webp",
        "/images/formacion/gallery/ii-jornadas-expo-1.webp",
        "/images/formacion/gallery/ii-jornadas-expo-2.webp",
        "/images/formacion/gallery/ii-jornadas-slide-1.webp",
        "/images/formacion/gallery/ii-jornadas-slide-2.webp",
        "/images/formacion/gallery/ii-jornadas-slide-3.webp",
        "/images/formacion/gallery/ii-jornadas-slide-4.webp",
        "/images/formacion/gallery/ii-jornadas-slide-5.webp",
      ],
    },
    {
      slug: "aynincuba-incubadora",
      title: "AynIncuba",
      image: "/images/aynincuba/proyectos.webp",
      description:
        "Incubadora de proyectos culturales y creativos que ofrece instancias de networking, formación, mentorías y niveles específicos de incubación para emprendedores del sector.",
      galeria: [
        "/images/formacion/gallery/aynincuba-4.webp",
        "/images/formacion/gallery/aynincuba-capa.webp",
        "/images/formacion/gallery/aynincuba-mahnos.webp",
        "/images/formacion/gallery/aynincuba-nmet222.webp",
      ],
    },
    {
      slug: "premica-formacion",
      title: "PreMICA",
      image: "/images/formacion/premica-proyectos.webp",
      description:
        "Programa de formación y profesionalización para emprendedores participantes del MICA (Mercado de Industrias Culturales Argentinas). AynIncuba, a través de sus especialistas, ofrece capacitación, profesionalización y tutoría.",
      galeria: [
        "/images/formacion/gallery/premica-Pre-Mica-Envio-1-102.webp",
        "/images/formacion/gallery/premica-Pre-Mica-Envio-1-103.webp",
        "/images/formacion/gallery/premica-Pre-Mica-Envio-1-113.webp",
        "/images/formacion/gallery/premica-Pre-Mica-Envio-2-207.webp",
        "/images/formacion/gallery/premica-Pre-Mica-Envio-2-213.webp",
        "/images/formacion/gallery/premica-Pre-Mica-Envio-2-218.webp",
      ],
    },
    {
      slug: "espacio-aceleracion-creativos",
      title: "Espacio de Aceleración de Emprendimientos Creativos",
      image: "/images/formacion/espacio-aceleracion.webp",
      description:
        "Programa de aceleración de 14 semanas organizado con el Ministerio de Gestión Cultural de la Ciudad de Buenos Aires, orientado a potenciar emprendimientos creativos. Con especialistas como Adrián Lebendiker, e incluyó una Jornada de Networking presencial.",
      galeria: [
        "/images/formacion/gallery/aceleracion-emprendedores.webp",
        "/images/formacion/gallery/aceleracion-destacada.webp",
      ],
    },
  ],
};

// ─── PROYECTOS ────────────────────────────────────────

export const proyectosContent: ProyectosContent = {
  title: "Proyectos",
  subtitle: "Red de Proyectos Creativos",
  image: "/images/proyectos/red-proyectos.webp",
  intro:
    "Una comunidad virtual para la visibilización e intercambio de conocimientos entre gestores culturales y creativos de todo el mundo.",
  categorias: [
    {
      titulo: "Proyectos Artísticos",
      proyectos: [
        {
          slug: "ideas-que-traman",
          title: "Ideas que traman",
          image: "/images/proyectos/ideas-que-traman.webp",
          description:
            "Proyecto de participación juvenil con el Patrimonio Cultural Inmaterial (PCI) en el Espacio Memoria y DDHH, que involucra talleres y creación colectiva de objetos. Se realizaron capacitaciones, talleres de arte callejero, grabado no tóxico y fotografía estenopeica, culminando en una muestra colectiva.",
          galeria: [
            "/images/proyectos/gallery/ideas-traman-helvetica.webp",
            "/images/proyectos/gallery/ideas-traman-pci.webp",
            "/images/proyectos/gallery/ideas-traman-cinti.webp",
            "/images/proyectos/gallery/ideas-traman-slider.webp",
          ],
        },
        {
      slug: "me-lo-llevo-a-la-tumba",
      title: "Me lo llevo a la tumba",
      image: "/images/proyectos/no-toxico-exp.webp",
      description:
        "Podcast que explora la temática del secreto desde distintas aristas. Disponible en Spotify, Apple Podcast y Google Podcast. Proyecto de CON, equipo de investigación, experimentación y exploración cultural, con apoyo de Mecenazgo." ,
      galeria: [
        "/images/proyectos/gallery/podcast-portada.webp",
        "/images/proyectos/gallery/podcast-episodio-1.webp",
        "/images/proyectos/gallery/podcast-episodio-3.webp",
        "/images/proyectos/gallery/podcast-episodio-4.webp",
        "/images/proyectos/gallery/podcast-episodio-5.webp",
        "/images/proyectos/gallery/podcast-episodio-6.webp",
        "/images/proyectos/gallery/podcast-episodio-7.webp",
        "/images/proyectos/gallery/podcast-episodio-8.webp",
        "/images/proyectos/gallery/podcast-episodio-9.webp",
        "/images/proyectos/gallery/podcast-episodio-10.webp",
      ],
        },
        {
          slug: "barda-del-desierto",
          title: "Barda del Desierto (5ª y 6ª edición)",
          image: "/images/proyectos/barda-desierto.webp",
          description:
            "Plataforma de residencias independiente con base en Contralmirante Cordero (Chubut), enfocada en arte, educación y artes visuales vinculadas al contexto. Artistas de distintas partes del mundo crean obras vinculadas a la historia y geografía local.",
        },
        {
          slug: "no-toxico-expo",
          title: "#NOTÓXICO",
          image: "/images/proyectos/no-toxico-exp.webp",
          description:
            "Exposición fotográfica de fotograbados en la FotoGalería de la Facultad de Ciencias Económicas de la UNC, Córdoba, que explora la memoria y las técnicas de grabado no tóxico.",
          galeria: [
            "/images/proyectos/gallery/no-toxico-0.webp",
            "/images/proyectos/gallery/no-toxico-1.webp",
            "/images/proyectos/gallery/no-toxico-9.webp",
            "/images/proyectos/gallery/no-toxico-destacada.webp",
            "/images/proyectos/gallery/no-toxico-flyer.webp",
            "/images/proyectos/gallery/no-toxico-nt5.webp",
            "/images/proyectos/gallery/no-toxico-nt6.webp",
          ],
        },
        {
          slug: "neruda",
          title: "Neruda",
          image: "/images/proyectos/cine-juvenil.webp",
          description:
            "Proyecto de postproducción (doblajes y efectos visuales) para la película dirigida por Pablo Larraín. La película narra el año en que Pablo Neruda vivió como fugitivo en Chile. Estrenada en Buenos Aires el 9 de febrero de 2016.",
        },
        {
          slug: "neural-tango",
          title: "NEURAL Tango",
          image: "/images/proyectos/neural.webp",
          description:
            "Proyecto de murales colaborativos en el Distrito de las Artes (La Boca, Buenos Aires), enfocado en la mejora del paisaje urbano y la identidad. Participaron artistas como Georgina Ciotti, Ice, Cabaio, Tekaz, eMePeCe, Pol Corona, Fio Silva y Stencil Land.",
          galeria: [
            "/images/proyectos/gallery/neural04.webp",
            "/images/proyectos/gallery/neural05.webp",
            "/images/proyectos/gallery/neural06.webp",
            "/images/proyectos/gallery/neural07.webp",
            "/images/proyectos/gallery/neural08.webp",
            "/images/proyectos/gallery/neural09.webp",
          ],
        },
        {
          slug: "distrito-audiovisual-tecnologico",
          title: "Distrito Audiovisual y Tecnológico",
          image: "/images/proyectos/distrito-audiovisual.webp",
          description:
            "Iniciativa de desarrollo cultural y productivo en el barrio de La Boca y Parque Patricios, promoviendo la concentración de empresas audiovisuales y tecnológicas, con murales temáticos realizados por artistas urbanos.",
          galeria: [
            "/images/proyectos/gallery/g-1.webp",
            "/images/proyectos/gallery/g-2.webp",
            "/images/proyectos/gallery/g-3.webp",
          ],
        },
        {
          slug: "consultorio-de-proyectos",
          title: "Consultorio de Proyectos",
          image: "/images/formacion/consultorio.webp",
          description:
            "Cultura en proyectos, en convenio con el Ministerio de Gestión Cultural de la Provincia de Buenos Aires, ofrece tutorías para emprendedores y gestores culturales. En sus dos ediciones ha contado con la participación de hasta 50 emprendimientos.",
        },
        {
          slug: "ciudad-de-barrios",
          title: "Ciudad de Barrios",
          image: "/images/proyectos/ciudad-barrios.webp",
          description:
            "Plataforma de Transferencia creada entre la Cátedra Arquitectura 2D, Red de Vecinos de San Vicente y Fundación Cultura en proyectos. Un grupo promotor de difusión de las cualidades de una Ciudad de Barrios.",
          galeria: [
            "/images/proyectos/gallery/ciudad-de-barrios_0022.webp",
            "/images/proyectos/gallery/ciudad-de-barrios_0032.webp",
            "/images/proyectos/gallery/ciudad-de-barrios_0042.webp",
            "/images/proyectos/gallery/ciudad-de-barrios_0062.webp",
            "/images/proyectos/gallery/ciudad-de-barrios_0072.webp",
          ],
        },
        {
          slug: "catedra-taller-a77",
          title: "Cátedra Taller A77 — FADU UBA",
          image: "/images/proyectos/catedra-a77.webp",
          description:
            "Desde 2020, colaboración con la Cátedra Taller a77 de la FADU UBA. Los cursos de Arquitectura 1 y 2 trabajan en el diseño y construcción de proyectos articulando con actores del espacio público de Tornquist.",
          galeria: [
            "/images/proyectos/gallery/catedra-a77-1.webp",
            "/images/proyectos/gallery/catedra-a77-2.webp",
            "/images/proyectos/gallery/catedra-a77-3.webp",
            "/images/proyectos/gallery/catedra-a77-5.webp",
            "/images/proyectos/gallery/catedra-a77-6.webp",
            "/images/proyectos/gallery/catedra-a77-7.webp",
          ],
        },
        {
          slug: "plataforma-innovacion-alimentos",
          title: "Plataforma de Innovación en Alimentos",
          image: "/images/proyectos/distrito-audiovisual.webp",
          description:
            "Plataforma impulsada por el Ministerio de Agricultura, Ganadería y Pesca de la Nación, los Ministerios correspondientes de las Provincias de Catamarca, San Juan, La Rioja, Tucumán, Tierra del Fuego y Provincia de Buenos Aires, y Cultura en Proyectos.",
          galeria: [
            "/images/proyectos/gallery/alimentos-2.webp",
            "/images/proyectos/gallery/alimentos-3.webp",
            "/images/proyectos/gallery/alimentos-4.webp",
            "/images/proyectos/gallery/alimentos-portada2.webp",
            "/images/proyectos/gallery/alimentos-eje.webp",
            "/images/proyectos/gallery/alimentos-territorio.webp",
          ],
        },
      ],
    },
    {
      titulo: "Proyectos de Formación",
      proyectos: [
        {
      slug: "aynincuba-proyecto",
      title: "AynIncuba",
      image: "/images/aynincuba/proyectos.webp",
          description:
            "Incubadora de proyectos culturales y creativos con instancias de networking, formación y mentorías.",
        },
        {          slug: "premica-proyecto",
          title: "PreMICA",
          image: "/images/formacion/premica-proyectos.webp",
          description:
            "Programa de formación y profesionalización para emprendedores del mercado cultural.",
        },
        {
          slug: "espacio-aceleracion-proyecto",
          title: "Espacio de Aceleración de Emprendimientos Creativos",
          image: "/images/formacion/espacio-aceleracion.webp",
          description:
            "Programa intensivo de 14 semanas para potenciar emprendimientos creativos.",
        },
        {
          slug: "jornadas-creativas-proyecto",
          title: "Jornadas Creativas",
          image: "/images/formacion/jornadas-1.webp",
          description:
            "Seminarios y espacios de intercambio sobre innovación estratégica y economía creativa.",
        },
      ],
    },
    {
      titulo: "Libros Inclusivos Infantiles",
      proyectos: [
        {
          slug: "macatobiando",
          title: "Macatobiando",
          image: "/images/proyectos/macatobiando-slide.webp",
          description:
            "Libro infantil inclusivo que combina divulgación científica con diseño universal (impresión en tinta y braille, relieves). A través de Tobi, conocemos la vida de los Macá Tobianos en las profundas lagunas de la Patagonia Austral. Incluye talleres de formación docente y narraciones sonoras.",
          galeria: [
            "/images/proyectos/gallery/macatobiando-tapa.webp",
            "/images/proyectos/gallery/macatobiando-1.webp",
            "/images/proyectos/gallery/macatobiando-2.webp",
            "/images/proyectos/gallery/macatobiando-libro-1.webp",
            "/images/proyectos/gallery/macatobiando-libro-2.webp",
            "/images/proyectos/gallery/macatobiando-libro-3.webp",
            "/images/proyectos/gallery/macatobiando-libro-4.webp",
            "/images/proyectos/gallery/macatobiando-lectura.webp",
            "/images/proyectos/gallery/macatobiando-slide.webp",
            "/images/proyectos/gallery/macatobiando-logos.webp",
          ],
        },
        {
          slug: "pun-y-la-musica",
          title: "Pun y la música de la Tierra",
          image: "/images/proyectos/pun-musica.webp",
          description:
            "Libro infantil que explora la relación entre la música y la naturaleza, con formato inclusivo que incluye braille y relieve en sus ilustraciones. Incluye el sitio web www.monitopun.com.ar como complemento. Proyecto pedagógico integral con talleres de formación docente.",
          galeria: [
            "/images/proyectos/gallery/pun-portada-1.webp",
            "/images/proyectos/gallery/pun-portada-2.webp",
            "/images/proyectos/gallery/pun-portada-3.webp",
            "/images/proyectos/gallery/pun-portada-4.webp",
            "/images/proyectos/gallery/pun-libro.webp",
            "/images/proyectos/gallery/pun-3.webp",
            "/images/proyectos/gallery/pun-21.webp",
            "/images/proyectos/gallery/pun-lectura.webp",
            "/images/proyectos/gallery/pun-lectura-1.webp",
            "/images/proyectos/gallery/pun-imagen.webp",
            "/images/proyectos/gallery/pun-chocolate.webp",
            "/images/proyectos/gallery/pun-taller.webp",
            "/images/proyectos/gallery/pun-taller-alt.webp",
            "/images/proyectos/gallery/pun-hilda.webp",
            "/images/proyectos/gallery/pun-destacada-alt.webp",
            "/images/proyectos/gallery/pun-dsc-0191.webp",
            "/images/proyectos/gallery/pun-iva.webp",
            "/images/proyectos/gallery/pun-ninos.webp",
            "/images/proyectos/gallery/pun-slider.webp",
            "/images/proyectos/gallery/pun-slider-1.webp",
            "/images/proyectos/gallery/pun-slider-2.webp",
            "/images/proyectos/gallery/pun-slider-3.webp",
            "/images/proyectos/gallery/pun-slider-5.webp",
            "/images/proyectos/gallery/pun-slider-6.webp",
          ],
        },
        {
          slug: "mangu-abejorro-patagonico",
          title: "Mangú, un abejorro patagónico",
          image: "/images/proyectos/mangu.webp",
          description:
            "Libro infantil sobre la biodiversidad patagónica, con diseño accesible que incluye braille y relieves para una experiencia de lectura inclusiva. Texto de Ale Beron, ilustraciones de Sabina Schürmann.",
          videos: ["https://www.youtube.com/embed/7U8kUalMcho"],
        },
      ],
    },
    {
      titulo: "Red de Proyectos Creativos",
      proyectos: [
        {
          slug: "cinexcusa",
          title: "Cinexcusa",
          image: "/images/proyectos/cine-juvenil.webp",
          description:
            "Festival de cine temático que integra el cine, la literatura y las ciencias sociales para reflexionar sobre la coyuntura social colombiana. Su propósito es construir una mirada analítica y plural sobre hechos sociales. Neiva, Huila, Colombia.",
        },
        {
          slug: "vinetas-feria",
          title: "Viñetas — Feria de Historietistas",
          image: "/images/proyectos/ideas-que-traman.webp",
          description:
            "Encuentro de Historietistas, ilustradores y guionistas. Feria y fiesta que reúne dos veces al año en Buenos Aires a más de 150 proyectos editoriales autogestivos de historieta e ilustración de toda la Argentina.",
        },
        {
          slug: "ronda-programa",
          title: "Ronda — Programa Social y Cultural",
          image: "/images/proyectos/neural.webp",
          description:
            "Programa social y cultural que propone espacios de encuentro e intercambio destinados a familias y comunidades, utilizando la música y la percusión como medios para abordar la educación emocional de los niños y niñas. Buenos Aires, Argentina.",
        },
        {
          slug: "asociacion-masaya",
          title: "Asociación Masaya",
          image: "/images/proyectos/ciudad-barrios.webp",
          description:
            "Asociación sin fines de lucro con más de 10 años de experiencia, apasionada de encontrar los medios más idóneos para posibilitar mejores formas de convivir en comunidad. Nacida en Caracas, Venezuela, con base en San José, Costa Rica.",
          galeria: [
            "/images/proyectos/gallery/masaya-foto.webp",
          ],
        },
        {
          slug: "territorio-isleno",
          title: "Territorio Isleño",
          image: "/images/proyectos/distrito-audiovisual.webp",
          description:
            "Plataforma de proyectos relacionados al territorio islas y costa de la cuenca sur del Plata – Paraná. Espacio de producción, investigación y experimentación extra disciplinar y autogestivo. Victoria, Entre Ríos, Argentina.",
        },
        {
          slug: "casa-eliseu-voronkoff",
          title: "Casa Eliseu Voronkoff",
          image: "/images/proyectos/barda-desierto.webp",
          description:
            "Centro Cultural que desarrolla proyectos en el área de la literatura, la música y las artes visuales. Posee una pared de exposiciones disponible para artistas y unifica iniciativas activas en la ciudad.",
        },
        {
          slug: "festeca",
          title: "F.E.S.T.E.C.A.",
          image: "/images/proyectos/red-proyectos.webp",
          description:
            "Festival enmarcado en Formulando Estrategias Sustentables, Tecnológicas, Económicas, Culturales y Ambientales, impulsado desde la Secretaría de Estado de Ambiente y Desarrollo Sustentable. Busca fortalecer y fomentar la producción cultural sustentable.",
        },
        {
          slug: "vivienda-adobe-guatemala",
          title: "Vivienda Vernácula de Adobe",
          image: "/images/proyectos/ciudad-barrios.webp",
          description:
            "Estudiantes de arquitectura de la Universidad Rafael Landívar de Guatemala estudiaron la vivienda vernácula de adobe como recurso cultural y elemento de valoración patrimonial material e inmaterial. Ciudad de Guatemala.",
        },
        {
          slug: "musica-latinoamericana",
          title: "Música Latinoamericana",
          image: "/images/proyectos/neural.webp",
          description:
            "Difunde una identidad sonora creando un sentido de pertenencia con la música Latinoamericana. Espectáculo cronológico que pone en escena música en vivo con danzas costarricenses y flamencas. Declarado de interés público y cultural por el Ministerio de Cultura de Costa Rica.",
        },
        {
          slug: "artout-gallery",
          title: "Artout Gallery",
          image: "/images/proyectos/no-toxico-exp.webp",
          description:
            "Galería donde el artista envía sus obras y Artout se encarga de forma gratuita de la curaduría y del soporte rígido. El artista paga solo un pequeño abono por exponer sus obras de forma continua. Buenos Aires, Argentina.",
        },
        {
          slug: "orquesta-divino-nino",
          title: "Orquesta del Divino Niño",
          image: "/images/formacion/jornadas-2.webp",
          description:
            "Proyecto que cuenta con 12 años de existencia, conformado con el propósito de incentivar y dignificar a niños y jóvenes a través de la música. San Miguel de Tucumán, Argentina.",
          galeria: [
            "/images/proyectos/gallery/orquesta-divino.webp",
          ],
        },
        {
          slug: "artrail-community",
          title: "ArTrailCommunity",
          image: "/images/proyectos/barda-desierto.webp",
          description:
            "Emprendimiento de una comunidad de artistas y gestores culturales que busca crear experiencias turísticas basadas en la producción artística de Cusco, combinando tradición y contemporaneidad. Cusco, Perú.",
          galeria: [
            "/images/proyectos/gallery/arttrail-community.webp",
          ],
        },
      ],
    },
  ],
};

// ─── HERO SECTION DATA ────────────────────────────────

export const heroSlides: HeroSlide[] = [
  {
    title: "Cultura en Proyectos",
    subtitle:
      "Desarrollo y gestión de proyectos culturales, artísticos, educativos y tecnológicos",
    image: "/images/general/slider-hero.webp",
    cta: "Conocé nuestros proyectos",
    href: "/proyectos",
  },
  {
    title: "Ayni Lab",
    subtitle:
      "Espacio multidisciplinario para investigar y experimentar con el arte y la tecnología",
    image: "/images/ayni-lab/slide.webp",
    cta: "Explorar Ayni Lab",
    href: "/ayni-lab",
  },
  {
    title: "Actividades Lúdicas",
    subtitle:
      "Talleres de reutilización creativa para toda la familia",
    image: "/images/actividades/acercarte.webp",
    cta: "Ver actividades",
    href: "/actividades-ludicas",
  },
];
