const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  BorderStyle, WidthType, ShadingType, PageBreak
} = require('docx');
const fs = require('fs');
const path = require('path');

const BRAND_GREEN = "2D6A4F";
const LIGHT_GREEN = "D8F3DC";
const DARK = "1B1B1B";

function section(title) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    children: [new TextRun({ text: title, bold: true, size: 36, color: BRAND_GREEN, font: "Arial" })]
  });
}
function subsection(title) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 120 },
    children: [new TextRun({ text: title, bold: true, size: 28, color: DARK, font: "Arial" })]
  });
}
function label(text) {
  return new Paragraph({
    spacing: { before: 200, after: 60 },
    children: [new TextRun({ text, bold: true, size: 22, color: BRAND_GREEN, font: "Arial" })]
  });
}
function body(text) {
  return new Paragraph({
    spacing: { before: 80, after: 80 },
    children: [new TextRun({ text, size: 22, font: "Arial", color: DARK })]
  });
}
function imageNote(urls) {
  return new Paragraph({
    spacing: { before: 60, after: 120 },
    children: [new TextRun({ text: "📷 Imágenes: " + urls.join(' | '), size: 18, color: "888888", italics: true, font: "Arial" })]
  });
}
function divider() {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC", space: 1 } },
    children: [new TextRun("")]
  });
}
function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

const children = [];

// ── PORTADA SUPLEMENTO
children.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 800, after: 200 },
    children: [new TextRun({ text: "CULTURA EN PROYECTOS", bold: true, size: 48, color: BRAND_GREEN, font: "Arial" })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 600 },
    children: [new TextRun({ text: "SUPLEMENTO: AYNI LAB + ACTIVIDADES LÚDICAS COMPLETAS", bold: true, size: 26, color: "555555", font: "Arial" })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 1200 },
    children: [new TextRun({ text: "Complemento al documento principal de migración web — Mayo 2026", size: 20, color: "888888", italics: true, font: "Arial" })]
  }),
  pageBreak()
);

// ═══════════════════════════════════════════════════════
// SECCIÓN A — AYNI LAB
// ═══════════════════════════════════════════════════════
children.push(section("A. AYNI LAB"), divider());

// A.0 Home Ayni Lab
children.push(
  subsection("A.0 Ayni Lab — página principal"),
  label("URL"),
  body("aynilab.culturaenproyectos.org/"),
  label("Logo"),
  imageNote(["aynilab.culturaenproyectos.org/wp-content/uploads/2015/09/logo-con-slogan1.png"]),
  label("Descripción institucional"),
  body("Ayni Lab es un espacio de trabajo multidisciplinario concebido para investigar y experimentar con el arte y la tecnología. Apuesta a la formación en pos del desarrollo sostenible de proyectos culturales con especial acento en la reutilización creativa de materiales y el trabajo colaborativo."),
  body("Es un ámbito para que creativos, diseñadores, gestores culturales, ingenieros y arquitectos materialicen sus ideas y puedan profundizar en el uso de herramientas digitales y nuevas tecnologías."),
  label("Estructura interna del Lab"),
  body("Laboratorio: ámbito de experimentación, desarrollo y producción de proyectos."),
  body("Talleres: de profesionalización y de experimentación."),
  body("Muestras y encuentros: para compartir proyectos con la comunidad."),
  body("Residencias: para experimentar y producir apropiándose de las herramientas y recursos disponibles."),
  label("Redes sociales de Ayni Lab"),
  body("Facebook: facebook.com/pages/Ayni-Lab/1566164470335594"),
  body("Twitter: twitter.com/AyniLab"),
  body("Instagram: instagram.com/aynilab/"),
  label("Nota"),
  body("AyniLab es una iniciativa de Cultura en proyectos. El subdominio aynilab.culturaenproyectos.org puede integrarse al nuevo sitio como sección propia o mantenerse como subdominio según defina el equipo."),
  divider()
);

