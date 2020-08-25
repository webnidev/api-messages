const db = require('../../config/database') 
const date = require('../utils/dates')

module.exports = {
    all(callback){
        const query = `SELECT * FROM notifications`
       db.query(query, function(err, results){
            if (err) return res.send("Houve um erro com sua busca")
            callback(results.rows)
       })
    },
    show(id, res, callback){
        const query = `SELECT * FROM notication WHERE notification_id = $1`
        const values = [id]
        db.query(query, values,  function(err, results){
            console.log(err)
            if (err) return res.send(err)
            callback(results.rows[0])
        })
    },
    create(data,res, callback){
        console.log(data)
        const query = `INSERT INTO notifications (notification, url, category_id, created_at) VALUES($1, $2, $3, $4) RETURNING notification_id`
        const values = [data.notification, data.url, data.category_id, date.date()]
        db.query(query, values, function(err, results){
            console.log(err)
            if (err) return res.send(err)
            callback(results.rows[0])
        })
    },
    update(id, data, res, callback){
        const query = `UPDATE notifications SET notification = $1, url = $2, category_id = $3 WHERE notification_id = $4 RETURNING *`
        const values = [data.notification, data.url, data.category_id, id]
        db.query(query, values, function(err, results){
            console.log(err)
            if (err) return res.send(err)
            callback(results.rows[0])
        })
    },
    delete(id, res, callback){
        const query = `DELETE FROM notifications WHERE notification_id = $1 RETURNING *`
        const values = [id]
        db.query(query, values, function(err, results){
            console.log(err)
            if(err) return res.send(err)
            callback(results.rows[0])
        })
    }
}