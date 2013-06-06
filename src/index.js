
var fs = require('fs'),
    Path = require('path'),
    scripts;

scripts = [
    'pokemonfusion.js',
    'nugme.coffee',
    'mta.coffee',
    'spot.coffee'
];

module.exports = function (robot) {
    var path = Path.resolve(__dirname, 'scripts');
    fs.exists(path, function (exists) {
        if (exists) {
            scripts.forEach(function (file) {
                robot.loadFile(path, file);
            });
        }
    });
};