// A.1 OLNI
children.push(
  subsection("A.1 Taller O.L.N.I. — Objeto Luminoso No Identificado"),
  label("URL"),
  body("aynilab.culturaenproyectos.org/portfolio-items/objeto-luminoso-no-identificado/"),
  label("Categoría"),
  body("Talleres"),
  label("Sobre el taller"),
  body("En el marco del proyecto Pasos discretos, en conjunto con Espacio Nixso y Espacio Pla, se desarrolló el taller OLNI: Objeto Luminoso No Identificado. Dirigido a chicos y chicas de 6 a 12 años, consistió en la elaboración de un universo de objetos luminosos a partir del ensamble y modificación de objetos de uso cotidiano y circuitos electrónicos."),
  body("Durante la experiencia se acercaron principios de la electrónica junto con conceptos de reutilización creativa. Al cerrar el taller, los objetos luminosos se unieron colectivamente formando un escenario del espacio exterior, encendidos por una batería con fuente renovable de energía. Cada participante se llevó su objeto lumínico a casa."),
  label("Imágenes"),
  imageNote([
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/02/IMG_7446.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/02/IMG_7439.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/02/IMG_7391.jpg"
  ]),
  divider()
);

// A.2 Taller de grabado
children.push(
  subsection("A.2 Taller de Grabado no tóxico | Graciela Buratti — Espacio Memoria y DDHH"),
  label("URL"),
  body("aynilab.culturaenproyectos.org/portfolio-items/taller-de-grabado-no-toxico-graciela-buratti-espacio-memoria-y-ddhh/"),
  label("Categoría"),
  body("Talleres"),
  label("Sobre el taller"),
  body("En el marco del proyecto Ideas que traman, AyniLab produjo el taller de Grabado, a cargo de la grabadora Graciela Buratti. La propuesta, dirigida a estudiantes de cuarto año del secundario de la Escuela de Artes Visuales Rogelio Yrurtia, se centró en la técnica del colagraph y la punta seca, empleando materiales y químicos no tóxicos."),
  body("La actividad se realizó en el Espacio Memoria y Derechos Humanos [Ex-ESMA] en mayo de 2017."),
  label("Imágenes"),
  imageNote([
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/04/35.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/04/25.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/04/14.jpg"
  ]),
  divider()
);

// A.3 Arte Callejero
children.push(
  subsection("A.3 Taller de Arte Callejero | GAC — Espacio Memoria y DDHH"),
  label("URL"),
  body("aynilab.culturaenproyectos.org/portfolio-items/taller-de-arte-callejero-gac-espacio-memoria-y-derechos-humanos/"),
  label("Categoría"),
  body("Talleres"),
  label("Sobre el taller"),
  body("En el marco del proyecto Ideas que traman, se produjo un taller de arte callejero e intervención urbana para estudiantes de nivel secundario de la Escuela de Artes Visuales Rogelio Yrurtia."),
  body("El taller estuvo a cargo del GAC (Grupo de Arte Callejero) y se desarrolló en el Espacio Memoria y Derechos Humanos [Ex ESMA] en mayo de 2017."),
  label("Imágenes"),
  imageNote([
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/04/15.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/04/26.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/04/36.jpg"
  ]),
  divider()
);

// A.4 Fotografía estenopeica
children.push(
  subsection("A.4 Taller de Fotografía Estenopeica — Espacio Memoria y DDHH"),
  label("URL"),
  body("aynilab.culturaenproyectos.org/portfolio-items/3334/"),
  label("Categoría"),
  body("Talleres"),
  label("Sobre el taller"),
  body("En mayo de 2017, en el marco de Ideas que traman, se llevó a cabo un taller de fotografía estenopeica para estudiantes de la Escuela de Artes Visuales Rogelio Yrurtia."),
  body("Los participantes recorrieron el Espacio Memoria y Derechos Humanos con cámaras construidas a partir de cajas y registraron el entorno. Las fotografías se revelaron en el laboratorio móvil de fotografía estenopeica desarrollado en AyniLab."),
  label("Imágenes"),
  imageNote([
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/04/16.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/04/27.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/04/37.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2018/04/44.jpg"
  ]),
  divider()
);

