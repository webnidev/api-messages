const db = require('../../config/database') 
const date = require('../utils/dates')
module.exports={
    create(data,res, callback){
        const query = `INSERT INTO reports (user_ip, user_agent, url, date_time) VALUES($1, $2, $3, $4) RETURNING report_id`
        
        const values = [data.userIp, data.userAgent, data.url, date.date()]
        db.query(query, values, function(err, results){
            
            if (err){
                console.log(err)
                return res.send(err)
            }
            callback(results.rows[0])
            
        })

    },
    show(slug, res, callback){
        const query = `SELECT url_redirect FROM messages WHERE url = $1`
        db.query(query, [slug],  function(err, results){           
            if (err) {
                console.log(err)
                return res.send(err)
            }
            
            callback(results.rows[0])
        })
    },
    all(res, callback){
        const query = `SELECT * FROM reports`
       db.query(query, function(err, results){
            if (err){
                console.log(err)
                return res.send("Houve um erro com sua busca")
            } 
            callback(results.rows)
       })
    }
}