if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();


controller.hears(['pizzatime'],['ambient'],function(bot,message) {
  bot.startConversation(message, askFlavor);
});

askFlavor = function(response, convo) {
  convo.ask('What flavor of pizza do you want?', function(response, convo) {
    convo.say('Awesome.');
    askSize(response, convo);
    convo.next();
  });
}
askSize = function(response, convo) {
  convo.ask('What size do you want?', function(response, convo) {
    convo.say('Ok.')
    askWhereDeliver(response, convo);
    convo.next();
  });
}
askWhereDeliver = function(response, convo) {
  convo.ask('So where do you want it delivered?', function(response, convo) {
    convo.say('Ok! Good by.');
    convo.next();
  });
}