// A.5 Bordando en el parque
children.push(
  subsection("A.5 Bordando en el parque — Casona de los Olivera, Parque Avellaneda"),
  label("URL"),
  body("aynilab.culturaenproyectos.org/portfolio-items/bordando-en-el-parque-pintando-con-telas-de-colores/"),
  label("Categoría"),
  body("Talleres"),
  label("Sobre el taller"),
  body("En el marco de su residencia en el taller de AyniLab, Nilda Rosemberg dictó el taller Bordando en el parque, en la Casona de los Olivera, en el Parque Avellaneda de la Ciudad de Buenos Aires. Se compartieron técnicas básicas de bordado: punto yerba, punto cadena y variantes, punto relleno y punto cruz. El taller fue abierto a todo público."),
  body("Archivo Broderie: catálogo abierto al registro fotográfico y ficha informativa de piezas y objetos relacionados con el bordado y la costura que traen los visitantes. Más info: archivobroderie.blogspot.com.ar"),
  label("Imágenes"),
  imageNote([
    "aynilab.culturaenproyectos.org/wp-content/uploads/2015/04/MG_79871.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2015/04/MG_78651.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2015/05/2.jpg"
  ]),
  divider()
);

// A.6 FASE 8
children.push(
  subsection("A.6 AyniLab en FASE 8 — Centro Cultural Recoleta"),
  label("URL"),
  body("aynilab.culturaenproyectos.org/portfolio-items/aynilab-en-fase-8/"),
  label("Categoría"),
  body("Muestras y encuentros"),
  label("Sobre el proyecto"),
  body("Del 29 de noviembre al 18 de diciembre de 2016 se realizó en el Centro Cultural Recoleta la octava edición de FASE, encuentro de experimentación, reflexión, crítica y promoción de las artes visuales, la ciencia y la tecnología."),
  body("Por segundo año consecutivo AyniLab formó parte del encuentro, acompañando a los artistas Jason Lee (Taiwán) y Leo Núñez (Argentina)."),
  body("Jason Lee presentó Exception Scene II: obra interactiva que combina mapping de posición con origami mediante un dispositivo kinect. El público al mover las piezas de origami altera la proyección de todo el espacio."),
  body("Leo Núñez presentó Pasos Discretos en el Patio de los Tilos: red de autómatas celulares lumínicos alimentados con paneles fotovoltaicos móviles que responden al movimiento de los visitantes mediante sensores. Realizada con apoyo de Mecenazgo Cultural."),
  label("Video embebido"),
  body("https://www.youtube.com/embed/o2wv7ZJCYsg"),
  label("Imágenes"),
  imageNote([
    "aynilab.culturaenproyectos.org/wp-content/uploads/2017/02/Jason_Lee.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2017/02/15.jpg",
    "aynilab.culturaenproyectos.org/wp-content/uploads/2017/02/13.jpg"
  ]),
  pageBreak()
);

// ═══════════════════════════════════════════════════════
// SECCIÓN B — ACTIVIDADES LÚDICAS COMPLETAS (páginas faltantes)
// ═══════════════════════════════════════════════════════
children.push(section("B. ACTIVIDADES LÚDICAS — PÁGINAS ADICIONALES"), divider());

