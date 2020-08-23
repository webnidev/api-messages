const express = require('express')
const messageController = require('./app/controllers/messageController')
const categoryController = require('./app/controllers/categoryController')
const routes = express.Router()


routes.get('/message', messageController.messages)
routes.post('/message', messageController.addMessage)
routes.get('/category', categoryController.categories)
routes.post('/category', categoryController.addCategory)
routes.get('/category/:id', categoryController.category)
//routes.get('/message')
module.exports = routes