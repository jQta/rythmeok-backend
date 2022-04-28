const mongoose = require('mongoose')
const Styles = require('../models/styles')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const urlDB = process.env.MONGO_URI

const stylesJSON = [
  {
    id: 1,
    name: 'Rock',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735433/RITHMEOK/styles/rock_wvjlcd.png'
  },
  {
    id: 2,
    name: 'POP',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735433/RITHMEOK/styles/pop_khh7iq.png'
  },
  {
    id: 3,
    name: 'RAP',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735433/RITHMEOK/styles/rap_p6esrj.png'
  },
  {
    id: 4,
    name: 'R&B',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735433/RITHMEOK/styles/r_b_re1kla.png'
  },
  {
    id: 5,
    name: 'Country',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735432/RITHMEOK/styles/country_o7vffj.png'
  },
  {
    id: 6,
    name: 'Soundtracks',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735433/RITHMEOK/styles/soundtracks_nrs10p.png'
  },
  {
    id: 7,
    name: 'Adult contemporany',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735433/RITHMEOK/styles/adultcontemporany_tazhw3.png'
  },
  {
    id: 8,
    name: 'EDM',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735433/RITHMEOK/styles/edm_tw6uzt.png'
  },
  {
    id: 9,
    name: 'Christmas',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735433/RITHMEOK/styles/christmas_kmtmf1.png'
  },
  {
    id: 10,
    name: 'JUKEBOX',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735433/RITHMEOK/styles/jukebox_kktrsz.png'
  },
  {
    id: 11,
    name: 'Gospel',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735432/RITHMEOK/styles/gospel_jy5wfv.png'
  },
  {
    id: 12,
    name: 'Albums',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735432/RITHMEOK/styles/albums_maefux.png'
  },
  {
    id: 13,
    name: 'Love',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735432/RITHMEOK/styles/love_j7y3c9.png'
  },

  {
    id: 14,
    name: 'EZ listening',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735432/RITHMEOK/styles/ezlistening_vqtepo.png'
  },

  {
    id: 15,
    name: 'Compilations',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735432/RITHMEOK/styles/compilations_xlujdf.png'
  }
]

const eachOfstyles = stylesJSON.map((style) => new Styles(style))

mongoose
  .connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    const allstyles = await Styles.find()
    if (allstyles.length) {
      await Styles.collection.drop()
    }
  })
  .catch((err) => console.log('Error deleting RYTHMEOK magazines', err))
  .then(async () => {
    await Styles.insertMany(eachOfstyles)
    console.log(
      'Congrats RYTHMEOK team!, you already have data from RYTHMEOK styles in your DB'
    )
  })
  .catch((err) => console.log('You cannot create RYTHMEOK styles. Sorry!', err))
  .finally(() => mongoose.disconnect())
