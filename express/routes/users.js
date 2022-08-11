const express = require('express')
const router = express.Router()

router.route('/')
.get((req, res) => {
  res.send('User List')
}).post((req, res) => {
  res.send('Create User')
})

router.get('/new', (req, res) => {
  res.render('users/new', { firstName: 'Test' })
})

// dynamic route (make sure these are always placed AFTER static routes)
router.route('/:id')
.get((req, res) => {
  console.log(req.user)
  res.send(`Get user with ID ${req.params.id}`)
}).put((req, res) => {
  req.params.id
  res.send(`Get user with ID ${req.params.id}`)
}).delete((req, res) => {
  req.params.id
  res.send(`Get user with ID ${req.params.id}`)
})

const users = [{name: 'David'}, {name: 'Marti'}]

router.param('id', (req, res, next, id) => {
  req.user = users[id]
  next()
})

module.exports = router