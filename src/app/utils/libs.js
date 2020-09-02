const db = require('../../config/database') 

module.exports={
    recursao(res, values, table, callback){
        const query = `SELECT ${table}_id FROM ${table}s WHERE url = $1`   
        db.query(query, [values], function(err, results){
            if(err) return res.send(err)
            callback(results.rows[0])
        })
    },
    createCode(){
        let code = ""
        for(let i = 0; i<=5; i++){
            code += String.fromCharCode(this.getChar(this.roundRange()))
        }
        return code
    },
    getChar(range){
        return Math.floor(Math.random() * (range.max - range.min) ) + range.min
    },
    roundRange(){
        range = {
            1:{"min":48, "max":57},
            2:{"min":65, "max":90},
            3:{"min":97, "max":122}
        }
        return range[Math.floor(Math.random() * 3) + 1]
    }
}