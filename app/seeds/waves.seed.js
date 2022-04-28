const mongoose = require('mongoose')
const Waves = require('../models/waves')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const urlDB = process.env.MONGO_URI

const wavesJSON = [
  {
    id: 1,
    name: 'Hot fm',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735449/RITHMEOK/waves/0087_t_hot-fm-logo_aibqx1.png'
  },
  {
    id: 2,
    name: 'Civitan radio',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735449/RITHMEOK/waves/0087_t_civitan-radio-logo_5_ttaiqu.png'
  },
  {
    id: 3,
    name: 'Biz talk radio',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735448/RITHMEOK/waves/0087_t_biz-talk-radio-logo_4_sq7uvb.png'
  },
  {
    id: 4,
    name: 'Buddha radio',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735448/RITHMEOK/waves/0087_t_buddha-radio-logo_3_mxmibr.png'
  },
  {
    id: 5,
    name: 'ESPN radio',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735448/RITHMEOK/waves/0087_t_espn-logo_2_h2ljok.png'
  },
  {
    id: 6,
    name: 'Hot 91.9 FM',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735448/RITHMEOK/waves/WAVES_wejcu7.png'
  },
  {
    id: 7,
    name: 'Beach Chill relaxing music radio',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735448/RITHMEOK/waves/0087_t_beach-chill-logo_12_sg8e8w.png'
  },
  {
    id: 8,
    name: 'DJAM radio',
    image:
      'https://res.cloudinary.com/dahswyr0k/image/upload/v1650735448/RITHMEOK/waves/0087_t_djam-radio-logo_6_q2l61r.png'
  }
]

const eachOfwaves = wavesJSON.map((wave) => new Waves(wave))

mongoose
  .connect(urlDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const allwaves = await Waves.find()
    if (allwaves.length) {
      await Waves.collection.drop()
    }
  })
  .catch((err) => console.log('Error deleting RYTHMEOK waves', err))
  .then(async () => {
    await Waves.insertMany(eachOfwaves)
    console.log(
      'Congrats RYTHMEOK team!, you already have data from RYTHMEOK waves in your DB'
    )
  })
  .catch((err) => console.log('You cannot create RYTHMEOK waves. Sorry!', err))
  .finally(() => mongoose.disconnect())
