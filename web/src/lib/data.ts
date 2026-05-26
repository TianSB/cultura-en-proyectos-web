// Datos centrales del sitio - extraídos de los documentos DOCX de migración web

export const siteConfig = {
  name: "Cultura en Proyectos",
  description:
    "Desarrollo y gestión de proyectos culturales, artísticos, educativos y tecnológicos.",
  email: "info@culturaenproyectos.org",
  social: {
    facebook: "https://facebook.com/pages/Ayni-Lab/1566164470335594",
    twitter: "https://twitter.com/AyniLab",
    instagram: "https://instagram.com/aynilab/",
  },
};

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Ayni Lab", href: "/ayni-lab" },
  { label: "Actividades Lúdicas", href: "/actividades-ludicas" },
  { label: "Formación Profesional", href: "/formacion-profesional" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

// ─── NOSOTROS ─────────────────────────────────────────

export const nosotrosContent = {
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

// ─── AYNI LAB ─────────────────────────────────────────

export const ayniLabContent = {
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
      description:
        "En el marco del proyecto Ideas que traman, AyniLab produjo el taller de Grabado, a cargo de la grabadora Graciela Buratti. La propuesta, dirigida a estudiantes de cuarto año del secundario de la Escuela de Artes Visuales Rogelio Yrurtia, se centró en la técnica del colagraph y la punta seca, empleando materiales y químicos no tóxicos.",
      details:
        "La actividad se realizó en el Espacio Memoria y Derechos Humanos [Ex-ESMA] en mayo de 2017.",
    },
    {
      slug: "arte-callejero",
      title:
        "Taller de Arte Callejero | GAC — Espacio Memoria y DDHH",
      category: "Talleres",
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
      description:
        "En el marco de su residencia en el taller de AyniLab, Nilda Rosemberg dictó el taller Bordando en el parque, en la Casona de los Olivera, en el Parque Avellaneda de la Ciudad de Buenos Aires. Se compartieron técnicas básicas de bordado: punto yerba, punto cadena y variantes, punto relleno y punto cruz. El taller fue abierto a todo público.",
      details:
        "Archivo Broderie: catálogo abierto al registro fotográfico y ficha informativa de piezas y objetos relacionados con el bordado y la costura que traen los visitantes.",
    },
    {
      slug: "fase-8",
      title: "AyniLab en FASE 8 — Centro Cultural Recoleta",
      category: "Muestras y encuentros",
      description:
        "Del 29 de noviembre al 18 de diciembre de 2016 se realizó en el Centro Cultural Recoleta la octava edición de FASE, encuentro de experimentación, reflexión, crítica y promoción de las artes visuales, la ciencia y la tecnología.",
      details:
        "Por segundo año consecutivo AyniLab formó parte del encuentro, acompañando a los artistas Jason Lee (Taiwán) y Leo Núñez (Argentina). Jason Lee presentó Exception Scene II: obra interactiva que combina mapping de posición con origami mediante un dispositivo kinect. Leo Núñez presentó Pasos Discretos en el Patio de los Tilos: red de autómatas celulares lumínicos alimentados con paneles fotovoltaicos móviles que responden al movimiento de los visitantes mediante sensores.",
    },
  ],
};

// ─── ACTIVIDADES LÚDICAS ──────────────────────────────

