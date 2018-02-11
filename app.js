var IOTA = require("iota.lib.js");

var iota = new IOTA({
    'provider': 'http://eugeneoldisoft.iotasupport.com:14265'
});

iota.api.getNodeInfo(function(error, success) {
    if (error) {
        console.error(error);
    } else {
        console.log(success);
    }
});

console.log(iota.version);