const express = require('express')
const router = express.Router()
require('../../config/passport')

const User = require('../models/user')

router.get('/', async (req, res) => {
  try {
    const user = await User.find().populate('purchases')
    return res.status(200).json(user)
  } catch (err) {
    return res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const userById = await User.findById(id).populate('purchases')
    return res.status(200).json(userById)
  } catch (err) {
    return res.status(500).json(err)
  }
})

router.put('/add-event', async (req, res, next) => {
  try {
    const { userId } = req.body
    const { eventId } = req.body
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $push: {
        purchases: eventId
      }
    })
    return res.status(200).json(updatedUser)
  } catch (error) {
    return next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const userModify = new User(req.body)
    userModify._id = id
    const userUpdated = await User.findByIdAndUpdate(id, userModify)
    return res.status(200).json(userUpdated)
  } catch (error) {
    return next(error)
  }
})

module.exports = router