export const actividadesLudicasContent = {
  title: "Actividades Lúdicas",
  subtitle: "Talleres de Reutilización Creativa",
  intro:
    "Cultura en proyectos desarrolla y produce talleres creativos ideados para la reutilización de materiales en desuso, a través del arte y la tecnología, con actividades para toda la familia a cargo de artistas y especialistas.",
  description:
    "Estos talleres itinerantes promueven instancias de encuentro ciudadanas donde poner en juego la creatividad. Crean ámbitos en los que la educación ambiental sobre residuos, reutilización y reciclaje es posible a través del juego y la participación activa.",
  catalogo: [
    {
      title: "Torres de Desafío Vertical",
      description:
        "Mobiliario lúdico que combina ensamble, reutilización de materiales y juego colaborativo. Los participantes arman caminos verticales por donde cae una bolita metálica por gravedad.",
    },
    {
      title: "Cajas de Música",
      description:
        "Instrumentos de gran tamaño realizados con caños de PVC, botellas de plástico infladas o alambres tensados.",
    },
    {
      title: "Espacio de Juegos",
      description:
        "Ambiente integrado de mobiliario lúdico y juegos de ingenio. Combinación de juego y educación ambiental.",
    },
    {
      title: "Taller de Espirógrafo",
      description:
        "Diseños colaborativos con engranajes y color en papeles reutilizados.",
    },
    {
      title: "Orquesta de Autómatas",
      description:
        "Máquinas creadas con partes reutilizadas para un concierto colectivo.",
    },
    {
      title: "Taller de Títeres",
      description:
        "Reutilización de percha, telas, trapos, tuercas, hilo y tapones para títeres y marionetas.",
    },
    {
      title: "Taller de Grabado",
      description:
        "Matrices de impresión con tetrabricks, radiografías y otros materiales reutilizados.",
    },
    {
      title: "Motores a Goma",
      description:
        "Juguetes a motor con sorbetes, clips, remaches y palitos de helado.",
    },
    {
      title: "Taller de Soldadura",
      description:
        "Reutilización de chatarra (tuercas, tornillos, clavos, chapas) para crear esculturas colaborativas. Apto desde 6 años.",
    },
    {
      title: "Fotografía al Paso",
      description:
        "Laboratorio móvil de fotografía estenopeica. Cámaras hechas con sachets de leche, fotogramas con objetos cotidianos.",
    },
    {
      title: "Accesorios Textiles",
      description:
        "Prendas personales con telas recuperadas del desecho textil. Técnicas de anudado, trenzado y plegado.",
    },
    {
      title: "Taller de Plástico",
      description:
        "Juguetes con envases plásticos reutilizados.",
    },
    {
      title: "Tacho a la Vista",
      description:
        "Juegos con latas, plástico, cartón, corcho, madera, tela y papel.",
    },
    {
      title: "Taller Textil",
      description: "Morrales y carteras con telas en desuso.",
    },
    {
      title: "Fábrica de Papel",
      description:
        "Reciclaje de papel con pulpa y semillas. Papel plantable.",
    },
    {
      title: "Espacio Escénico",
      description:
        "Teatro de apropiación del espacio público con objetos reutilizados.",
    },
    {
      title: "Taller de Ilusiones Ópticas / Rotoscopio",
      description:
        "Elaboración de rotoscopio con cartón, papel, hilo y marcadores.",
    },
  ],
  proyectos: [
    {
      title: "Talleres de Reutilización Creativa en AcercArte",
      description:
        "AcercArte es una iniciativa del Ministerio de Gestión Cultural de la Provincia de Buenos Aires que lleva de manera gratuita propuestas culturales y artísticas a los municipios bonaerenses. Con más de 70 municipios recorridos, Cultura en proyectos forma parte de esta experiencia itinerante con los Talleres de Reutilización Creativa.",
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
      title:
        "Espacio de Experimentación Lúdico y Creativo — Museo Fernández Blanco",
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
      title: "Torres de Desafío Vertical",
      description:
        "En el marco del programa El Estado en tu Barrio y del festival AcercArte se puso a disposición la Torre de Recorridos Espaciales, mobiliario lúdico que combina la lógica del ensamble, la reutilización de materiales en desuso y el juego colaborativo.",
      details:
        "Los participantes eligen las combinaciones posibles de los elementos para armar un camino en el que circula una bola metálica movilizada por la fuerza de gravedad. El clásico 'juego de armar' renovado por sus dimensiones, que invita a interacción corporal y colaboración colectiva. Este mobiliario lúdico se desarrolló en AyniLab.",
    },
    {
      title: "Reutilización Creativa en El Estado en tu Barrio",
      description:
        "Convocados por el Ministerio de Gestión Cultural de la Provincia de Buenos Aires, la fundación se sumó a El Estado en tu Barrio, programa del Ministerio de Desarrollo Social que permite a las comunidades realizar trámites de manera directa y cercana a sus hogares.",
      details:
        "Cultura en proyectos puso a disposición una zona de descanso y esparcimiento compuesta por la Torre de Desafío Vertical y el Espirógrafo, dos juegos colaborativos que promueven la búsqueda de soluciones conjuntas, la diversión y el asombro.",
    },
    {
      title: "Espacio de Juegos en Villa Ventana y Sierra de la Ventana",
      description:
        "En el verano de 2018, durante enero y febrero, Cultura en proyectos llevó su Espacio de juegos, los Espirógrafos y la Torre de Desafío Vertical a Villa Ventana y Sierra de la Ventana, Provincia de Buenos Aires.",
      details:
        "Invitados por la Biblioteca Popular Macedonio Fernández, participaron de la Fiesta de la Golondrina y de una jornada de biblioteca de juegos y merienda saludable. Las tres actividades fueron gratuitas y abiertas a toda la comunidad.",
    },
  ],
};

// ─── FORMACIÓN PROFESIONAL ────────────────────────────