// B.1 Talleres de Reutilización Creativa (descripción general)
children.push(
  subsection("B.1 Talleres de Reutilización Creativa — descripción general"),
  label("URL"),
  body("culturaenproyectos.org/portfolio-items/talleres-de-reutilizacion-creativa/"),
  label("Descripción"),
  body("Cultura en proyectos desarrolla y produce talleres creativos ideados para la reutilización de materiales en desuso, a través del arte y la tecnología, con actividades para toda la familia a cargo de artistas y especialistas."),
  body("Estos talleres itinerantes promueven instancias de encuentro ciudadanas donde poner en juego la creatividad. Crean ámbitos en los que la educación ambiental sobre residuos, reutilización y reciclaje es posible a través del juego y la participación activa."),
  label("Catálogo de talleres disponibles"),
  body("TORRES DE DESAFÍO VERTICAL: mobiliario lúdico que combina ensamble, reutilización de materiales y juego colaborativo. Los participantes arman caminos verticales por donde cae una bolita metálica por gravedad."),
  body("CAJAS DE MÚSICA: instrumentos de gran tamaño realizados con caños de PVC, botellas de plástico infladas o alambres tensados."),
  body("ESPACIO DE JUEGOS: ambiente integrado de mobiliario lúdico y juegos de ingenio. Combinación de juego y educación ambiental."),
  body("TALLER DE ESPIRÓGRAFO: diseños colaborativos con engranajes y color en papeles reutilizados."),
  body("ORQUESTA DE AUTÓMATAS: máquinas creadas con partes reutilizadas para un concierto colectivo."),
  body("TALLER DE TÍTERES: reutilización de percha, telas, trapos, tuercas, hilo y tapones para títeres y marionetas."),
  body("TALLER DE GRABADO: matrices de impresión con tetrabricks, radiografías y otros materiales reutilizados."),
  body("MOTORES A GOMA: juguetes a motor con sorbetes, clips, remaches y palitos de helado."),
  body("TALLER DE SOLDADURA: reutilización de chatarra (tuercas, tornillos, clavos, chapas) para crear esculturas colaborativas. Apto desde 6 años."),
  body("FOTOGRAFÍA AL PASO: laboratorio móvil de fotografía estenopeica. Cámaras hechas con sachets de leche, fotogramas con objetos cotidianos."),
  body("ACCESORIOS TEXTILES: prendas personales con telas recuperadas del desecho textil (totoras, retazos). Técnicas de anudado, trenzado y plegado."),
  body("TALLER DE PLÁSTICO: juguetes con envases plásticos reutilizados."),
  body("TACHO A LA VISTA: juegos con latas, plástico, cartón, corcho, madera, tela y papel."),
  body("TALLER TEXTIL: morrales y carteras con telas en desuso."),
  body("FÁBRICA DE PAPEL: reciclaje de papel con pulpa y semillas. Papel plantable."),
  body("ESPACIO ESCÉNICO: teatro de apropiación del espacio público con objetos reutilizados."),
  body("TALLER DE ILUSIONES ÓPTICAS / ROTOSCOPIO: elaboración de rotoscopio con cartón, papel, hilo y marcadores."),
  label("Videos embebidos"),
  body("https://www.youtube.com/embed/yL80OAt6ixk"),
  body("https://www.youtube.com/embed/CJDmIOOfouw"),
  body("https://www.youtube.com/embed/Sj1tUsQ-icA"),
  label("Imágenes"),
  imageNote([
    "wp-content/uploads/2018/01/8.jpg",
    "wp-content/uploads/2018/01/6.jpg",
    "wp-content/uploads/2018/01/5.jpg",
    "wp-content/uploads/2018/01/13.jpg"
  ]),
  divider()
);

