const mongoose = require('mongoose')
const Halls = require('../models/halls')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const urlDB = process.env.MONGO_URI

const hallsJSON = [
  {
    id: 1,
    name: 'Sala Sol',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735396/RITHMEOK/halls/SALA_SOL_ytiir2.jpg',
    description:
      'Abierta desde el año 1979, fue cuna de la movida de Madrid, viendo nacer a grupos míticos como Radio Futura, Alaska y los Pegamoides, etc. En la actualidad es toda una referencia en la noche con conciertos en Madrid de todos los estilos musicales. Por su escenario pasan cada semana los mejores artistas nacionales e internacionales de pop, rock y otros géneros musicales. La sala El Sol es también un espacio dedicado al mundo de la cultura, con presentaciones de discos y libros, rodajes de videoclips o entregas de premios. La sala cuenta con una superficie de 300m² y un escenario de 28m² y se encuentra en la céntrica calle Jardines con acceso al metro Sol o Gran Vía.',
    adress: 'Calle Jardines, nº3',
    city: 'Madrid',
    cp: '28013',
    telephone: '915 32 64 90',
    webPage: 'https://salaelsol.com/',
    latitude: 40.41985046973215,
    longitude: -3.701573169316847
  },
  {
    id: 2,
    name: 'Sala Siroco',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735396/RITHMEOK/halls/SALA_siroco_kiyoj5.jpg',
    description:
      'Desde el año 89 la sala Siroco es toda una referencia en las salas de música en vivo en Madrid. Formado por un grupo de gente apasionados por la música y eso se nota en la excelente programación de la sala, que apuesta por los mejores sonidos tanto nacionales como internacionales en una amplia selección de estilos musicales. Cuenta con dos espacios diferentes, el Siroco club, en donde albergan todo tipo de conciertos y sesiones de los mejores dj’s del momento, con un potente y novedoso equipo de sonido que hará las delicias de los amantes de la música. El otro espacio es el Siroco Lounge, en el que tienen cabida todo tipo de propuestas culturales como pueden ser presentaciones de libros, showcases, programas de radio, etc., todo ello en un espacio de diseño con clara orientación pop. La sala está situada en el número 3 de la calle San Dimas, con las estaciones de metro de Noviciado y San Bernardo en las cercanías.',
    adress: 'San Dimas, nº3',
    city: 'Madrid',
    cp: '28015',
    telephone: '91 593 30 70',
    webPage: 'https://siroco.es/',
    latitude: 40.42723318679648,
    longitude: -3.707715
  },
  {
    id: 3,
    name: 'Sala But',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735396/RITHMEOK/halls/SALA_BUT_kqbjbx.jpg',
    description:
      'La sala But de Madrid se ha convertido en el centro de referencia de la noche madrileña, con grandes sesiones y los mejores conciertos del momento en su amplio y espectacular escenario. Cuenta con dos amplías plantas de decoración moderna, con tres barras y una amplia pista de baile en la que podrás disfrutar con los grandes hits de la noche. Pero aún hay más, ya que también cuenta con el ochoymedio club que se convirtió en el club del indie en Madrid con actuaciones de los mejores grupos indie de España. Por su escenario pasó lo más granado del indie nacional desde su apertura en el año 2.000. También pasaron grandes artistas internacionales y los mejores Dj’s de pop, rock, indie, electropop… La sala But se encuentra en la calle de Barceló y cuenta la estación de metro de Tribunal en las cercanías',
    address: 'C/ BARCELO nº11',
    city: 'Madrid',
    cp: '28004',
    telephone: '91 448 06 98',
    webPage: 'https://butmadrid.com/',
    latitude: 40.42733785196511,
    longitude: -3.6997449153415767
  },
  {
    id: 4,
    name: 'WiZink Center',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735396/RITHMEOK/halls/SALA_wizink_mhddwr.jpg',
    description:
      'El WiZink Center, conocido como el antiguo Palacio de los Deportes de Madrid, es el recinto por excelencia de los grandes conciertos en Madrid. Contiene tres formatos con diferentes aforos para conciertos, el formato The Box para 3.630 personas, el formato Ring para 5.630 o los 8.706 del Ring Plus, hasta llegar al formato completo que da cabida a 17.453 espectadores. Por el WiZink Center de Madrid pasan los más grandes artistas nacionales e internacionales.',
    address: 'Av. Felipe II, s/n',
    city: 'Madrid',
    cp: '28009',
    telephone: '914 44 99 49',
    webPage: 'https://www.wizinkcenter.es/index.php',
    latitude: 40.42424653743036,
    longitude: -3.671751
  },
  {
    id: 5,
    name: 'Sala Costello Club',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735396/RITHMEOK/halls/SALA_COSTELLO_k2ku8v.png',
    description:
      'La sala Costello Club nace en el año 2.005 de la mano de dos hermanos que llevaban muchos años ligados al mundo de las discográficas, editoriales y música. La idea de la sala es un local de ocio en Madrid en el que los artistas tengas un punto de encuentro y un lugar en el que descubrir nuevos talentos de la música. Con el tiempo Costello se hizo un hueco en el ambiente nocturno madrileño, siendo un local ideal para tomarse unas copas o disfrutar de sus múltiples conciertos programados. Cuenta con una situación muy céntrica a escasos metros de la Gran Vía madrileña, uno de los puntos neurálgicos de la ciudad. Cuenta en sus cercanías con las estaciones de metro de Gran Vía y Sol.',
    adress: 'C/ Caballero de Gracia, 10',
    city: 'Madrid',
    cp: '28013',
    telephone: '91 522 1815',
    webPage: 'http://www.costelloclub.com/',
    latitude: 40.42208707152173,
    longitude: -3.7004576772673876,
    moreinfo: [
      '< M > Gran Vía / Sol.',
      'Domingo y Lunes CERRADO (salvo evento).',
      'Martes: 20h a 02:30h.',
      'Miércoles y Jueves: 20h. a 03h.',
      'Viernes y Sábado: 20h. a 03:30h'
    ]
  },
  {
    id: 6,
    name: 'Sala moby dick',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735397/RITHMEOK/halls/SALA_moby-dick_qqssgk.jpg',
    description:
      'Desde que abrió sus puertas en el año 1992 Moby Dick Club se ha convertido en una de las salas más conocidas y mejor valoradas de la ciudad de Madrid. Son una de las salas de conciertos más emblemáticas de la capital, con una gran programación enfocada al indie rock, aunque también tiene espacio para otros géneros musicales (metal, pop, folk, soul, jazz…)En sus más de dos décadas pasaron varias generaciones de madrileños para ver a su grupo favorito y descubrir nueva música en la sala.',
    address: 'vda. de Brasil, nº 5',
    city: 'Madrid',
    cp: '28020',
    telephone: '915 32 64 90',
    webPage: 'https://www.mobydickclub.com/',
    latitude: 40.45489402512004,
    longitude: -3.694083915341576
  },
  {
    id: 7,
    name: 'Sala clamores',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735396/RITHMEOK/halls/SALA_clamores_yho8x5.jpg',
    description:
      'La sala Clamores de Madrid nació un 25 de julio del ochenta. Más de treinta años de música en vivo. Situada en un entorno madrileño, tradicional por antonomasia, entre los distritos de Chamberí y Malasaña, este último epicentro de esa cultura nocturna, noctámbula y un puntito ruin. La sala Clamores es un microcosmo cultural leal a sí mismo que ha visto durante las noches la esencia de la música en vivo: jazz, blues, funky, bossa, tango, etcétera Dentro, la sala sin diseño, mas vigente: toda modernidad es un rapto de caducidad. Y ahora, con más de 30 años de andadura, Clamores no pierde su identidad, si bien entre luces y sombras, combinados, miradas cómplices, cócteles variados y mezcla de idiomas en una cantina singular que conjuga su actividad en múltiples tiempos, se hayan trocado los plastas por los plasmas y la T.V. y los canales y puertos cíber y las retransmisiones en línea.',
    adress: 'Calle Alburquerque, 14',
    city: 'Madrid',
    cp: '28010',
    telephone: '(+34) 914 45 54 80',
    webPage: 'https://www.salaclamores.es/',
    latitude: 40.43191832612668,
    longitude: -3.700915084658423
  },
  {
    id: 8,
    name: 'Sala Morocco',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735396/RITHMEOK/halls/SALA_Morocco_vkuj9j.jpg',
    description:
      'La historia de la sala Morocco se inicia en el año 1951 cuando inicia su travesía convirtiéndose en un referente del ocio de Madrid. En los años 70 la sala se adapta a los tiempos del destape, el chiste verde, la sátira… y por primera vez en el año 1978 cambió de nombre y fue bautizada por la gran Lucía Bosé como «Talismán», con cinco años llenos de esplendor y éxito. En los 90 regresó Morocco con más fuerza encabezados por artistas como Alaska, regresando el ambiente cabaretero y noctámbulo de años atrás. Conciertos, fiestas, presentaciones de libros y otros actos culturales volvieron a remontar a la sala Morocco.',
    address: 'C/ del Marqués de Leganés, 7',
    city: 'Madrid',
    cp: '28004',
    telephone: '915 32 64 90',
    webPage: 'https://www.salamoroccomadrid.com/',
    latitude: 40.4225115533166,
    longitude: -3.7073485423292123
  },
  {
    id: 9,
    name: 'Sala RockVille',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735396/RITHMEOK/halls/SALA_rockville_apydt8.jpg',
    description:
      'La sala Rockville es un sueño hecho realidad. Un sueño que tuvo un grupo de gente loca por la música al igual que tú. Son un grupo de personas que sabe la magia que esconde una canción de tres minutos, siendo la música una parte muy importante de sus vidas. La sala Rockville es, principalmente, un lugar en el que queremos que toda aquella persona atraída por la música se sienta como en su casa. Un sitio en el que los músicos vayan a tocar, ver actuaciones de otros grupos, colaborar entre ellos, relacionarse para que surjan nuevos proyectos, a escuchar a los clásicos y a descubrir lo último.',
    address: 'C/ Avenida de Brasil 3 esquina calle Orense, nº32',
    city: 'Madrid',
    cp: '28020',
    telephone: '915 30 01 70',
    webPage: 'https://rockville.es',
    latitude: 40.45409837426907,
    longitude: -3.6944407460247297
  },
  {
    id: 11,
    name: 'Sala Café Berlín',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735396/RITHMEOK/halls/SALA_berlincafe_vrcste.jpg',
    description:
      'El Berlín Café de Madrid lleva ya múltiples décadas siendo homónimo de la mejor música en riguroso directo y de las mejores noches de ocio de la capital de España. Tras cerrar la mítica sala de la C/ Jacometrezo por causas de fuerza mayor en el primer mes del año de dos mil dieciseis, ahora el Berlín resucita en una nueva localización. El jueves treinta y uno de marzo reabrimos nuestras puertas en una nueva sala ubicada en la Costanilla de los Ángeles veinte, al lado de la Plaza de Santurrón Domingo, a solo 80m de distancia del viejo Berlín, en el local que hasta el momento ocupaba el WE ROCK. Lo que no va a mudar es que proseguiremos llevando la mejor música por bandera y el goce que lleva asociado a ella como única y muy noble causa, tanto en lo que toca a los conciertos en vivo como a las sesiones de clubbing que se extenderán diariamente hasta las 6 de la madrugada',
    address: 'C/ COSTANILLA DE LOS ÁNGELES 20',
    city: 'Madrid',
    cp: '28013',
    telephone: '915597429',
    webPage: 'https://berlincafe.es/',
    latitude: 40.41998923285002,
    longitude: -3.7079429999999998,
    moreinfo: ['Info: infocafeberlin@gmail.com']
  },
  {
    id: 12,
    name: 'Teatro Eslava',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735396/RITHMEOK/halls/SALA_TEATRO-ESLAVA_whdajb.png',
    description:
      'Ubicada en pleno corazón de Madrid en un antiguo teatro, la sala Joy Eslava fue uno de los locales de referencia del ocio de Madrid. Como sala fue inaugurada en el año 1981 y albergaba tanto conciertos, como eventos sociales y culturales además de diversas y variadas fiestas. Tras cerrar debido a la pandemia en 2020, aprovechó para reinventarse e inaugurarse en 2022 como Teatro Eslava gracias al arquitecto francés Philippe Starck que es el responsable de dotar de un nuevo alma el Teatro Eslava, de impregnar cada rincón con su estilo inconfundible surrealista y atemporalUna nueva experiencia, que convertirá el Teatro Eslava en un espacio que combinará la tradición y el más puro estilo surrealista, auténtico y de raíces, creando una atmósfera elegante y agradable que traslade la humildad de nuestros orígenes y la grandeza de nuestro presente. Una experiencia visual y sensorial que nos envuelve en todo lo que hacemos, escribe una historia que contar.',
    address: 'C/ Arenal, 11',
    city: 'Madrid',
    cp: '28013',
    telephone: '91 559 71 92',
    webPage: 'https://teatroeslava.com/',
    latitude: 40.41752258420846,
    longitude: -3.7065509153415768,
    moreinfo: ['hola@teatroeslava.com']
  },
  {
    id: 13,
    name: 'Sala La Riviera',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735396/RITHMEOK/halls/SALA_riviera_t9k8v3.png',
    description:
      'La sala La Riviera de Madrid es una de las salas más grandes para conciertos de la capital de España. Se encuentra situada a orillas del río Manzanares y cuenta con 1.500 metros cuadrados de superficie con un gran escenario adaptable para cualquier tipo de evento o acontecimiento. Con un emplazamiento envidiable, en La Riviera podrás disfrutar de los mejores conciertos en Madrid de diversos géneros musicales. Desde el rock o el pop más melódico hasta el más potente metal, como puedes ver en esta web de noticias Heavy Metal, se dan cita en una de las salas imprescindibles del ocio y la noche de la capital española. Se encuentra en la calle Paseo Bajo de la Virgen del Puerto y con las estaciones de metro de Puerta del Angel y Principe Pío en las cercanías.',
    address: 'Paseo Bajo de la Virgen s/n',
    city: 'Madrid',
    cp: '28005',
    telephone: '91 365 24 15',
    webPage: 'https://salariviera.com/',
    latitude: 40.413416609630424,
    longitude: -3.722193915341577
  }
]

const eachOfhalls = hallsJSON.map((hall) => new Halls(hall))

mongoose
  .connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    const allhalls = await Halls.find()
    if (allhalls.length) {
      await Halls.collection.drop()
    }
  })
  .catch((err) => console.log('Error deleting RYTHMEOK halls', err))
  .then(async () => {
    await Halls.insertMany(eachOfhalls)
    console.log(
      'Congrats RYTHMEOK team!, you already have data from RYTHMEOK halls in your DB'
    )
  })
  .catch((err) => console.log('You cannot create RYTHMEOK halls. Sorry!', err))
  .finally(() => mongoose.disconnect())
