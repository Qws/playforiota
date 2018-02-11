var IOTA = require("iota.lib.js");

var iota = new IOTA({
    'host': 'http://localhost',
    'port': 14265
});

console.log(iota.version);