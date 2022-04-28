const express = require('express')
const Event = require('../models/events')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const events = await Event.find().populate('idartist').populate('idhall')
    return res.status(200).json(events)
  } catch (error) {
    return next(error)
  }
})

router.get('/:name', async (req, res, next) => {
  const { name } = req.params

  try {
    const eventByName = await Event.find({ name })
    return res.status(200).json(eventByName)
  } catch (error) {
    return next(error)
  }
})

router.get('/id/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const eventById = await Event.find({ id })
    return res.status(200).json(eventById)
  } catch (error) {
    return next(error)
  }
})

module.exports = router
