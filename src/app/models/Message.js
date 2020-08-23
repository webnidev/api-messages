const db = require('../../config/database') 

module.exports = {
    all(callback){
        const query = `SELECT * FROM messages`
       db.query(query, function(err, results){
            if (err) return res.send("Houve um erro com sua busca")
            callback(results.rows)
       })
    },
    show(){

    },
    create(data, callback){
        const query = `INSERT INTO messages (message, url, created_at) VALUES($1, $2, $3) RETURNING id`
        const values = [data.message,data.url,'2020-08-21']
        db.query(query, values, function(err, results){
            if (err) return res.send("Erro de ao salvar os dados")
            callback(results.rows[0])
        })

    },
    update(){

    },
    delete(){

    }


}