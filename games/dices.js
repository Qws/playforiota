function ThrowDiceWhoThrowHighest(times, callback)
{
    var i = 0;
    var playerPoints = 0;
    var enemyPoints = 0;
    while(i > (times - 1))
    {
        playerPoints += Math.floor((Math.random() * 10) + 1);
    }

    while(i > (times - 1))
    {
        enemyPoints += Math.floor((Math.random() * 10) +1);
    }

    result = 
    {
        "playerpoints" : playerPoints,
        "enemypoints" : enemyPoints
    }

    callback(result);
}

exports.ThrowDiceWhoThrowHighest = ThrowDiceWhoThrowHighest;