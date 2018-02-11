var IOTA = require("iota.lib.js");

var iota = new IOTA({
    'provider': 'http://nodes.iota.fm:80'
});



iota.api.getInputs("MTZTQLDLG9VRQ9OFJLQPNDQISUKZLCWTDOGJTZOJVZDZURVRPQMGIILEXMYCKFWABEROBESVMHVVBFDFD", function(error, response)
{
    if(error)
    {
        console.log(error);
    }

    else
    {
        console.log(response);
        console.log();
        for(var i = 0; (response["inputs"].length - 1) > i; i++)
        {
            console.log("IOTA balance of this specific address: ",response["inputs"][i]["balance"]);
        }
    }
    console.log()
})

console.log(iota.version);