const controller = require('../controllers/users')
const validate = require('../controllers/users.validate')
const AuthController = require('../controllers/auth')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')
const User = require('../models/user')
/*
 * Users routes
 */

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  controller.getItems
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.createItem,
  controller.createItem
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.getItem,
  controller.getItem
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.updateItem,
  controller.updateItem
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.deleteItem,
  controller.deleteItem
)

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
