module.exports = {
    notificationSerializer(notification){
        const notificationSerializer = {
            ...notification,
            url:"https://localhost:5000/redirect/"+notification.url
        }
        return notificationSerializer
    },
    notificationsSerializer(req, notifications){
        let notificationsSerializer = []
        for(let i = 0; i<=notifications.length-1;i++){
            let notification = {
                "notification_id":notifications[i].notification_id,
                "notification": notifications[i].notification,
                "url":  req.protocol+"://"+req.get('host')+"/redirect/notifications/"+notifications[i].url}
            notificationsSerializer.push(notification)
            //notifications[i].url = "https://localhost:5000/redirect/"+notifications[i].url
        }
        return notificationsSerializer
    }
}