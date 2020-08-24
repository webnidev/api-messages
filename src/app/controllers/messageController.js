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
       Message.create(req.body, res, function(message){
           return res.send(message)
       })
    },
    
    showMessage(){

    },
    editMessage(){
        return res.send("nova mensagem")
    },
    
    deleteMessage(){
        return res.send("nova mensagem")
    }  
}