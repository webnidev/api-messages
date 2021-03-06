const Category = require('../models/Category')

module.exports = {
	categories(req, res){
		Category.all(res, function(categories){
			return res.send({"categories":categories})
		})
	},

	addCategory(req, res){
		const keys = Object.keys(req.body)
		for(key of keys){
            if(req.body[key] == ""){
               return res.send("Preencha os campos")
             }
        }
        Category.add(req.body, res, function(category){
        	return res.send(category)
        })


	},

	category(req, res){
		const {id} = req.params
		Category.show(id, res, function(category){
			return res.send(category)
		})
	},

	editCategory(req, res){
		const {id} = req.params
		const data = req.body.name
		Category.edit(id, data, res, function(category){
			return res.send(category)
		})
	},

	deleteCategory(req, res){
		const {id} = req.params
		Category.delete(id,res, function(category){
			return res.send(category)
		})
	}

}