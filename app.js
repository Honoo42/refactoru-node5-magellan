var express = require('express');
var app = express();

app.set('view engine','jade');
app.set('views',__dirname+ '/views');

var location = {
	firstStop: 'Seville',
	secondStop: 'Canary Islands',
	thirdStop: 'Cape Verde',
	fourthStop: 'The Strait of Magellan',
	fifthStop: 'Guam',
	lastStop: 'The Philippines'
}
app.get('/', function(req, res) {
	res.render('seville');
});

app.get('/canaryislands', function(req, res) {
	res.render('canaryislands');
});

app.get('/capeverde', function(req, res) {
	res.render('capeverde');
});

app.get('/straitm', function(req, res) {
	res.render('straitm', {pageName:location});
});

app.get('/guam', function(req, res) {
	res.render('guam');
});

app.get('/philippines', function(req, res) {
	res.render('philippines');
});



var server = app.listen(8475, function() {
	console.log('Express server listening on port ' + server.address().port);
});
