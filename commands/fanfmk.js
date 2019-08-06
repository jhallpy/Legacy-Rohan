let misc = require('../utils/misc.js');
exports.run = (client, message, args) => {
    if (misc.checkThree(args)){
        args = misc.shuffleArray(args);
        message.channel.send(`Fake Date: ${args[0]} \nSlow Burn: ${args[1]} \nEnemies to Lovers: ${args[2]}`);
    }
    else if(!misc.checkThree(args))
        message.channel.send('Please use 3 names. :thinking:');
    else
        message.channel.send('An error occured. Please use the `~help` command if you need help.');
}