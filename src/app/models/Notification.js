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
    show(){

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
    update(){

    },
    delete(){

    }
}