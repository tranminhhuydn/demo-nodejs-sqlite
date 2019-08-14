var Sequelize = require('sequelize');
var sequelize = module.parent.exports.sequelize;

var express = require('express');
var router = express.Router();
var Result = require('../model/result');

var Employee = sequelize.define('Employees', {
	idEmployee      : { type : Sequelize.INTEGER, primaryKey : true, autoIncrement : true },
	first_name      : Sequelize.TEXT,
	last_name       : Sequelize.TEXT,
	email           : Sequelize.TEXT,
	hashed_password : Sequelize.TEXT
}, {
	timestamps: false
});
	
router.get('/employees', function(req, res){
  Employee.findAll().then(function(result){
    //res.json(result);
    res.json(Result.createResult(true,result))
  });
});
module.exports = router;
//module.exports = Employee;