// B.2 AcercArte
children.push(
  subsection("B.2 Talleres de Reutilización Creativa en AcercArte"),
  label("URL"),
  body("culturaenproyectos.org/portfolio-items/acercarte_reutilizacion_creativa/"),
  label("Sobre el proyecto"),
  body("AcercArte es una iniciativa del Ministerio de Gestión Cultural de la Provincia de Buenos Aires que lleva de manera gratuita propuestas culturales y artísticas a los municipios bonaerenses. Con más de 70 municipios recorridos, Cultura en proyectos forma parte de esta experiencia itinerante con los Talleres de Reutilización Creativa."),
  body("El grabado, la música y el ensamble forman parte de las actividades que permiten reutilizar telas, plástico, papel, tetrabricks y convertirlos en pinturas, cajas musicales y títeres, entre otras creaciones. Durante un fin de semana entero el público puede sumarse a los espacios donde la educación ambiental sobre residuos y reciclaje es posible a través del juego."),
  label("Municipios recorridos"),
  body("2019: Mercedes | San Antonio de Areco | Villarino | Mar Chiquita | Miramar | Pinamar | Mar del Plata | Tandil | Olavarría | Campana | San Nicolás"),
  body("2018: Mar del Plata | Tigre | Villa Gesell | Monte Hermoso | Berazategui | Mar de Ajó | Malvinas Argentinas | Guaminí | Exaltación de la Cruz | Cañuelas | Carlos Casares | Salto | Chascomús"),
  body("2017: Mar del Plata | Pinarmar | Brandsen | Mar Chiquita | Merlo | Coronel Rosales | San Fernando | Miramar | Tres de Febrero | Ezeiza | Rauch | Adolfo Alsina | José C. Paz | Coronel Dorrego | Carlos Tejedor | Laprida | General Alvear | Junín | Carmen de Areco | San Cayetano | Rojas | Lobería | Colón | San Pedro | Coronel Pringles | Lezama | General Arenales | General Rodríguez | General La Madrid | Florentino Ameghino | Suipacha | Maipú | Coronel Suárez | Saladillo | Tornquist | Castelli | La Plata | Chivilcoy | San Isidro | General Lavalle | Pellegrini | General Viamonte | Tres Arroyos | General Belgrano | General Guido | Salliqueló | Ayacucho | Rivadavia"),
  body("2016: Campana | Tandil | Bahía Blanca | Lanús | Olavarría | Nueve de Julio | Lomas de Zamora | Bragado | Lobos | Almirante Brown | Baradero | Lincoln | Vicente López | Chacabuco | Trenque Lauquen | San Martín | Pergamino | Villegas | Morón | Carmen de Patagones | Saavedra (Pigüé) | Pilar | Las Flores | Gonzáles Chaves | Berisso | Necochea | Dolores | Florencio Varela | Arrecifes | Puán | Quilmes | Azul | 25 de Mayo | San Vicente | Bolívar | Magdalena | San Miguel | Luján | Madariaga | Balcarce"),
  label("Imágenes"),
  imageNote([
    "wp-content/uploads/2017/05/portada1.jpg",
    "wp-content/uploads/2017/05/0107_AcercArte_General-Alvear_Dia01_080417__MG_7735.jpg",
    "wp-content/uploads/2019/06/115_AcercArte_210517__MG_2031.jpg",
    "wp-content/uploads/2017/05/mapa-acercarte.jpg"
  ]),
  divider()
);

// B.3 Museo Fernández Blanco
children.push(
  subsection("B.3 Espacio de Experimentación Lúdico y Creativo — Museo Fernández Blanco"),
  label("URL"),
  body("culturaenproyectos.org/portfolio-items/espacio-de-experimentacion-ludico-y-creativo-en-el-museo-fernandez-blanco/"),
  label("Sobre el proyecto"),
  body("En el marco del Programa Narrativas Cruzadas (Eje Activaciones-Innovación de Museos de Buenos Aires), AyniLab estuvo presente en una jornada de juego y actividades en el Museo Fernández Blanco, con un espacio compuesto por mobiliario lúdico y desarrollos del lab."),
  body("Los asistentes al museo pudieron experimentar con la creación de dibujos colaborativos con los espirógrafos, el diseño de recorridos espaciales con las torres de desafío vertical, y otros dispositivos de ingenio y creatividad creados bajo la premisa de la reutilización de materiales."),
  label("Juegos presentes"),
  body("Espirógrafos: mesa de dibujo grupal con mecanismo de ruedas dentadas."),
  body("Torres de desafío vertical: estructura de cuatro paredes con piezas de madera reutilizadas para construir recorridos por los que cae una esfera metálica."),
  body("Pirámide humana: hombrecitos de madera para apilar en infinitas combinaciones."),
  body("Ciudad infinita: placas de madera encastrables con ventanas y techos para construir ciudades continuas."),
  label("Imágenes (Fotos: Analía Piombino)"),
  imageNote([
    "wp-content/uploads/2019/06/DSC_4392.jpg",
    "wp-content/uploads/2019/06/DSC_4468.jpg",
    "wp-content/uploads/2019/06/DSC_4440.jpg",
    "wp-content/uploads/2019/06/DSC_4380.jpg"
  ]),
  divider()
);

