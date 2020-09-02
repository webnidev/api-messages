module.exports = {
    messageSerializer(message){
        const messageSerializer = {
            ...message,
            url:"https://localhost:5000/redirect/"+message.url
        }
        return messageSerializer
    },
    messagesSerializer(req, messages){
        let messagesSerializer = []
        for(let i = 0; i<=messages.length-1;i++){
            let message = {
                "message_id":messages[i].message_id,
                "message": messages[i].message,
                "url":  req.protocol+"://"+req.get('host')+"/redirect/messages/"+messages[i].url}
            messagesSerializer.push(message)
            //messages[i].url = "https://localhost:5000/redirect/"+messages[i].url
        }
        return messagesSerializer
    }
}