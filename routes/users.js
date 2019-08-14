var express = require('express');
var router = express.Router();
//var userDAO = require('../dao/userDAO');
var result = require('../model/result');


var Employee = require('../model/employees.js');



/* list users */
router.get('/', function(req, res) {
    console.log('list users called');
//    userDAO.list(function (users) {
//        res.json(result.createResult(true, users));
//    });
	  Employee.findAll().then(function(_employee){
	    res.json(result.createResult(true, _employee));
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
//router.post('/', function (req, res) {
//    console.log('post users called');
//    var user = req.body;
//    console.log(user);
//    userDAO.add(user, function (success) {
//        var r =  result.createResult(success, null);
//        res.json(r);
//    });
//});
//
///* update users */
//router.put('/:id', function (req, res) {
//    console.log('update users called');
//    var user = req.body;
//    user.id = req.params.id;
//    console.log(user);
//    userDAO.update(user, function (success) {
//        var r =  result.createResult(success, null);
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
//            var r =  result.createResult(success, null);
//            res.json(r);
//        });
//    });
//});

module.exports = router;
