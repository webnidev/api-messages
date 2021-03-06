const Message = require('../models/Message')
const Report = require('../models/Report')
const libs = require('../utils/libs')


module.exports = {
    messages(req, res){
        Message.all(req, res, function(messages){
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
        let code = libs.createCode()
        libs.recursao(res, code,"notification", function(value){
            if(value){
                return res.send("Codigo duplicado, Tente novamente")
            }else{
                req.body.code = code
                Message.create(req.body, res, function(message){
                    return res.send(message)
                })
            }
            
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
