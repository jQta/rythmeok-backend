const mongoose = require('mongoose')
const Events = require('../models/events')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const urlDB = process.env.MONGO_URI

const eventsJSON = [
  {
    id: 1,
    date: '08 Noviembre 2022',
    time: '12:00',
    artist: '6266d54fd2b73532b0c3e4d5',
    hall: '626572cad470b841b4f4ff4d',
    price: 25,
    assistants: 16
  },
  {
    id: 2,
    date: '08 Noviembre 2022',
    time: '14:00',
    artist: '6266d54fd2b73532b0c3e4cf',
    hall: '626572cad470b841b4f4ff4b',
    price: 15,
    assistants: 36
  },
  {
    id: 3,
    date: '09 Noviembre 2022',
    time: '10:00',
    artist: '6266d54fd2b73532b0c3e4d3',
    hall: '626572cad470b841b4f4ff4f',
    price: 60,
    assistants: 316
  },
  {
    id: 4,
    date: '09 Noviembre 2022',
    time: '12:00',
    artist: '6266d54fd2b73532b0c3e4d4',
    hall: '626572cad470b841b4f4ff4c',
    price: 25,
    assistants: 16
  },
  {
    id: 5,
    date: '09 Noviembre 2022',
    time: '14:00',
    artist: '6266d54fd2b73532b0c3e4d6',
    hall: '626572cad470b841b4f4ff51',
    price: 35,
    assistants: 10
  },
  {
    id: 6,
    date: '09 Noviembre 2022',
    time: '20:00',
    artist: '6266d54fd2b73532b0c3e4d7',
    hall: '626572cad470b841b4f4ff54',
    price: 40,
    assistants: 20
  },
  {
    id: 7,
    date: '10 Noviembre 2022',
    time: '14:00',
    artist: ['6266d54fd2b73532b0c3e4d0'],
    hall: '626572cad470b841b4f4ff52',
    price: 15,
    assistants: 150
  },
  {
    id: 8,
    date: '10 Noviembre 2022',
    time: '21:00',
    artist: '6266d54fd2b73532b0c3e4d1',
    hall: '626572cad470b841b4f4ff53',
    price: 20,
    assistants: 10
  }
]

const eachOfevents = eventsJSON.map((event) => new Events(event))

mongoose
  .connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    const allevents = await Events.find()
    if (allevents.length) {
      await Events.collection.drop()
    }
  })
  .catch((err) => console.log('Error deleting RYTHMEOK events', err))
  .then(async () => {
    await Events.insertMany(eachOfevents)
    console.log(
      'Congrats RYTHMEOK team!, you already have data from RYTHMEOK events in your DB'
    )
  })
  .catch((err) => console.log('You cannot create RYTHMEOK events. Sorry!', err))
  .finally(() => mongoose.disconnect())
