const express = require('express')
const Hall = require('../models/halls')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const halls = await Hall.find()
    return res.status(200).json(halls)
  } catch (error) {
    return next(error)
  }
})

router.get('/:name', async (req, res, next) => {
  const { name } = req.params

  try {
    const hallByName = await Hall.find({ name })
    return res.status(200).json(hallByName)
  } catch (error) {
    return next(error)
  }
})

router.get('/id/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const hallById = await Hall.find({ id })
    return res.status(200).json(hallById)
  } catch (error) {
    return next(error)
  }
})

module.exports = router