export const formacionProfesionalContent = {
  title: "Formación Profesional",
  subtitle: "Capacitación y desarrollo para el sector cultural",
  programas: [
    {
      title: "I Jornadas Creativas Córdoba – Buenos Aires",
      description:
        "Seminario y expo orientados a la profesionalización de emprendedores creativos y organizaciones culturales, favoreciendo el intercambio de experiencias, la colaboración y el trabajo en red.",
      details:
        "Se llevaron a cabo en el Área de Gestión Cultural FCE UNC (Córdoba) y en el Espacio Fundación Telefónica (Buenos Aires).",
    },
    {
      title: "II Jornadas Creativas Córdoba – Buenos Aires",
      description:
        "La segunda edición se desarrolló los días 10, 11 y 12 de octubre en Córdoba y Buenos Aires, con los seminarios 'Innovación estratégica y comunicación en organizaciones culturales/creativas' y 'Ciudades y experiencias creativas para una economía creativa', a cargo de Roberto Gómez de la Iglesia y Miren Martín Morato (c2+i).",
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
    },
    {
      title: "AynIncuba",
      description:
        "Incubadora de proyectos culturales y creativos que ofrece instancias de networking, formación, mentorías y niveles específicos de incubación para emprendedores del sector.",
    },
    {
      title: "PreMICA",
      description:
        "Programa de formación y profesionalización para emprendedores participantes del MICA (Mercado de Industrias Culturales Argentinas).",
    },
    {
      title: "Espacio de Aceleración de Emprendimientos Creativos",
      description:
        "Programa de aceleración de 14 semanas organizado con el Ministerio de Gestión Cultural de la Ciudad de Buenos Aires, orientado a potenciar emprendimientos creativos.",
    },
  ],
};

// ─── PROYECTOS ────────────────────────────────────────

export const proyectosContent = {
  title: "Proyectos",
  subtitle: "Red de Proyectos Creativos",
  intro:
    "Una comunidad virtual para la visibilización e intercambio de conocimientos entre gestores culturales y creativos de todo el mundo.",
  categorias: [
    {
      titulo: "Proyectos Artísticos",
      proyectos: [
        {
          title: "Ideas que traman",
          description:
            "Proyecto de participación juvenil con el Patrimonio Cultural Inmaterial (PCI) en el Espacio Memoria y DDHH, que involucra talleres y creación colectiva de objetos.",
        },
        {
          title: "Me lo llevo a la tumba",
          description:
            "Podcast que explora secretos de diversas personalidades destacadas.",
        },
        {
          title: "Barda del Desierto (5ª y 6ª edición)",
          description:
            "Plataforma de residencias independiente con base en Contralmirante Cordero (Chubut), enfocada en arte, educación y artes visuales vinculadas al contexto.",
        },
        {
          title: "#NOTÓXICO",
          description:
            "Exposición fotográfica de fotograbados en la UNC, Córdoba, que explora la memoria y las técnicas de grabado no tóxico.",
        },
        {
          title: "Neruda",
          description:
            "Proyecto de postproducción (doblajes y efectos visuales) para la película dirigida por Pablo Larraín.",
        },
        {
          title: "NEURAL Tango",
          description:
            "Proyecto de murales colaborativos en diversos barrios de Buenos Aires (La Boca, Distrito Audiovisual y Tecnológico) enfocado en la mejora del paisaje urbano y la identidad.",
        },
        {
          title: "Distrito Audiovisual y Tecnológico",
          description:
            "Iniciativa de desarrollo cultural y productivo en el barrio de La Boca, promoviendo la concentración de empresas audiovisuales y tecnológicas.",
        },
      ],
    },
    {
      titulo: "Proyectos de Formación",
      proyectos: [
        {
          title: "AynIncuba",
          description:
            "Incubadora de proyectos culturales y creativos con instancias de networking, formación y mentorías.",
        },
        {
          title: "PreMICA",
          description:
            "Programa de formación y profesionalización para emprendedores del mercado cultural.",
        },
        {
          title: "Espacio de Aceleración de Emprendimientos Creativos",
          description:
            "Programa intensivo de 14 semanas para potenciar emprendimientos creativos.",
        },
        {
          title: "Jornadas Creativas",
          description:
            "Seminarios y espacios de intercambio sobre innovación estratégica y economía creativa.",
        },
      ],
    },
    {
      titulo: "Libros Inclusivos Infantiles",
      proyectos: [
        {
          title: "Macatobiando",
          description:
            "Libro infantil inclusivo que combina divulgación científica con diseño universal (impresión en tinta y braille, relieves). Incluye talleres de formación docente y narraciones sonoras.",
        },
        {
          title: "Pun y la música de la Tierra",
          description:
            "Libro infantil que explora la relación entre la música y la naturaleza, con formato inclusivo y actividades educativas.",
        },
        {
          title: "Mangú, un abejorro patagónico",
          description:
            "Libro infantil sobre la biodiversidad patagónica, con diseño accesible que incluye braille y relieves para una experiencia de lectura inclusiva.",
        },
      ],
    },
  ],
};

// ─── HERO SECTION DATA ────────────────────────────────

export const heroSlides = [
  {
    title: "Cultura en Proyectos",
    subtitle:
      "Desarrollo y gestión de proyectos culturales, artísticos, educativos y tecnológicos",
    cta: "Conocé nuestros proyectos",
    href: "/proyectos",
  },
  {
    title: "Ayni Lab",
    subtitle:
      "Espacio multidisciplinario para investigar y experimentar con el arte y la tecnología",
    cta: "Explorar Ayni Lab",
    href: "/ayni-lab",
  },
  {
    title: "Actividades Lúdicas",
    subtitle:
      "Talleres de reutilización creativa para toda la familia",
    cta: "Ver actividades",
    href: "/actividades-ludicas",
  },
];
