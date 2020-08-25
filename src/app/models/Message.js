const db = require('../../config/database') 
const date = require('../utils/dates')
module.exports = {
    all(callback){
        const query = `SELECT * FROM messages`
       db.query(query, function(err, results){
            if (err) return res.send("Houve um erro com sua busca")
            callback(results.rows)
       })
    },
    show(id, res, callback){

        const query = `SELECT * FROM messages WHERE message_id = $1`
        const values = [id]
        db.query(query, values,  function(err, results){
            console.log(err)
            if (err) return res.send(err)
            callback(results.rows[0])
        })

    },
    create(data,res, callback){
        const query = `INSERT INTO messages (message, url, created_at) VALUES($1, $2, $3) RETURNING message_id`
        
        const values = [data.message, data.url, date.date()]
        db.query(query, values, function(err, results){
            console.log(err)
            if (err) return res.send(err)
            callback(results.rows[0])
        })

    },
    update(id, data, res, callback){
        const query = `UPDATE messages SET message = $1, url = $2 WHERE message_id = $3 RETURNING *`
        const values = [data.message, data.url, id]
        db.query(query, values, function(err, results){
            console.log(err)
            if (err) return res.send(err)
            callback(results.rows[0])
        })


    },
    delete(id, res, callback){
        const query = `DELETE FROM messages WHERE message_id = $1 RETURNING *`
        const values = [id]
        db.query(query, values, function(err, results){
            console.log(err)
            if(err) return res.send(err)
            callback(results.rows[0])
        })
    }


}