// B.4 Torres de desafío vertical
children.push(
  subsection("B.4 Torres de Desafío Vertical"),
  label("URL"),
  body("culturaenproyectos.org/portfolio-items/torres-de-desafio-vertical/"),
  label("Sobre el juego"),
  body("En el marco del programa El Estado en tu Barrio y del festival AcercArte se puso a disposición la Torre de Recorridos Espaciales, mobiliario lúdico que combina la lógica del ensamble, la reutilización de materiales en desuso y el juego colaborativo."),
  body("Los participantes eligen las combinaciones posibles de los elementos para armar un camino en el que circula una bola metálica movilizada por la fuerza de gravedad. El clásico \"juego de armar\" renovado por sus dimensiones, que invita a interacción corporal y colaboración colectiva."),
  body("Este mobiliario lúdico se desarrolló en AyniLab. Una versión combinada con elementos de robótica fue exhibida como Mecanimismo en la muestra Singularity University en el Espacio Fundación Telefónica."),
  label("Imágenes (Fotos: Ministerio de Gestión Cultural de la Pcia. de Buenos Aires)"),
  imageNote([
    "wp-content/uploads/2017/05/0104_Acercarte_Carlos-Tejedoor-Dia-2_-020417.jpg",
    "wp-content/uploads/2017/05/105_AcercArte_Rauch_EnvioGeneral_26032017__MG_6212-compressor-1024x683.jpg",
    "wp-content/uploads/2017/05/0107_Acercarte_Colon_dia-2_300417-_DSC0584-compressor-1024x684.jpg"
  ]),
  divider()
);

// B.5 El Estado en tu Barrio
children.push(
  subsection("B.5 Reutilización Creativa en El Estado en tu Barrio"),
  label("URL"),
  body("culturaenproyectos.org/portfolio-items/edo_en_tu_barrio/"),
  label("Sobre el proyecto"),
  body("Convocados por el Ministerio de Gestión Cultural de la Provincia de Buenos Aires, la fundación se sumó a El Estado en tu Barrio, programa del Ministerio de Desarrollo Social que permite a las comunidades realizar trámites de manera directa y cercana a sus hogares."),
  body("Cultura en proyectos puso a disposición una zona de descanso y esparcimiento compuesta por la Torre de Desafío Vertical y el Espirógrafo, dos juegos colaborativos que promueven la búsqueda de soluciones conjuntas, la diversión y el asombro, mientras las familias esperaban usar los servicios del programa."),
  label("Municipios 2017"),
  body("La Plata | Merlo | Moreno | San Vicente | Almirante Brown | San Miguel | Quilmes | Tres de Febrero | Lomas de Zamora | Florencio Varela | General Rodríguez | San Nicolás | San Vicente | Morón | Lanús | Ezeiza | Pilar"),
  label("Imagen"),
  imageNote(["wp-content/uploads/2017/05/estado-en-tu-barrio.jpg"]),
  divider()
);

// B.6 Villa Ventana / Sierra de la Ventana
children.push(
  subsection("B.6 Espacio de Juegos en Villa Ventana y Sierra de la Ventana"),
  label("URL"),
  body("culturaenproyectos.org/portfolio-items/espacio-de-juegos-en-villa-ventana-y-sierra-de-la-ventana/"),
  label("Sobre el proyecto"),
  body("En el verano de 2018, durante enero y febrero, Cultura en proyectos llevó su Espacio de juegos, los Espirógrafos y la Torre de Desafío Vertical a Villa Ventana y Sierra de la Ventana, Provincia de Buenos Aires."),
  body("Invitados por la Biblioteca Popular Macedonio Fernández, participaron de la Fiesta de la Golondrina y de una jornada de biblioteca de juegos y merienda saludable. Junto a la Biblioteca Popular Mariano Moreno de Sierra de la Ventana se organizó una tarde de juegos en espacio abierto. Las tres actividades fueron gratuitas y abiertas a toda la comunidad."),
  label("Imágenes"),
  imageNote([
    "wp-content/uploads/2018/02/WhatsApp-Image-2018-02-22-at-6.50.jpg",
    "wp-content/uploads/2018/02/WhatsApp-Image-2018-02-12-at-20.39.jpg",
    "wp-content/uploads/2018/02/IMG-2516.jpg"
  ]),
  label("Logos institucionales"),
  imageNote([
    "wp-content/uploads/2018/02/logo-biblio-villa-ventana.jpg",
    "wp-content/uploads/2018/02/Municipio-icono-259.jpg"
  ]),
  divider()
);

