const Message = require('../models/Message')
module.exports = {
    messages(req, res){
        
        Message.all(function(messages){
            return res.send({"messages":messages})
        })
        //return res.redirect("https://infsolution.com.br")
    },
    
    addMessage(req, res){
        const keys = Object.keys(req.body)
        for(key of keys){
            if(req.body[key] == ""){
               return res.send("Preencha os campos")
             }
        }
       Message.create(req.body, function(message){
           return res.send(message)
       })
    },
    
    
    editMessage(){
        return res.send("nova mensagem")
    },
    
    deleteMessage(){
        return res.send("nova mensagem")
    },
    
    enotifications(){
        return res.send("nova mensagem")
    },
    
    addNotification(){
        return res.send("nova mensagem")
    },
    editNotification(){
        return res.send("nova mensagem")
    },
    deleteNotification(){
        return res.send("nova mensagem")
    },
    
    categories(){
        return res.send("nova mensagem")
    },
    
    addCategory(){
        return res.send("nova mensagem")
    },
    
    editCategory(){
        return res.send("nova mensagem")
    },
    deleteCategory(){
        return res.send("nova mensagem")
    }
}