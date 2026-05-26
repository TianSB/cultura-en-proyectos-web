// Datos centrales del sitio - extraídos de los documentos DOCX de migración web
// y enriquecidos con contenido real del sitio original (HTML)

export const siteConfig = {
  name: "Cultura en Proyectos",
  description:
    "Desarrollo y gestión de proyectos culturales, artísticos, educativos y tecnológicos.",
  email: "info@culturaenproyectos.org",
  social: {
    facebook: "https://facebook.com/pages/Ayni-Lab/1566164470335594",
    twitter: "https://twitter.com/AyniLab",
    instagram: "https://instagram.com/aynilab/",
    youtube: "https://www.youtube.com/user/culturaenproyectos",
  },
};

export const navItems = [
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
      image: "/images/ayni-lab/encuentro.jpg",
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
      image: "/images/ayni-lab/no-toxico.jpg",
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
      image: "/images/ayni-lab/slide.jpg",
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
      image: "/images/ayni-lab/encuentro.jpg",
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
      image: "/images/ayni-lab/encuentro.jpg",
      description:
        "En el marco de su residencia en el taller de AyniLab, Nilda Rosemberg dictó el taller Bordando en el parque, en la Casona de los Olivera, en el Parque Avellaneda de la Ciudad de Buenos Aires. Se compartieron técnicas básicas de bordado: punto yerba, punto cadena y variantes, punto relleno y punto cruz. El taller fue abierto a todo público.",
      details:
        "Archivo Broderie: catálogo abierto al registro fotográfico y ficha informativa de piezas y objetos relacionados con el bordado y la costura que traen los visitantes.",
    },
    {
      slug: "fase-8",
      title: "AyniLab en FASE 8 — Centro Cultural Recoleta",
      category: "Muestras y encuentros",
      image: "/images/ayni-lab/slide.jpg",
      description:
        "Del 29 de noviembre al 18 de diciembre de 2016 se realizó en el Centro Cultural Recoleta la octava edición de FASE, encuentro de experimentación, reflexión, crítica y promoción de las artes visuales, la ciencia y la tecnología.",
      details:
        "Por segundo año consecutivo AyniLab formó parte del encuentro, acompañando a los artistas Jason Lee (Taiwán) y Leo Núñez (Argentina). Jason Lee presentó Exception Scene II: obra interactiva que combina mapping de posición con origami mediante un dispositivo kinect. Leo Núñez presentó Pasos Discretos en el Patio de los Tilos: red de autómatas celulares lumínicos alimentados con paneles fotovoltaicos móviles que responden al movimiento de los visitantes mediante sensores.",
    },
    {
      slug: "encuentro-aynilab-juegos",
      title: "Encuentro AyniLab: juegos y juguetes",
      category: "Muestras y encuentros",
      image: "/images/ayni-lab/slide.jpg",
      description:
        "AyniLab organizó y produjo el Encuentro AyniLab, donde se presentaron juegos, prototipos, ensayos, notas y registros desarrollados en el espacio de experimentación multidisciplinar.",
      details:
        "En el marco de este encuentro se presentaron los juegos y prototipos desarrollados en el laboratorio, así como ensayos, notas y registros que documentan el proceso de creación colectiva.",
    },
    {
      slug: "taller-cerveza-artesanal",
      title: "Taller de cerveza artesanal",
      category: "Talleres",
      image: "/images/ayni-lab/slide.jpg",
      description:
        "Cultura en proyectos desarrolló un taller de cerveza artesanal dictado por el maestro cervecero Ricardo Chucrallah. Los participantes tuvieron la experiencia de producir cerveza orgánica y artesanal.",
      details:
        "En la clase práctica los alumnos participaron del proceso aprendiendo y cuidando cada paso. Los cereales que forman parte de la preparación son la cebada, el lúpulo, la avena y el trigo. Los participantes aprendieron sobre el aprovechamiento del residuo orgánico conocido como mosto.",
    },
    {
      slug: "taller-escultura-chocolate",
      title: "Taller de escultura en chocolate — Rubén Darré",
      category: "Talleres",
      image: "/images/ayni-lab/slide.jpg",
      description:
        "AynIncuba acompañó el Taller de escultura en chocolate de Rubén Darré. Con técnicas utilizadas en la escultura y las artes visuales, este taller explora la versatilidad del chocolate como material escultórico.",
      details:
        "Rubén Darré participa como escultor de hielo y en chocolate en la Coppa Del Mondo de la Gellatería en Rimini, Italia. El taller combina técnicas escultóricas tradicionales con la manipulación del chocolate como medio artístico.",
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
      slug: "torres-de-desafio-vertical",
      title: "Torres de Desafío Vertical",
      image: "/images/actividades/torres-desafio.jpg",
      description:
        "Mobiliario lúdico que combina ensamble, reutilización de materiales y juego colaborativo. Los participantes arman caminos verticales por donde cae una bolita metálica por gravedad.",
    },
    {
      slug: "cajas-de-musica",
      title: "Cajas de Música",
      image: "/images/actividades/acercarte.jpg",
      description:
        "Instrumentos de gran tamaño realizados con caños de PVC, botellas de plástico infladas o alambres tensados.",
    },
    {
      slug: "espacio-de-juegos",
      title: "Espacio de Juegos",
      image: "/images/actividades/acercarte.jpg",
      description:
        "Ambiente integrado de mobiliario lúdico y juegos de ingenio. Combinación de juego y educación ambiental.",
    },
    {
      slug: "taller-de-espirografo",
      title: "Taller de Espirógrafo",
      image: "/images/actividades/espirografo.jpg",
      description:
        "Diseños colaborativos con engranajes y color en papeles reutilizados.",
    },
    {
      slug: "orquesta-de-automatas",
      title: "Orquesta de Autómatas",
      image: "/images/actividades/acercarte.jpg",
      description:
        "Máquinas creadas con partes reutilizadas para un concierto colectivo.",
    },
    {
      slug: "taller-de-titeres",
      title: "Taller de Títeres",
      image: "/images/actividades/acercarte.jpg",
      description:
        "Reutilización de percha, telas, trapos, tuercas, hilo y tapones para títeres y marionetas.",
    },
    {
      slug: "taller-de-grabado",
      title: "Taller de Grabado",
      image: "/images/ayni-lab/no-toxico.jpg",
      description:
        "Matrices de impresión con tetrabricks, radiografías y otros materiales reutilizados.",
      videos: ["https://www.youtube.com/embed/yL80OAt6ixk"],
    },
    {
      slug: "motores-a-goma",
      title: "Motores a Goma",
      image: "/images/actividades/acercarte.jpg",
      description:
        "Juguetes a motor con sorbetes, clips, remaches y palitos de helado.",
    },
    {
      slug: "taller-de-soldadura",
      title: "Taller de Soldadura",
      image: "/images/actividades/acercarte-tejedor.jpg",
      description:
        "Reutilización de chatarra (tuercas, tornillos, clavos, chapas) para crear esculturas colaborativas. Apto desde 6 años.",
    },
    {
      slug: "fotografia-al-paso",
      title: "Fotografía al Paso",
      image: "/images/actividades/vuelta-verde.jpg",
      description:
        "Laboratorio móvil de fotografía estenopeica. Cámaras hechas con sachets de leche, fotogramas con objetos cotidianos.",
    },
    {
      slug: "accesorios-textiles",
      title: "Accesorios Textiles",
      image: "/images/actividades/acercarte-rojas.jpg",
      description:
        "Prendas personales con telas recuperadas del desecho textil. Técnicas de anudado, trenzado y plegado.",
    },
    {
      slug: "taller-de-plastico",
      title: "Taller de Plástico",
      image: "/images/actividades/acercarte.jpg",
      description:
        "Juguetes con envases plásticos reutilizados.",
    },
    {
      slug: "tacho-a-la-vista",
      title: "Tacho a la Vista",
      image: "/images/actividades/vuelta-verde.jpg",
      description:
        "Juegos con latas, plástico, cartón, corcho, madera, tela y papel.",
    },
    {
      slug: "taller-textil",
      title: "Taller Textil",
      image: "/images/actividades/acercarte.jpg",
      description: "Morrales y carteras con telas en desuso.",
    },
    {
      slug: "fabrica-de-papel",
      title: "Fábrica de Papel",
      image: "/images/actividades/acercarte-rojas.jpg",
      description:
        "Reciclaje de papel con pulpa y semillas. Papel plantable.",
    },
    {
      slug: "espacio-escenico",
      title: "Espacio Escénico",
      image: "/images/actividades/acercarte.jpg",
      description:
        "Teatro de apropiación del espacio público con objetos reutilizados.",
    },
    {
      slug: "taller-ilusiones-opticas",
      title: "Taller de Ilusiones Ópticas / Rotoscopio",
      image: "/images/actividades/espirografo.jpg",
      description:
        "Elaboración de rotoscopio con cartón, papel, hilo y marcadores.",
    },
  ],
  proyectos: [
    {
      slug: "talleres-reutilizacion-creativa-acercarte",
      title: "Talleres de Reutilización Creativa en AcercArte",
      image: "/images/actividades/acercarte.jpg",
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
      slug: "espacio-experimentacion-fernandez-blanco",
      title:
        "Espacio de Experimentación Lúdico y Creativo — Museo Fernández Blanco",
      image: "/images/actividades/espirografo.jpg",
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
      image: "/images/actividades/torres-desafio.jpg",
      description:
        "En el marco del programa El Estado en tu Barrio y del festival AcercArte se puso a disposición la Torre de Recorridos Espaciales, mobiliario lúdico que combina la lógica del ensamble, la reutilización de materiales en desuso y el juego colaborativo.",
      details:
        "Los participantes eligen las combinaciones posibles de los elementos para armar un camino en el que circula una bola metálica movilizada por la fuerza de gravedad. El clásico 'juego de armar' renovado por sus dimensiones, que invita a interacción corporal y colaboración colectiva. Este mobiliario lúdico se desarrolló en AyniLab.",
    },
    {
      slug: "reutilizacion-creativa-estado-barrio",
      title: "Reutilización Creativa en El Estado en tu Barrio",
      image: "/images/actividades/estado-barrio.jpg",
      description:
        "Convocados por el Ministerio de Gestión Cultural de la Provincia de Buenos Aires, la fundación se sumó a El Estado en tu Barrio, programa del Ministerio de Desarrollo Social que permite a las comunidades realizar trámites de manera directa y cercana a sus hogares.",
      details:
        "Cultura en proyectos puso a disposición una zona de descanso y esparcimiento compuesta por la Torre de Desafío Vertical y el Espirógrafo, dos juegos colaborativos que promueven la búsqueda de soluciones conjuntas, la diversión y el asombro.",
    },
    {
      slug: "reutilizacion-creativa-vuelta-verde",
      title: "Reutilización Creativa en la Feria Vuelta Verde",
      image: "/images/actividades/vuelta-verde.jpg",
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
      image: "/images/actividades/acercarte.jpg",
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
      slug: "i-jornadas-creativas",
      title: "I Jornadas Creativas Córdoba – Buenos Aires",
      image: "/images/formacion/jornadas-1.jpg",
      description:
        "Seminario y expo orientados a la profesionalización de emprendedores creativos y organizaciones culturales, favoreciendo el intercambio de experiencias, la colaboración y el trabajo en red.",
      details:
        "Se llevaron a cabo en el Área de Gestión Cultural FCE UNC (Córdoba) y en el Espacio Fundación Telefónica (Buenos Aires). Se desarrolló el seminario 'Gestión de Emprendimientos Creativos y Organizaciones Culturales' y la Expo Emprendimientos Creativos.",
    },
    {
      slug: "ii-jornadas-creativas",
      title: "II Jornadas Creativas Córdoba – Buenos Aires",
      image: "/images/formacion/jornadas-2.jpg",
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
    },
    {
      slug: "aynincuba-incubadora",
      title: "AynIncuba",
      image: "/images/aynincuba/logo.png",
      description:
        "Incubadora de proyectos culturales y creativos que ofrece instancias de networking, formación, mentorías y niveles específicos de incubación para emprendedores del sector.",
    },
    {
      slug: "premica-formacion",
      title: "PreMICA",
      image: "/images/formacion/emprendedores.jpg",
      description:
        "Programa de formación y profesionalización para emprendedores participantes del MICA (Mercado de Industrias Culturales Argentinas). AynIncuba, a través de sus especialistas, ofrece capacitación, profesionalización y tutoría.",
    },
    {
      slug: "espacio-aceleracion-creativos",
      title: "Espacio de Aceleración de Emprendimientos Creativos",
      image: "/images/formacion/espacio-aceleracion.jpg",
      description:
        "Programa de aceleración de 14 semanas organizado con el Ministerio de Gestión Cultural de la Ciudad de Buenos Aires, orientado a potenciar emprendimientos creativos. Con especialistas como Adrián Lebendiker, e incluyó una Jornada de Networking presencial.",
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
          slug: "ideas-que-traman",
          title: "Ideas que traman",
          image: "/images/proyectos/ideas-que-traman.jpg",
          description:
            "Proyecto de participación juvenil con el Patrimonio Cultural Inmaterial (PCI) en el Espacio Memoria y DDHH, que involucra talleres y creación colectiva de objetos. Se realizaron capacitaciones, talleres de arte callejero, grabado no tóxico y fotografía estenopeica, culminando en una muestra colectiva.",
        },
        {
      slug: "me-lo-llevo-a-la-tumba",
      title: "Me lo llevo a la tumba",
      image: "/images/proyectos/no-toxico-exp.jpg",
      description:
        "Podcast que explora la temática del secreto desde distintas aristas. Disponible en Spotify, Apple Podcast y Google Podcast. Proyecto de CON, equipo de investigación, experimentación y exploración cultural, con apoyo de Mecenazgo." ,
        },
        {
          slug: "barda-del-desierto",
          title: "Barda del Desierto (5ª y 6ª edición)",
          image: "/images/proyectos/barda-desierto.jpg",
          description:
            "Plataforma de residencias independiente con base en Contralmirante Cordero (Chubut), enfocada en arte, educación y artes visuales vinculadas al contexto. Artistas de distintas partes del mundo crean obras vinculadas a la historia y geografía local.",
        },
        {
          slug: "no-toxico-expo",
          title: "#NOTÓXICO",
          image: "/images/proyectos/no-toxico-exp.jpg",
          description:
            "Exposición fotográfica de fotograbados en la FotoGalería de la Facultad de Ciencias Económicas de la UNC, Córdoba, que explora la memoria y las técnicas de grabado no tóxico.",
        },
        {
          slug: "neruda",
          title: "Neruda",
          image: "/images/proyectos/neruda.jpg",
          description:
            "Proyecto de postproducción (doblajes y efectos visuales) para la película dirigida por Pablo Larraín. La película narra el año en que Pablo Neruda vivió como fugitivo en Chile. Estrenada en Buenos Aires el 9 de febrero de 2016.",
        },
        {
          slug: "neural-tango",
          title: "NEURAL Tango",
          image: "/images/proyectos/neural.jpg",
          description:
            "Proyecto de murales colaborativos en el Distrito de las Artes (La Boca, Buenos Aires), enfocado en la mejora del paisaje urbano y la identidad. Participaron artistas como Georgina Ciotti, Ice, Cabaio, Tekaz, eMePeCe, Pol Corona, Fio Silva y Stencil Land.",
        },
        {
          slug: "distrito-audiovisual-tecnologico",
          title: "Distrito Audiovisual y Tecnológico",
          image: "/images/proyectos/distrito-audiovisual.jpg",
          description:
            "Iniciativa de desarrollo cultural y productivo en el barrio de La Boca y Parque Patricios, promoviendo la concentración de empresas audiovisuales y tecnológicas, con murales temáticos realizados por artistas urbanos.",
        },
        {
          slug: "consultorio-de-proyectos",
          title: "Consultorio de Proyectos",
          image: "/images/formacion/consultorio.jpg",
          description:
            "Cultura en proyectos, en convenio con el Ministerio de Gestión Cultural de la Provincia de Buenos Aires, ofrece tutorías para emprendedores y gestores culturales. En sus dos ediciones ha contado con la participación de hasta 50 emprendimientos.",
        },
        {
          slug: "ciudad-de-barrios",
          title: "Ciudad de Barrios",
          image: "/images/proyectos/ciudad-barrios.jpg",
          description:
            "Plataforma de Transferencia creada entre la Cátedra Arquitectura 2D, Red de Vecinos de San Vicente y Fundación Cultura en proyectos. Un grupo promotor de difusión de las cualidades de una Ciudad de Barrios.",
        },
        {
          slug: "catedra-taller-a77",
          title: "Cátedra Taller A77 — FADU UBA",
          image: "/images/proyectos/catedra-a77.jpg",
          description:
            "Desde 2020, colaboración con la Cátedra Taller a77 de la FADU UBA. Los cursos de Arquitectura 1 y 2 trabajan en el diseño y construcción de proyectos articulando con actores del espacio público de Tornquist.",
        },
      ],
    },
    {
      titulo: "Proyectos de Formación",
      proyectos: [
        {
          slug: "aynincuba-proyecto",
          title: "AynIncuba",
          image: "/images/aynincuba/logo.png",
          description:
            "Incubadora de proyectos culturales y creativos con instancias de networking, formación y mentorías.",
        },
        {
          slug: "premica-proyecto",
          title: "PreMICA",
          image: "/images/formacion/emprendedores.jpg",
          description:
            "Programa de formación y profesionalización para emprendedores del mercado cultural.",
        },
        {
          slug: "espacio-aceleracion-proyecto",
          title: "Espacio de Aceleración de Emprendimientos Creativos",
          image: "/images/formacion/espacio-aceleracion.jpg",
          description:
            "Programa intensivo de 14 semanas para potenciar emprendimientos creativos.",
        },
        {
          slug: "jornadas-creativas-proyecto",
          title: "Jornadas Creativas",
          image: "/images/formacion/jornadas-1.jpg",
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
          image: "/images/proyectos/macatobiando-slide.jpg",
          description:
            "Libro infantil inclusivo que combina divulgación científica con diseño universal (impresión en tinta y braille, relieves). A través de Tobi, conocemos la vida de los Macá Tobianos en las profundas lagunas de la Patagonia Austral. Incluye talleres de formación docente y narraciones sonoras.",
        },
        {
          slug: "pun-y-la-musica",
          title: "Pun y la música de la Tierra",
          image: "/images/proyectos/pun-musica.png",
          description:
            "Libro infantil que explora la relación entre la música y la naturaleza, con formato inclusivo que incluye braille y relieve en sus ilustraciones. Incluye el sitio web www.monitopun.com.ar como complemento. Proyecto pedagógico integral con talleres de formación docente.",
        },
        {
          slug: "mangu-abejorro-patagonico",
          title: "Mangú, un abejorro patagónico",
          image: "/images/proyectos/mangu.jpg",
          description:
            "Libro infantil sobre la biodiversidad patagónica, con diseño accesible que incluye braille y relieves para una experiencia de lectura inclusiva. Texto de Ale Beron, ilustraciones de Sabina Schürmann.",
          videos: ["https://www.youtube.com/embed/7U8kUalMcho"],
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
    image: "/images/general/logo.jpg",
    cta: "Conocé nuestros proyectos",
    href: "/proyectos",
  },
  {
    title: "Ayni Lab",
    subtitle:
      "Espacio multidisciplinario para investigar y experimentar con el arte y la tecnología",
    image: "/images/ayni-lab/slide.jpg",
    cta: "Explorar Ayni Lab",
    href: "/ayni-lab",
  },
  {
    title: "Actividades Lúdicas",
    subtitle:
      "Talleres de reutilización creativa para toda la familia",
    image: "/images/actividades/acercarte.jpg",
    cta: "Ver actividades",
    href: "/actividades-ludicas",
  },
];
