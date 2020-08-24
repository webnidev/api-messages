const Notification = require('../models/Notification')
module.exports = {
    notification(req, res){
        Notification.all(function(notifications){
            return res.send({"notifications":notifications})
        })
    },
    addNotification(req, res){
        const keys = Object.keys(req.body)
        for(key of keys){
            if(req.body[key] == ""){
               return res.send("Preencha os campos")
             }
        }
       Notification.create(req.body, res, function(notification){
           return res.send(notification)
       })
    },
    showNotification(){

    },
    editeNotification(){

    },
    delNotification(){

    }
}