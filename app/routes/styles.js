const express = require('express')
const Style = require('../models/styles')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const styles = await Style.find()
    return res.status(200).json(styles)
  } catch (error) {
    return next(error)
  }
})

router.get('/:name', async (req, res, next) => {
  const { name } = req.params

  try {
    const styleByName = await Style.find({ name })
    return res.status(200).json(styleByName)
  } catch (error) {
    return next(error)
  }
})

router.get('/id/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const styleById = await Style.find({ id })
    return res.status(200).json(styleById)
  } catch (error) {
    return next(error)
  }
})

module.exports = router
