var express = require('express');
var result = require('../model/result');
var router = express.Router();

var fs = require('fs');



router.get('/', function(req, res) {
//    var id = req.params.id;
//    console.log('get Employee called, id: ' + id);
    var wstream = fs.createWriteStream('db/myOutput.txt');
	wstream.write('Hello world!\n');
	wstream.write('Another line\n');
	wstream.end();
	res.json(result.createResult(true, 'user'));
});

router.get('/read', function(req, res) {
//    var id = req.params.id;
//    console.log('get Employee called, id: ' + id);
    var readStream = fs.createReadStream('db/myOutput.txt');
	var cont=""
	readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    	readStream.pipe(res);
    	//res.json(result.createResult(true, cont));
  	});
  	
});

module.exports = router;