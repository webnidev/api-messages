const express = require('express')
const messageController = require('./app/controllers/messageController')

const routes = express.Router()


routes.get('/message', messageController.messages)
routes.post('/message', messageController.addMessage)
//routes.get('/message')
module.exports = routes