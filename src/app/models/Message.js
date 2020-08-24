const db = require('../../config/database') 

module.exports = {
    all(callback){
        const query = `SELECT * FROM messages`
       db.query(query, function(err, results){
            if (err) return res.send("Houve um erro com sua busca")
            callback(results.rows)
       })
    },
    show(id, res, callback){

        const query = `SELECT * FROM messages WHERE message_id=${id}`
        db.query(query, function(err, results){
            if (err) return res.send(err)
            callback(results.rows)
        })

    },
    create(data,res, callback){
        const query = `INSERT INTO messages (message, url, category_id, created_at) VALUES($1, $2, $3, $4) RETURNING message_id`
        if(!data.category_id){
            data.category_id = '1'
        }
        const values = [data.message, data.url, data.category_id, data.created_at]
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