// ═══════════════════════════════════════════════════════
// SECCIÓN C — FORMACIÓN PROFESIONAL ADICIONAL
// ═══════════════════════════════════════════════════════
children.push(section("C. FORMACIÓN PROFESIONAL — PÁGINA ADICIONAL"), divider());

children.push(
  subsection("C.1 II Jornadas Creativas Córdoba – Buenos Aires"),
  label("URL"),
  body("culturaenproyectos.org/portfolio-items/ii-jornadas-creativas-cordoba-buenos-aires/"),
  label("Sobre el proyecto"),
  body("La segunda edición de las Jornadas Creativas se desarrolló los días 10, 11 y 12 de octubre en Córdoba y Buenos Aires, con los seminarios Innovación estratégica y comunicación en organizaciones culturales/creativas y Ciudades y experiencias creativas para una economía creativa, a cargo de Roberto Gómez de la Iglesia y Miren Martín Morato (c2+i)."),
  body("Las jornadas buscan contribuir con la creación y consolidación de emprendimientos creativos y organizaciones culturales, favoreciendo el intercambio de experiencias, la colaboración y el trabajo en red."),
  body("Se llevaron a cabo en el Área de Gestión Cultural FCE UNC (Córdoba) y en el Espacio Fundación Telefónica (Buenos Aires)."),
  label("Eje Economía Creativa"),
  body("El seminario Ciudades y experiencias creativas para una economía creativa analizó estrategias de impulso creativo en ciudades y territorios, usando el caso de la transformación de Bilbao y el \"Efecto Guggenheim\" para profundizar la relación entre marca-territorio, sectores creativos y economía creativa."),
  label("Eje Innovación Estratégica"),
  body("El seminario Innovación estratégica y comunicación en organizaciones culturales/creativas expuso herramientas para comprender las dinámicas de proyectos emprendedores y plantear innovación organizativa. Se tomó como caso Conexiones improbables (www.conexionesimprobables.es)."),
  label("Especialistas"),
  body("Roberto Gómez de la Iglesia: creador y director de c2+i y Conexiones improbables. Fundador de Grupo Xabide. Director de Divergentes y Disonancias, plataformas de relación entre artistas y empresas para la innovación abierta."),
  body("Miren Martín Morato: Lic. Ciencias de la Información (UPV), Master en Dirección de Marketing y Comunicación (UOC). Periodista de radio por más de 25 años. Responsable de Marketing y Comunicación de Conexiones improbables."),
  label("Imágenes del slider"),
  imageNote([
    "wp-content/uploads/2012/03/jornadas-creativas-2_001f-1024x279.jpg",
    "wp-content/uploads/2012/03/jornadas-creativas-2_0021-1024x279.jpg",
    "wp-content/uploads/2012/03/jornadas-creativas-2_003f-1024x279.jpg"
  ]),
  pageBreak()
);

