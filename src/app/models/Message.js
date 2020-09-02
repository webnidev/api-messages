const db = require('../../config/database') 
const serializer = require('../serializers/messageSerializer')
const date = require('../utils/dates')
const libs = require('../utils/libs')
const report = require('./Report')
module.exports = {
    all(req, res, callback){
        const query = `SELECT * FROM messages ORDER BY message_id DESC`
       db.query(query, function(err, results){
            if (err){
                console.log(err)
                return res.send("Houve um erro com sua busca")
            } 
            callback(serializer.messagesSerializer(req, results.rows))
       })
    },
    show(id, res, callback){

        const query = `SELECT * FROM messages WHERE message_id = $1`
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
        const query = `INSERT INTO messages (message, url, url_redirect, created_at) VALUES($1, $2, $3, $4) RETURNING message, url_redirect`
        
        const values = [data.message, data.code, data.url, date.date()]
        db.query(query, values, function(err, results){
            
            if (err){
                console.log(err)
                return res.send(err)
            }
            callback(results.rows[0])
        })

    },
    update(id, data, res, callback){
        const query = `UPDATE messages SET message = $1, url = $2 WHERE message_id = $3 RETURNING *`
        const values = [data.message, data.url, id]
        db.query(query, values, function(err, results){
            if (err){
                console.log(err)
                return res.send(err)
            }
            callback(results.rows[0])
        })


    },
    delete(id, res, callback){
        const query = `DELETE FROM messages WHERE message_id = $1 RETURNING *`
        const values = [id]
        db.query(query, values, function(err, results){
            if (err){
                console.log(err)
                return res.send(err)
            }
            callback(results.rows[0])
        })
    },
    


}