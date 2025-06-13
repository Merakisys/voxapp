// src/app/models/song-database.ts
// -----------------------------------------------------------------------------
export interface Item {
  name: string;
  imageUrl: string;
  isSelected: boolean;
}

const img = 'https://us.123rf.com/450wm/solomnikov/solomnikov1801/solomnikov180100054/94351799-logotipo-de-la-m%C3%BAsica-simbolos-cristianos-los-creyentes-en-jes%C3%BAs-cantan-una-canci%C3%B3n-de.jpg?ver=6';   // 👉 Reemplaza con tus imágenes
// -----------------------------------------------------------------------------
export const cancionesPorTiempoYCanto: {
  readonly [tiempo: string]: {
    readonly [canto: string]: readonly Item[];
  };
} = {
  // ════════════════  A D V I E N T O  ════════════════
  Adviento: {
    Entrada:   [ 'Vienen con alegría', 'Ven Señor, no tardes', 'Maranatha', 'Prepara el camino', 'Rorate caeli' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Piedad:    [ 'Señor, ten piedad', 'Kyrie eleison', 'Perdón Señor', 'Oh Señor, ten piedad', 'Ten piedad de nosotros' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Aleluya:   [ 'Aleluya de Adviento', 'Aleluya, el Señor viene', 'Aleluya, espera Israel', 'Aleluya, preparad el camino', 'Aleluya de los profetas' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Ofertorio: [ 'Ofertorio de Adviento', 'Te presentamos el vino y el pan', 'Venimos a tu altar', 'Bendito seas Señor', 'Nuestra ofrenda de amor' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Santo:     [ 'Santo, Santo', 'Santo de la misa andina', 'Santo de los pueblos', 'Santo dominicano', 'Santo campesino' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Cordero de Dios': [ 'Cordero de Dios', 'Cordero de la paz', 'Cordero andino', 'Cordero quitas el pecado', 'Cordero divino' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Comunión:  [ 'Comunión de Adviento', 'Pan de vida nueva', 'Este es mi cuerpo', 'Ven y come', 'Pan del cielo' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Salida:    [ 'Salida de Adviento', 'Alma misionera', 'Caminaré', 'Id y proclamad', 'La alegría está en el corazón' ].map(name => ({ name, imageUrl: img, isSelected: false }))
  },

  // ════════════════  N A V I D A D  ════════════════
  Navidad: {
    Entrada:   [ 'Noche de paz', 'Venid, fieles todos', 'Campanas de Belén', 'Adeste fideles', 'La luz de Belén' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Piedad:    [ 'Kyrie Navidad', 'Ten piedad, Emmanuel', 'Señor de la Navidad', 'Perdón por tu amor', 'Piedad del Niño Dios' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Gloria:    [ 'Gloria a Dios en el cielo', 'Gloria de Navidad', 'Gloria, aleluya', 'Gloria excelsis', 'Gloria de la misa criolla' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Aleluya:   [ 'Aleluya de Navidad', 'Aleluya del Niño Dios', 'Aleluya de los ángeles', 'Aleluya, un Niño nació', 'Aleluya, cantad' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Ofertorio: [ 'Venid y traed', 'Ofrendas de paz', 'Pan y vino nuevo', 'Nuestras ofrendas', 'Traemos al altar' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Santo:     [ 'Santo de Navidad', 'Santo gloria in excelsis', 'Santo campanas', 'Santo villancico', 'Santo pastoril' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Cordero de Dios': [ 'Cordero de Belén', 'Cordero que quitas', 'Cordero divino', 'Cordero príncipe', 'Cordero Emmanuel' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Comunión:  [ 'Hoy ha nacido', 'Pan de la vida nueva', 'Pueblo que escuche', 'Venid y comed', 'Dios con nosotros' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Salida:    [ 'Vamos pastorcillos', 'Feliz Navidad', 'Al mundo paz', 'Cantad y anunciad', 'Campana sobre campana' ].map(name => ({ name, imageUrl: img, isSelected: false }))
  },

  // ════════════════  C U A R E S M A  ════════════════
  Cuaresma: {
    Entrada:   [ 'Cuarenta días', 'Conviértete y cree', 'Vuelve a mí', 'Perdona a tu pueblo', 'Misericordia Señor' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Piedad:    [ 'Perdón Señor', 'Kyrie eleison', 'Oh Dios, crea en mí', 'Ten piedad Señor', 'Perdónanos Señor' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Honor y gloria a ti Señor Jesús': [ 'Honor y gloria a ti', 'Tu palabra me salva', 'Alabanza a ti Cristo', 'Gloria y honor a ti', 'Rey eterno de gloria' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Ofertorio: [ 'Perdón Señor, ofrecemos', 'Acepta nuestras vidas', 'En tus manos Señor', 'Ofrecemos penitentes', 'Pan y vino de conversión' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Santo:     [ 'Santo de Cuaresma', 'Santo gregoriano', 'Santo penitencial', 'Santo humilde', 'Santo camino de cruz' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Cordero de Dios': [ 'Cordero que quitas', 'Cordero compasivo', 'Cordero redentor', 'Cordero de piedad', 'Cordero de la cruz' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Comunión:  [ 'El que come mi carne', 'Conviértenos Señor', 'Panes en el desierto', 'Pan que da la vida', 'Muéstrame Señor tu camino' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Salida:    [ 'Perdónanos oh Dios', 'Heme aquí Señor', 'Alma misionera (Cuaresma)', 'Caminaré en tu presencia', 'En marcha iré' ].map(name => ({ name, imageUrl: img, isSelected: false }))
  },

  // ════════════════  D O M I N G O   D E   R A M O S  ════════════════
  'Domingo de Ramos': {
    Entrada:   [ 'Hosanna al Hijo de David', 'Hosanna al Rey de Israel', 'Hosanna en el cielo', 'Hosanna cantemos', 'Hosanna Hosanna' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Canto para bendición de los ramos': [ 'Bendición de ramos', 'Ramos verdes', 'Hosanna bendito', 'Alzad la puerta', 'Cantemos al Rey' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Ofertorio: [ 'Traemos ramos al altar', 'Ofrecemos al Rey', 'Pan de victoria', 'Ofrenda real', 'Hosanna ofrenda' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Santo:     [ 'Santo de Ramos', 'Santo Hosanna', 'Santo victoria', 'Santo Rey', 'Santo salvador' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Cordero de Dios': [ 'Cordero Hosanna', 'Cordero de victoria', 'Cordero del Rey', 'Cordero salvador', 'Cordero glorioso' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Comunión:  [ 'Pan de victoria', 'Canta Hosanna', 'El Rey humilde', 'Hosanna, pueblo santo', 'Viene el Rey' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Salida:    [ 'Hosanna final', 'Al Rey gloria', 'Bendito sea', 'Caminad con Cristo', 'Hosanna victoria' ].map(name => ({ name, imageUrl: img, isSelected: false }))
  },

  // ════════════════  J U E V E S   S A N T O  ════════════════
  'Jueves Santo': {
    Entrada:   [ 'Pueblo de reyes', 'Dónde hay caridad y amor', 'Amémonos de corazón', 'Mandamiento nuevo', 'Entrada Jueves Santo' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Piedad:    [ 'Señor ten piedad (Cena)', 'Kyrie fraterno', 'Piedad fraterna', 'Perdónanos Maestro', 'Ten piedad oh Cristo' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Gloria:    [ 'Gloria eucarístico', 'Gloria fraternidad', 'Gloria del mandamiento', 'Gloria misa criolla', 'Gloria cantado' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Honor y gloria': [ 'Honor y gloria en la Cena', 'Alabanza fraterna', 'Glorificamos tu amor', 'Palabra que salva', 'Magnificat de la Cena' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Canto para el lavatorio de pies': [ 'Ubi Caritas', 'Un mandamiento nuevo', 'Donde hay amor', 'Lávense los pies', 'En esto conocerán' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Ofertorio: [ 'Te ofrecemos Señor', 'Ofrecemos vino y pan', 'Pan y vino de amor', 'Ofrenda fraterna', 'Recibe nuestras vidas' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Santo:     [ 'Santo eucarístico', 'Santo caridad', 'Santo fraterno', 'Santo humilde', 'Santo del Cenáculo' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Cordero de Dios': [ 'Cordero eucarístico', 'Cordero fraterno', 'Cordero redentor', 'Cordero de amor', 'Cordero que nos lava' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Comunión:  [ 'Pescador de hombres', 'Yo soy el pan', 'Cantemos al amor', 'Pan vivo bajado', 'Hoy el Señor resucita en mí' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Canto para repartir el pan bendito': [ 'Pan de unidad', 'Partimos el pan', 'Comamos este pan', 'Pan de fraternidad', 'Pan bendito y santo' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Salida:    [ 'Pueblo mío', 'Alma misionera', 'Adorad postrados', 'Alzaré mi copa', 'Somos discípulos' ].map(name => ({ name, imageUrl: img, isSelected: false }))
  },

  // ════════════════  V I G I L I A   P A S C U A L  ════════════════
  'La Resurrección del Señor': {
    'Pregón pascual': [ 'Exsultet Largo', 'Exsultet Breve', 'Exsultet Gregoriano', 'Exsultet Juvenil', 'Exsultet en español' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    '7 salmos':       [ 'Salmo 1: Luz', 'Salmo 2: Agua', 'Salmo 3: Salvación', 'Salmo 4: Confianza', 'Salmo 5: Misericordia' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Gloria:           [ 'Gloria pascual', 'Gloria angelical', 'Gloria del Aleluya', 'Gloria Regina coeli', 'Gloria plena luz' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Aleluya:          [ 'Aleluya pascual', 'Aleluya Exulte', 'Aleluya al Rey', 'Aleluya luminosa', 'Aleluya victoria' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Bendición y aspersión del agua bendita': [ 'Fuentes de agua', 'Vi brotar agua', 'Con agua pura', 'Rocíame Señor', 'Oh Dios, crea en mí' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Ofertorio:        [ 'Ofertorio pascual', 'Traemos tu alegría', 'Ofrenda de luz', 'Pan y vino nuevo', 'Acepta nuestras vidas' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Santo:            [ 'Santo pascual', 'Santo victoria', 'Santo Exsultet', 'Santo gloria', 'Santo reina' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Cordero de Dios': [ 'Cordero pascual', 'Cordero vencedor', 'Cordero divino', 'Cordero gloria', 'Cordero redentor' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Comunión:         [ 'Cristo nuestra Pascua', 'Resucitó el Señor', 'Pan vivo bajado', 'Este es el día', 'Cordero Inmolado' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Salida:           [ 'Canta Aleluya al Señor', 'Resucitó', 'Danos tu luz', 'Somos testigos', 'Alzaré tu nombre' ].map(name => ({ name, imageUrl: img, isSelected: false }))
  },

  // ════════════════  T I E M P O   P A S C U A L  ════════════════
  Pascua: {
    Entrada:   [ 'Cristo ha resucitado', 'El Señor resucitó', 'Alegría de Pascua', 'Resucitó para salvarnos', 'La Pascua cantemos' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Bendición y aspersión del agua bendita o piedad': [ 'Fuentes de agua viva', 'Con agua pura', 'Vi brotar agua', 'Oh Dios, crea en mí', 'Gloria al Bautismo' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Gloria:    [ 'Gloria pascual', 'Gloria del Aleluya', 'Gloria Exsultet', 'Gloria vivo está', 'Gloria triunfante' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Aleluya:   [ 'Aleluya victory', 'Aleluya resucitó', 'Aleluya del gozo', 'Aleluya Exsultet', 'Aleluya vivo' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Ofertorio: [ 'Ofertorio pascual', 'Traemos tu alegría', 'Ofrenda de gozo', 'Pan y vino nuevo', 'Acepta nuestras vidas' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Santo:     [ 'Santo de Pascua', 'Santo gloria viva', 'Santo Resucitado', 'Santo victoria', 'Santo Exsultet' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Cordero de Dios': [ 'Cordero pascual', 'Cordero vencedor', 'Cordero divino', 'Cordero gloria', 'Cordero redentor' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Comunión:  [ 'Cristo nuestra Pascua', 'Alzad puertas', 'Resucitó el Señor', 'Pan de vida nueva', 'Yo soy el pan vivo' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Salida:    [ 'Canta Aleluya', 'Id y proclamad', 'Somos testigos', 'Resucitó', 'Alegría pascual' ].map(name => ({ name, imageUrl: img, isSelected: false }))
  },

  // ════════════════  P E N T E C O S T É S  ════════════════
  Pentecostés: {
    Entrada:   [ 'Ven Espíritu Creador', 'Espíritu Santo, ven', 'Como fuego abrazador', 'Manda tu Espíritu', 'Espíritu de Dios llena mi vida' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Piedad:    [ 'Señor ten piedad (Pentecostés)', 'Kyrie fuego', 'Piedad espíritu', 'Ten piedad aliento de Dios', 'Perdón Señor Espíritu' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Gloria:    [ 'Gloria al Espíritu', 'Gloria de la llama', 'Gloria pentecostal', 'Gloria viento santo', 'Gloria fuego divino' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Aleluya:   [ 'Aleluya Espíritu', 'Aleluya viento recio', 'Aleluya lenguas de fuego', 'Aleluya aviva', 'Aleluya gozo santo' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Ofertorio: [ 'Ofrendas de fuego', 'Traemos tu Espíritu', 'Recibe nuestra llama', 'Vino y pan de fuego', 'Acepta nuestro ardor' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Santo:     [ 'Santo Espíritu', 'Santo llama', 'Santo fuego vivo', 'Santo consolador', 'Santo aliento' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Cordero de Dios': [ 'Cordero de Pentecostés', 'Cordero fuego santo', 'Cordero vivificador', 'Cordero divino', 'Cordero redentor' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Comunión:  [ 'Espíritu de Dios', 'Pan de fuego', 'Ven Espíritu Santo', 'Arde mi corazón', 'Llama de amor viva' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Salida:    [ 'Id al mundo', 'Construid la paz', 'Portadores de luz', 'Ven y enciende', 'Al mundo clama' ].map(name => ({ name, imageUrl: img, isSelected: false }))
  },

  // ════════════════  T I E M P O   O R D I N A R I O  ════════════════
  'Tiempo Ordinario': {
    Entrada:   [ 'Somos un pueblo que camina', 'Vamos cantando al Señor', 'Canta y camina', 'Un pueblo que avanza', 'Cantaré al Señor' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Piedad:    [ 'Señor ten piedad', 'Cristo ten piedad', 'Ten piedad de mí', 'Perdón Señor', 'Kyrie eleison' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Gloria:    [ 'Gloria a Dios', 'Gloria sencilla', 'Gloria de la creación', 'Gloria y alabanza', 'Gloria jubilosos' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Aleluya:   [ 'Aleluya ordinario', 'Aleluya gregoriano', 'Aleluya del camino', 'Alelu, cantad', 'Aleluya luz de Cristo' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Ofertorio: [ 'Te presentamos el vino y el pan', 'Entre tus manos', 'Recibe oh Señor', 'Bendito seas Señor', 'Ofrecemos lo que somos' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Santo:     [ 'Santo es el Señor', 'Santo de los pueblos', 'Santo andino', 'Santo campirano', 'Santo dominicano' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Cordero de Dios': [ 'Cordero de Dios I', 'Cordero de la paz', 'Cordero andino', 'Cordero divino', 'Cordero misericordia' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Comunión:  [ 'El Señor nos da su amor', 'Pan de vida', 'Unidos en ti', 'Yo soy el pan', 'Ven y come' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Salida:    [ 'Id y enseñad', 'María Madre nuestra', 'Anunciaremos tu Reino', 'Alma misionera', 'La alegría está en el corazón' ].map(name => ({ name, imageUrl: img, isSelected: false }))
  },

  // ════════════════  C R I S T O   R E Y  ════════════════
  'Cristo Rey': {
    Entrada:   [ 'Cristo Rey', 'Tú reinarás', 'Aclamemos al Rey', 'Reina Cristo Rey', 'Alabado seas Señor' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Piedad:    [ 'Señor ten piedad (Rey)', 'Piedad victoriosa', 'Kyrie majestad', 'Ten piedad soberano', 'Perdón Señor Rey' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Gloria:    [ 'Gloria al Rey', 'Gloria victorioso', 'Gloria majestad', 'Gloria eterna', 'Gloria Rey triunfante' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Aleluya:   [ 'Aleluya Rey', 'Aleluya majestad', 'Aleluya glorioso', 'Aleluya soberano', 'Aleluya eterno' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Ofertorio: [ 'Ofrenda real', 'Traemos coronas', 'Pan y vino de Rey', 'Ofrecemos tu reino', 'Recibe nuestra lealtad' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Santo:     [ 'Santo Rey del universo', 'Santo majestad', 'Santo soberano', 'Santo poderoso', 'Santo gloria eterna' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Cordero de Dios': [ 'Cordero Rey', 'Cordero soberano', 'Cordero victorioso', 'Cordero divino', 'Cordero eterno' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Comunión:  [ 'Pan del Rey', 'Reino de amor', 'Cuerpo glorioso', 'Mesa del Rey', 'Banquete real' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Salida:    [ 'A Cristo Rey proclamad', 'Rey de reyes', 'Viva Cristo Rey', 'Caminaré con mi Rey', 'Al Rey de la gloria' ].map(name => ({ name, imageUrl: img, isSelected: false }))
  },

  // ════════════════  F I E S T A S   D E   P R E C E P T O  ════════════════
  'Fiestas de Precepto': {
    Entrada:   [ 'Canto de María', 'Salve Regina', 'Bendita sea tu pureza', 'María, mírame', 'Ave María' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Piedad:    [ 'Señor ten piedad (María)', 'Madre de piedad', 'Kyrie maternal', 'Piedad Reina', 'Perdón Madre' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Gloria:    [ 'Gloria hermosa', 'Gloria Magnificat', 'Gloria maternal', 'Gloria Reina del cielo', 'Gloria Madre tierra' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Aleluya:   [ 'Aleluya Magnificat', 'Aleluya María', 'Aleluya Reina', 'Aleluya gracia plena', 'Aleluya maternal' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Ofertorio: [ 'Ofrenda mariana', 'Traemos flores', 'Pan y vino de gracia', 'Presentamos nuestros corazones', 'Acepta nuestras vidas María' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Santo:     [ 'Santo Reina del cielo', 'Santo maternal', 'Santo gracia plena', 'Santo Virgen fiel', 'Santo pura' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    'Cordero de Dios': [ 'Cordero mariano', 'Cordero de pureza', 'Cordero divino', 'Cordero redentor', 'Cordero sacrificado' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Comunión:  [ 'Ave María Pan', 'Bendito tu vientre', 'Madre del Salvador', 'Pan vivo María', 'Llena eres de gracia' ].map(name => ({ name, imageUrl: img, isSelected: false })),
    Salida:    [ 'Oh María Madre mía', 'Ruega por nosotros', 'Madre del pueblo', 'Glorifica mi alma', 'Adiós Reina del cielo' ].map(name => ({ name, imageUrl: img, isSelected: false }))
  }
} as const;
