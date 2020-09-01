const db = require('../../config/database') 

module.exports={
    recursao(res, callback){
        const query = `SELECT message_id FROM messages WHERE url = $1`
        //const values = [this.createCode()]
        const values = ["sd4RoX"]
        db.query(query, values, function(err, results){
            if (err){
                console.log(err)
                return res.send(err)
            }
            if(results.rows[0]){
                return this.recursao(res, callback)
            }
            return callback(results.rows[0])
        })

        
    },
    createCode(){
        let code = ""
        for(let i = 0; i<=6; i++){
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