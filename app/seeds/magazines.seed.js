const mongoose = require('mongoose')
const Magazines = require('../models/magazines')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const urlDB = process.env.MONGO_URI

const magazinesJSON = [
  {
    id: 1,
    name: 'WIRE',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735413/RITHMEOK/magazines/wire_hkxywd.svg'
  },
  {
    id: 2,
    name: 'Waves magazine',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735413/RITHMEOK/magazines/waves_ersnxa.jpg'
  },
  {
    id: 3,
    name: 'Zero music magazine',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735413/RITHMEOK/magazines/Zero_Music_u5djgg.png'
  },
  {
    id: 4,
    name: 'SPIN',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735413/RITHMEOK/magazines/spin_adt3jx.png'
  },
  {
    id: 5,
    name: 'Juice',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735412/RITHMEOK/magazines/Juice_Hip_Hop_wsbpn7.svg'
  },
  {
    id: 6,
    name: 'NYLON',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735411/RITHMEOK/magazines/Nylon_ptdxho.svg'
  },
  {
    id: 7,
    name: 'RollingStone',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735411/RITHMEOK/magazines/Rolling_Stone_cehzfg.svg'
  },
  {
    id: 8,
    name: 'Computer music',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735411/RITHMEOK/magazines/computermusic_hfb6c5.svg'
  },
  {
    id: 9,
    name: 'Music week',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735411/RITHMEOK/magazines/music-week_lgeibt.svg'
  },
  {
    id: 10,
    name: 'Billboard',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735411/RITHMEOK/magazines/Billboard_tntcju.svg'
  },
  {
    id: 11,
    name: 'Dod magazine',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735411/RITHMEOK/magazines/dod_dvzwlx.png'
  }
]

const eachOfmagazines = magazinesJSON.map((magazine) => new Magazines(magazine))

mongoose
  .connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    const allmagazines = await Magazines.find()
    if (allmagazines.length) {
      await Magazines.collection.drop()
    }
  })
  .catch((err) => console.log('Error deleting RYTHMEOK magazines', err))
  .then(async () => {
    await Magazines.insertMany(eachOfmagazines)
    console.log(
      'Congrats RYTHMEOK team!, you already have data from RYTHMEOK magazines in your DB'
    )
  })
  .catch((err) =>
    console.log('You cannot create RYTHMEOK magazines. Sorry!', err)
  )
  .finally(() => mongoose.disconnect())
