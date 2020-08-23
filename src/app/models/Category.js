const db = require('../../config/database') 

module.exports={
	
	add(data, res, callback){
		const query = `INSERT INTO categories(name)VALUES($1) RETURNING category_id`
		const values = [data.name]
		console.log(values)
		db.query(query, values, function(err, results){
			console.log(err)
			if (err) return res.send(err)
            callback(results.rows[0])
		})
	},

	all(callback){
		const query = `SELECT * FROM categories`
		db.query(query, function(err, results){
			if (err) return res.send("Houve um erro com sua busca")
			callback(results.rows)
		})
	},

	

	show(req, res){
		const query = `SELECT * FROM categories WHERE category_id=${id}`
        db.query(query, function(err, results){
            if (err) return res.send(err)
            callback(results.rows)
        })

	}
}