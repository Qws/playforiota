var IOTA = require("iota.lib.js");

var iota = new IOTA({
    'provider': 'http://nodes.iota.fm:80'
});

var seed = "SSDTGEA9JXOPSILCQYUFQTTKTQLEYB9OHTIPVNDCTYRPT9MVCMDZNVOCGDSBYJWSDIZBBZKDEQGP9LYXB";
var recipientAddress = "KDSYVZXRAHLVNENHNRUAINDVBODCGFIEGWJRZQTNJIBZMV9MBHRGIGHKKHEEOXPJUHHIETJZQBWIYCQSCXIMXAVFEC";




sendTransaction();
function sendTransaction()
{
    trytedSeed = iota.utils.toTrytes(seed);
    
    let transfers =
    [{
        "address": recipientAddress,
        "value":3,
        "message":iota.utils.toTrytes("fakka"),
        "tag":iota.utils.toTrytes("test")

    }]
    iota.api.sendTransfer(seed, 3, 14, transfers, function(error, response)
    {
        if(error)
        {
            console.log(error);
        }

        else
        {
            console.log("reseponse of the transaction is: ", response);
        }
    });
}

console.log(iota.version);