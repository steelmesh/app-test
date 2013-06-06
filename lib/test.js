var time = require('./time-helper'),
    counter = 0;

exports.getTime = function(req, res) {
    res.json({
        time: time.getTime()
    });
};

exports.getCount = function(req, res) {
    res.json({
        value: counter++
    });
};

exports.genHTML = function(req, res) {
    res.ok('<body>Some test html</body>');
};