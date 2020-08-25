const Message = require('../models/Message')
module.exports = {
    messages(req, res){
        
        Message.all(function(messages){
            return res.send({"messages":messages})
        })

    },
    
    addMessage(req, res){
        const keys = Object.keys(req.body)
        for(key of keys){
            if(req.body[key] == ""){
               return res.send("Preencha os campos")
             }
        }
       Message.create(req.body, res, function(message){
           return res.send(message)
       })
    },
    
    showMessage(req, res){
        const {id} = req.params
        Message.show(id, res, function(message){
            return res.send(message)
        })
    },
    editMessage(req, res){
        const {id} = req.params
        const data = req.body
        Message.update(id, data, res, function(message){
            return res.send(message)
        })
    },
    
    deleteMessage(req, res){
        const {id} = req.params
        Message.delete(id, res, function(message){
            return res.send(message)
        })
    }  
}