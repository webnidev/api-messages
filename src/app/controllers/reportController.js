const Message = require('../models/Message')
const Report = require('../models/Report')
const libs = require('../utils/libs')

module.exports = {
    redirect(req, res){
        const {slug} = req.params
        console.log(req.params)
        Report.show(slug, res, function(message){
            if (message){
                data={
                    "userIp": req.headers.host,
                    "userAgent":req.headers["user-agent"],
                    "url":slug
                }
                Report.create(data,res, function(report){
                    console.log(report)
                })
            }
            return res.redirect(message)
        })
        
        

    }, report(req, res){
        Report.all(res, function(reports){
            return res.send(reports)
        })
    }
}