// ═══════════════════════════════════════════════════════
// SECCIÓN D — RESUMEN DE ACTIVOS AYNI LAB
// ═══════════════════════════════════════════════════════
children.push(
  section("D. ACTIVOS DE AYNI LAB A RECUPERAR"),
  divider(),
  label("Logo"),
  body("aynilab.culturaenproyectos.org/wp-content/uploads/2015/09/logo-con-slogan1.png"),
  label("Logo horizontal pequeño (usado en culturaenproyectos.org)"),
  body("wp-content/uploads/2015/05/logo-ayni-hor-PEQ1-e1436367202724.png"),
  label("Carpetas de imágenes a descargar del servidor de Ayni Lab"),
  body("/wp-content/uploads/2015/ — talleres tempranos, logos"),
  body("/wp-content/uploads/2016/ — Bordando en el parque, FASE 8"),
  body("/wp-content/uploads/2017/ — FASE 8, talleres Ideas que traman"),
  body("/wp-content/uploads/2018/ — OLNI, grabado, arte callejero, estenopeica, Encuentro"),
  label("Videos de Ayni Lab a conservar"),
  body("FASE 8 / Pasos Discretos: youtube.com/embed/o2wv7ZJCYsg"),
  label("Redes de Ayni Lab (aparte de las de Cultura en proyectos)"),
  body("Instagram: instagram.com/aynilab/ — incluir en la web nueva"),
  body("Facebook: facebook.com/pages/Ayni-Lab/1566164470335594"),
  label("Nota de arquitectura del sitio"),
  body("Ayni Lab vive en un subdominio separado (aynilab.culturaenproyectos.org). Para el nuevo sitio, definir si se integra como sección dentro de culturaenproyectos.org o se mantiene como subdominio propio. Ambas opciones son válidas pero la integración simplifica el mantenimiento sin programador."),
  pageBreak()
);

// ═══════════════════════════════════════════════════════
// SECCIÓN E — CHECKLIST FINAL COMPLETO
// ═══════════════════════════════════════════════════════
children.push(
  section("E. CHECKLIST FINAL — TODAS LAS PÁGINAS"),
  divider(),
  label("✅ Páginas leídas y documentadas — documento principal"),
  body("Nosotros | Contacto | Macatobiando | Pun y la música de la Tierra | Mangú | Plataforma Innovación Alimentos | Cátedra a77 FADU UBA | Ideas que traman | Me lo llevo a la tumba | Barda del Desierto 5ª | Barda del Desierto 6ª | #NOTÓXICO | Neruda | NEURAL Tango | Distrito Audiovisual & Tecnológico | AynIncuba | PreMICA | Espacio Aceleración | I Jornadas Creativas | Talleres Reutilización Creativa Mercedes | Espirógrafos | Red de Proyectos"),
  label("✅ Páginas leídas y documentadas — este suplemento"),
  body("Ayni Lab home | OLNI | Grabado no tóxico | Arte Callejero | Fotografía Estenopeica | Bordando en el parque | AyniLab en FASE 8 | Talleres Reutilización Creativa (descripción general) | AcercArte | Museo Fernández Blanco | Torres de Desafío Vertical | El Estado en tu Barrio | Villa Ventana y Sierra de la Ventana | II Jornadas Creativas"),
  label("⚠️ Páginas del listado original que no tienen contenido suficiente propio (redirigen o están vacías)"),
  body("culturaenproyectos.org/ideasquetraman/ → redirige al portfolio de Ideas que traman (ya documentado)"),
  body("aynilab.culturaenproyectos.org/portfolio-items/encuentro/ → Encuentro Ayni Lab (no incluido en el listado pero referenciado)"),
  label("📋 TOTAL DE PÁGINAS PROCESADAS"),
  body("37 páginas leídas y documentadas en los dos archivos Word."),
  label("Acción siguiente recomendada"),
  body("Con ambos documentos Word en mano, el equipo puede: (1) revisar y validar los textos, (2) solicitar backup del servidor a Mario para recuperar todas las imágenes, (3) elegir plataforma de la nueva web, y (4) comenzar la construcción en paralelo mientras el sitio actual sigue activo.")
);

// BUILD
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22, color: DARK } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: BRAND_GREEN },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: DARK },
        paragraph: { spacing: { before: 300, after: 120 }, outlineLevel: 1 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children
  }]
});

Packer.toBuffer(doc).then(buffer => {
  const outputPath = path.join(__dirname, 'ContenidoWeb_CulturaEnProyectos_SUPLEMENTO.docx');
  fs.writeFileSync(outputPath, buffer);
  console.log("✓ Suplemento generado correctamente en: " + outputPath);
});
