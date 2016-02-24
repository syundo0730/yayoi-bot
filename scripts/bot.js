var Botkit = require('botkit');
var os = require('os');
var fetch = require('node-fetch');

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var controller = Botkit.slackbot({
    debug: false,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

controller.hears(['image'], ['ambient'], function(bot, message) {
	var key = '';
	var cx = '';
	var url = 'https://www.googleapis.com/customsearch/v1?key='+key+'&cx='+cx+'&searchType=image&q='+encodeURIComponent('高槻やよい');
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		console.log(json.items);
		console.log(json.items.length);
		var link = json.items[0].link;
		console.log(link);
		bot.reply(message, link);
	});
});
