const db = require('../../config/database') 
const notificationSerializer = require('../serializers/notificationSerializer')
const date = require('../utils/dates')
const libs = require('../utils/libs')
module.exports = {
    all(req, res, callback){
        const query = `SELECT * FROM notifications  ORDER BY notification_id DESC`
       db.query(query, function(err, results){
        if (err){
            console.log(err)
            return res.send("Houve um erro com sua busca")
        } 
            callback(notificationSerializer.notificationsSerializer(req,results.rows))
       })
    },
    show(id, res, callback){
        const query = `SELECT * FROM notifications WHERE notification_id = $1`
        const values = [id]
        db.query(query, values,  function(err, results){
            if (err) {
                console.log(err)
                return res.send(err)
            }
            callback(results.rows[0])
        })
    },
    create(data,res, callback){
        console.log(data)
        const query = `INSERT INTO notifications (notification, url, url_redirect, category_id, created_at) VALUES($1, $2, $3, $4, $5) RETURNING notification_id`
        const values = [data.notification, libs.createCode(),data.url, data.category_id, date.date()]
        db.query(query, values, function(err, results){
            if (err) {
                console.log(err)
                return res.send(err)
            }
            callback(results.rows[0])
        })
    },
    update(id, data, res, callback){
        const query = `UPDATE notifications SET notification = $1, url_redirect = $2, category_id = $3 WHERE notification_id = $4 RETURNING *`
        const values = [data.notification, data.url, data.category_id, id]
        db.query(query, values, function(err, results){
            if (err) {
                console.log(err)
                return res.send(err)
            }
            callback(results.rows[0])
        })
    },
    delete(id, res, callback){
        const query = `DELETE FROM notifications WHERE notification_id = $1 RETURNING *`
        const values = [id]
        db.query(query, values, function(err, results){
            if (err) {
                console.log(err)
                return res.send(err)
            }
            callback(results.rows[0])
        })
    }
}