const express = require('express')
const Artist = require('../models/artists')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const artists = await Artist.find()
    return res.status(200).json(artists)
  } catch (error) {
    return next(error)
  }
})

router.get('/:name', async (req, res, next) => {
  const { name } = req.params

  try {
    const artistByName = await Artist.find({ name })
    return res.status(200).json(artistByName)
  } catch (error) {
    return next(error)
  }
})

router.get('/id/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const artistById = await Artist.find({ id })
    return res.status(200).json(artistById)
  } catch (error) {
    return next(error)
  }
})

module.exports = router
