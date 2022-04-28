const express = require('express')
const Magazine = require('../models/magazines')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const magazines = await Magazine.find()
    return res.status(200).json(magazines)
  } catch (error) {
    return next(error)
  }
})

router.get('/:name', async (req, res, next) => {
  const { name } = req.params

  try {
    const magazineByName = await Magazine.find({ name })
    return res.status(200).json(magazineByName)
  } catch (error) {
    return next(error)
  }
})

router.get('/id/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const magazineById = await Magazine.find({ id })
    return res.status(200).json(magazineById)
  } catch (error) {
    return next(error)
  }
})

module.exports = router
