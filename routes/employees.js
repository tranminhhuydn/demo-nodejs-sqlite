var express = require('express');
var Result = require('../model/result');
var router = express.Router();

var Sequelize = require('sequelize');
var sequelize = module.parent.exports.sequelize;

var Employee = sequelize.define('Employees', {
	idEmployee      : { type : Sequelize.INTEGER, primaryKey : true, autoIncrement : true },
	first_name      : Sequelize.TEXT,
	last_name       : Sequelize.TEXT,
	email           : Sequelize.TEXT,
	hashed_password : Sequelize.TEXT
}, {
	timestamps: false
});
//module.exports = Employee;
	
router.get('/', function(req, res){
  Employee.findAll().then(function(result){
    //res.json(result);
    res.json(Result.createResult(true,result))
  });
});
router.get('/:id', function(req, res) {
    var id = req.params.id;
    console.log('get Employee called, id: ' + id);
    Employee.getById(id, function (user) {
        res.json(result.createResult(true, user));
    });
});
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    console.log('delete Employee called, id=' + id);
    Employee.deleteById(id, function (success) {
        res.json(Result.createResult(success, null));
    });
});

module.exports = router;

