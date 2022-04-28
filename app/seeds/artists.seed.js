const mongoose = require('mongoose')
const Artists = require('../models/artists')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const urlDB = process.env.MONGO_URI

const artistsJSON = [
  {
    id: 1,
    name: 'Taylor Swift',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650579310/RITHMEOK/artists/TAYLORSWIFT_ytf37d.jpg',
    description:
      'Es conocida por escribir grandes canciones narrativas y composiciones acerca de sus experiencias personales.\n Como compositora, ha sido honrada por la Nashville Songwriters Association y el Salón de la Fama de los Compositores. Entre otros logros de Swift se incluyen once premios Grammy, un Emmy, 25 Billboard Music Awards, 30 American Music Awards, un premio Brit, seis MTV Video Music Awards, once Country Music Association Awards, así como dos nominaciones al Globo de Oro.\n Ha vendido más de 50 millones de álbumes y 150 millones de descargas digitales de sus sencillos, convirtiéndola en una de las artistas con mayores ventas discográficas del mundo.',
    crew: [
      'Aretha Franklin - Bajo',
      'Ray Charles - Teclado',
      'Sam Cooke - Voz y teclado'
    ],
    genres: ['Dance pop,', 'Pop', 'Post-teen pop']
  },
  {
    id: 2,
    name: 'Justin Bibier',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650579310/RITHMEOK/artists/JUSTINBIBIER_vheqht.jpg',
    description:
      'Ha sido nominado y galardonado en numerosas ocasiones, ganando el Premio Artista Del Año de los American Music Awards en 2010 y siendo nominado en la 53.ª entrega de los Premios Grammy en las categorías de Mejor Artista Revelación y Mejor Álbum Pop.\n Debido a la inmensa cantidad de discos vendidos durante su trayectoria profesional, Justin Bieber se ha convertido en uno de los artistas musicales con más ventas de la historia',
    crew: [
      'Mac Miller - Bajo',
      'Iggy Azalea - Teclado',
      'Nicki Minaj - Voz y teclado',
      'Miley Cyrus - Voz',
      'Lana Del Ray - Oboe'
    ],
    genres: ['Post-teen pop', 'Canadian Pop']
  },
  {
    id: 3,
    name: 'The weekend',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650579310/RITHMEOK/artists/THEWEEKEND_kzaspj.jpg',
    description:
      'Abel Makkonen Tesfaye (Toronto, Ontario; 16 de febrero de 1990), conocido por su nombre artístico The Weeknd, es un cantante, compositor y productor canadiense, conocido por éxitos como «Save Your Tears», «Blinding Lights», «The Hills», «Starboy», «Out Of Time», entre otros.\n Sus emocionales y lastimadoras letras a menudo expresan sentimientos de dolor y lidiar con el tema de sexo, las drogas, y la fiesta.',
    crew: [
      'Tyler the Creator - Bajo',
      'Lil Wane- Teclado',
      'Oneohtrix - Voz y teclado',
      'Point Never - Voz',
      'Quincy Jones - Oboe'
    ],
    genres: ['Pop', 'Canadian contemporary r&b', 'Canadian pop']
  },
  {
    id: 4,
    name: 'Rihanna',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650579310/RITHMEOK/artists/RIHANNA_o5r2sb.jpg',
    description:
      'Robyn Rihanna Fenty (Saint Michael, Barbados; 20 de febrero de 1988), conocida simplemente como Rihanna, es una cantante, actriz, diseñadora y empresaria barbadense. Es conocida por fusionar algunos géneros caribeños con música pop y por reinventar su imagen a través de los años.\n Su impacto en la cultura popular la ha llevado a convertirse en un icono de la música y de la moda, por lo que se refieren a ella como la «Princesa del R&B» y «Reina de la Moda». Rihanna es además considerada la artista musical más influyente y exitosa del siglo XXI. \n  Comenzó su carrera en 2003 cuando hizo una audición para el productor musical Evan Rogers. Más tarde firmaría un contrato de seis álbumes con Def Jam. En 2005 lanzó su álbum debut Music of the Sun, seguido por su segundo material discográfico A Girl Like Me.',
    crew: [
      'Jennifer Rosales - Bajo',
      'Jahleel Weaver- Teclado',
      'Melissa Battifarano - Voz y teclado',
      'Philippa Price - Voz',
      'Slick Woods - Oboe'
    ],
    genres: [
      'Dance pop',
      'Urban contempony',
      'R&B',
      'Pop',
      'Post-teen pop',
      'Barbadian pop'
    ]
  },

  {
    id: 5,
    name: 'Bad Bunny',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650579309/RITHMEOK/artists/BADBUNNY_ivhpeg.jpg',
    description:
      'Benito Antonio Martínez Ocasio (Almirante Sur, Vega Baja, 10 de marzo de 1994), más conocido como Bad Bunny, es un rapero y compositor puertorriqueño.\n Su estilo de música es generalmente definido como trap latino y reguetón, pero también incorporó otros géneros como rock, kizomba y soul.\n También es conocido por su entonación grave y rasposa y su llamativo estilo.',
    crew: [
      'Jorge San Francisco- Teclado',
      'Manolo García - Voz y teclado',
      'Judith Esteve - Voz'
    ],
    genres: ['Reggaeton', 'Trap latino']
  },
  {
    id: 6,
    name: 'Eminem',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650579309/RITHMEOK/artists/eminem_ajek8e.jpg',
    description:
      'Marshall Bruce Mathers III (St. Joseph, Misuri, 17 de octubre de 1972), conocido artísticamente como Eminem (estilizado como EMINƎM) o como Slim Shady, es un cantante, productor discográfico y actor estadounidense.\n Su nombre artístico proviene de la unión de las iniciales de Marshall Mathers: M&M («Em and Em», estilizándose como Eminem), mientras que su segundo nombre artístico (llevado al español como Sombra Misteriosa o el Flaco Sombrío) se hizo conocer por primera vez en 1997 con su primer disco, titulado The Slim Shady EP.',
    crew: [
      'Beyoncé - clarinete',
      'Jay-Z- Teclado',
      'Elton John - Voz y teclado',
      'Lil Wayne - Voz'
    ],
    genres: ['G funk', 'Hip Hop', 'Rap', 'detroit hip hop']
  },
  {
    id: 7,
    name: 'Drake',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650579309/RITHMEOK/artists/DRAKE_a27dkp.jpg',
    description:
      'Aubrey Drake Graham (Toronto, 24 de octubre de 1986), conocido simplemente como Drake, es un músico, cantante, compositor, productor discográfico y actor canadiense.\n  Originalmente se hizo conocido por interpretar al personaje de Jimmy Brooks de la serie de televisión Degrassi: The Next Generation.\n Más tarde saltó a la fama como cantante de rap, lanzando varios mixtapes antes de firmar con Lil Wayne en la compañía discográfica estadounidense Young Money Entertainment en junio de 2006',
    crew: [
      'Noah 40 Shebib - flauta',
      'Oliver El-Khatib - Mandurria',
      'Dennis Graham - Voz y teclado',
      'Baka - Voz',
      'Mellany Sanchez - guitarra eléctrica'
    ],
    genres: [
      'Rap',
      'Pop rap',
      'Canadian pop',
      'Canadian hip hop',
      'Toronto rap'
    ]
  },
  {
    id: 8,
    name: 'Ed Sheeran',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650579309/RITHMEOK/artists/EDSHEERAN_w0eqxr.jpg',
    description:
      'Edward Christopher Sheeran (Halifax, Inglaterra, 17 de febrero de 1991), más conocido como Ed Sheeran, es un músico y cantante británico.\n A corta edad, comenzó a cantar en la iglesia a la que asistía y también aprendió a tocar la guitarra. \n A los dieciséis años abandonó la escuela secundaria, y se trasladó a Londres para proseguir una carrera artística. Después de publicar un EP de forma independiente a principios de 2011, captó la atención de Elton John quien lo puso en contacto con el sello Asylum Records y firmó un acuerdo de grabación.\n En septiembre de 2011 lanzó su álbum debut +, que tuvo un éxito comercial y en la lista musical de discos de Reino Unido. El álbum consta del sencillo «The A Team» que estuvo nominada a un Grammy por canción del año',
    crew: [
      'Dua Lipa - flauta',
      'Tina turner - Mandurria',
      'carlos santana - Voz y teclado',
      'Elvis Presley - Voz',
      'Rod Stewart - guitarra eléctrica'
    ],
    genres: ['Pop', 'Uk pop']
  },
  {
    id: 9,
    name: 'BTS',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650579309/RITHMEOK/artists/BTS_yiwr4i.jpg',
    description:
      'BTS (en hangul, 방탄소년단; romanización revisada del coreano, Bangtan Sonyeondan) es un grupo surcoreano formado en Seúl en 2010 y que debutó en 2013 bajo la compañía Big Hit Music.\n Está compuesto por siete integrantes: Jin, Suga, J-Hope, RM, Jimin, V y Jungkook, quienes coescriben y coproducen la mayor parte de su material discográfico.\n A pesar de haber sido creado con un estilo principalmente hip hop, ha llegado a incorporar una gran variedad de géneros en su repertorio musical.',
    crew: [
      'Adele - Mandurria',
      'Bruno Mars - Voz y teclado',
      'Post Malone - Voz',
      'Bob dylan - guitarra eléctrica'
    ],
    genres: ['Pop', 'Uk pop']
  },
  {
    id: 10,
    name: 'Ariana Grande',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650579309/RITHMEOK/artists/ARIANAGRANDE_bzgols.jpg',
    description:
      'Ariana Grande Butera (Boca Ratón, Florida, 26 de junio de 1993)​ es una cantante, compositora, actriz, productora musical y diseñadora de modas estadounidense.\n Comenzó su carrera en 2008 en el musical Trece de Broadway, antes de interpretar el papel de Cat Valentine en la serie de televisión Victorious (2010-2013) de Nickelodeon y en la secuela, Sam & Cat (2013-2014).\n También ha aparecido en otros papeles de teatro y televisión y ha prestado su voz a series de televisión y películas animadas',
    crew: [
      'Allison Kaye - Mandurria',
      'Scooter Braun - violín',
      'Scrappy - Voz',
      'Dan Kanter - guitarra '
    ],
    genres: ['Pop', 'Post-teen pop']
  }
]

const eachOfartists = artistsJSON.map((artist) => new Artists(artist))

mongoose
  .connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    const allartists = await Artists.find()
    if (allartists.length) {
      await Artists.collection.drop()
    }
  })
  .catch((err) => console.log('Error deleting RYTHMEOK artists', err))
  .then(async () => {
    await Artists.insertMany(eachOfartists)
    console.log(
      'Congrats RYTHMEOK team!, you already have data from RYTHMEOK artists in your DB'
    )
  })
  .catch((err) =>
    console.log('You cannot create RYTHMEOK artists. Sorry!', err)
  )
  .finally(() => mongoose.disconnect())
