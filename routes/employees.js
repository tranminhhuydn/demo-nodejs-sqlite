var fs =  require('fs');
var path = require("path");

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

function save(){
    // var dataBuffer = this.db.export();
    // this.saveDataSpecify('maucau','sqlite','.sqlite',dataBuffer)
		// fileName = keyName+extension
		// scriptDir = path.parse(__dirname)
		// pathFile  = path.join(scriptDir.dir, 'data/'+subFolder);
		// fs.writeFile(pathFile+fileName, conent, function(err) {
		// 	if (err) {
		// 		console.log(err);
		// 	}
		// });
  }


router.get('/', function(req, res){
  Employee.findAll().then(function(result){
    //res.json(result);
    res.json(Result.createResult(true,result))
  });
});
router.get('/createdb', function(req, res){
	var nameDB = 'db/database1.sqlite'
	var wstream = fs.createWriteStream(nameDB);

	var readStream = fs.readFileSync('db/database.sqlite');
	fs.writeFileSync(nameDB, readStream);

    res.json(Result.createResult(true,'result'))
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
    //Employee.findByIdEmployee(id)
    Employee.findOne({ where: {idEmployee: id} })
		.then(function(recode) {
			recode.destroy();
			res.json(Result.createResult(true, null));
		})

});
router.post('/', function (req, res) {
    console.log('post users called');
    var employee = req.body;
    //console.log(employee);
		//console.log(sequelize);
	Employee.create(employee).then(function(success) {

		 var r =  Result.createResult(success, sequelize);
		 res.json(r);
	})
	//connectionManager
	console.log(sequelize.connectionManager);

});

//task.update({
//  title: 'a very different title now'
//}).then(function() {})
module.exports = router;
