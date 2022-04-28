const mongoose = require('mongoose')
const Users = require('../models/user')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const urlDB = process.env.MONGO_URI

const usersJSON = [
  {
    name: 'Torcuato',
    email: 'torcuatogrima@gmail.com',
    role: 'admin',
    password: 'whatthefuck',
    friends: [
      '626ab69a6fa43e1dec1ef13c',
      '626ab69a6fa43e1dec1ef13d',
      '626ab69a6fa43e1dec1ef13e'
    ],
    purchases: [
      '626aab41dfc2388e64f3a2c8',
      '626aab41dfc2388e64f3a2cd',
      '626aab41dfc2388e64f3a2cf'
    ]
  },
  {
    name: 'Sara',
    email: 'sara@gmail.com',
    role: 'admin',
    password: 'whatthefuck',
    friends: ['626ab69a6fa43e1dec1ef13b'],
    purchases: ['626aab41dfc2388e64f3a2c9']
  },
  {
    name: 'David',
    email: 'david@gmail.com',
    role: 'admin',
    password: 'whatthefuck',
    friends: ['626ab69a6fa43e1dec1ef13b'],
    purchases: ['626aab41dfc2388e64f3a2ca']
  },
  {
    name: 'Jorge',
    email: 'jorge@gmail.com',
    role: 'admin',
    password: 'whatthefuck',
    friends: ['626ab69a6fa43e1dec1ef13b'],
    purchases: ['626aab41dfc2388e64f3a2cb']
  },
  {
    name: 'Sergi',
    email: 'sergi@gmail.com',
    role: 'admin',
    password: 'whatthefuck',
    friends: [],
    purchases: ['626aab41dfc2388e64f3a2cc', '626aab41dfc2388e64f3a2cd']
  }
]

const eachOfusers = usersJSON.map((user) => new Users(user))

mongoose
  .connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    const allusers = await Users.find()
    if (allusers.length) {
      await Users.collection.drop()
    }
  })
  .catch((err) => console.log('Error deleting RYTHMEOK users', err))
  .then(async () => {
    await Users.insertMany(eachOfusers)
    console.log(
      'Congrats RYTHMEOK team!, you already have data from RYTHMEOK users in your DB'
    )
  })
  .catch((err) => console.log('You cannot create RYTHMEOK users. Sorry!', err))
  .finally(() => mongoose.disconnect())
