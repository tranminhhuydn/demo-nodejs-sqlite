var express = require('express');
var router = express.Router();
//var userDAO = require('../dao/userDAO');
var Result = require('../model/result');

var Employee = module.parent.exports.Employee;


///* list users */
router.get('/', function(req, res) {
    console.log('list users called');
//    userDAO.list(function (users) {
//        res.json(Result.createResult(true, users));
//    });
	  Employee.findAll().then(function(result){
	  	console.log('_employee',result);
	    res.json(Result.createResult(true, result));
	  });

});

///* get user */
//router.get('/:id', function(req, res) {
//    var id = req.params.id;
//    console.log('get user called, id: ' + id);
//    userDAO.getById(id, function (user) {
//        res.json(result.createResult(true, user));
//    });
//});
//
///* delete user */
//router.delete('/:id', function (req, res) {
//    var id = req.params.id;
//    console.log('delete user called, id=' + id);
//    userDAO.deleteById(id, function (success) {
//        res.json(result.createResult(success, null));
//    });
//});
//
///* add users */
router.post('/', function (req, res) {
    console.log('post users called');
    var user = req.body;
    console.log(user);
    var r =  Result.createResult('success', null);
    res.json(r);
//    userDAO.add(user, function (success) {
//        var r =  Result.createResult(success, null);
//        res.json(r);
//    });
});
//
///* update users */
//router.put('/:id', function (req, res) {
//    console.log('update users called');
//    var user = req.body;
//    user.id = req.params.id;
//    console.log(user);
//    userDAO.update(user, function (success) {
//        var r =  Result.createResult(success, null);
//        res.json(r);
//    });
//});
//
///* patch users */
//router.patch('/:id', function (req, res) {
//    console.log('patch users called');
//    userDAO.getById(req.params.id, function (user) {
//        var username = req.body.username;
//        if(username) {
//            user.username = username;
//        }
//        var password = req.body.password;
//        if(password) {
//            user.password = password;
//        }
//        console.log(user);
//        userDAO.update(user, function (success) {
//            var r =  Result.createResult(success, null);
//            res.json(r);
//        });
//    });
//});

module.exports = router;
