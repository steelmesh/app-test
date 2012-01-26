var time = require('./time-helper'),
    counter = 0;

exports.getTime = function(mesh, callback, queryParams, req, res) {
    callback({
        time: time.getTime()
    });
};

exports.getCount = function(mesh, callback, queryParams, req, res) {
    callback({
        value: counter++
    });
};

exports.genHTML = function(req, res, callback ) {
    var body = 	
		'<html>'+
		'<body>'+
		'<br>process.pid: ' + process.pid +
		'<br>counter: '+ (counter++) +
		'</body>'+
		'</html>';
	res.write(body);
	res.end();
};