const express = require('express')
const messageController = require('./app/controllers/messageController')
const categoryController = require('./app/controllers/categoryController')
const notificationController = require('./app/controllers/notificationController')
const reportController = require('./app/controllers/reportController')
const routes = express.Router()

routes.get('/', function(req, res){
	return res.send({
		"Notificações":{
			"Endpoint 01":"'/notification' Com get Exibe todas as notificações",
			"Endpoint 02":"'/notification' Com post cria uma notificação",
			"Endpoint 03":"'/notification/id' Com get exibe uma notificação",
			"Endpoint 04":"'/notification/id' Com put eidta uma notificação",
			"Endpoint 05":"'/notification/id' Com delete apaga uma notificação"
		},
		"Categorias":{
			"Endpoint 06":"'/category' Com get Exibe todas as categorias",
			"Endpoint 07":"'/category' Com post cria uma categoria",
			"Endpoint 08":"'/category/id' Com get exibe uma categorias",
			"Endpoint 09":"'/category/id' Com put eidta uma categorias",
			"Endpoint 10":"'/category/id' Com delete apaga uma categorias"
		},
		"Tutoriais":{
			"Endpoint 11":"'/message' Com get Exibe todas as tutoriais",
			"Endpoint 12":"'/message' Com post cria uma tutorial",
			"Endpoint 13":"'/message/id' Com get exibe uma tutorial",
			"Endpoint 14":"'/message/id' Com put eidta uma tutorial",
			"Endpoint 15":"'/message/id' Com delete apaga uma tutorial"
		},
		
	})
})

routes.get('/category', categoryController.categories)
routes.post('/category', categoryController.addCategory)
routes.get('/category/:id', categoryController.category)
routes.put('/category/:id', categoryController.editCategory)
routes.delete('/category/:id', categoryController.deleteCategory)

routes.get('/message', messageController.messages)
routes.post('/message', messageController.addMessage)
routes.get('/message/:id', messageController.showMessage)
routes.put('/message/:id', messageController.editMessage)
routes.delete('/message/:id', messageController.deleteMessage)


routes.get('/notification', notificationController.notification)
routes.post('/notification', notificationController.addNotification)
routes.get('/notification/:id', notificationController.showNotification)
routes.put('/notification/:id', notificationController.editeNotification)
routes.delete('/notification/:id', notificationController.deleteNotification)

routes.get('/redirect/:table/:slug',reportController.redirect)
routes.get('/report', reportController.report)
module.exports = routes