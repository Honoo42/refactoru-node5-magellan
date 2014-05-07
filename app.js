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
};

var urlPaths = [
	'/seville',
	'/canaryislands',
	'/capeverde',
	'/straitm',
	'/guam',
	'/philippines'
];

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('seville', {pageName:location});
});

// URL path
app.get('/canaryislands', function(req, res) {
	// page name excluding the .jade
	res.render('canaryislands', {pageName:location});
});

app.get('/capeverde', function(req, res) {
	res.render('capeverde', {pageName:location});
});

app.get('/straitm', function(req, res) {
	res.render('straitm', {pageName:location});
});

app.get('/guam', function(req, res) {
	res.render('guam', {pageName:location});
});

app.get('/philippines', function(req, res) {
	res.render('philippines', {pageName:location});
});

var server = app.listen(8475, function() {
	console.log('Express server listening on port ' + server.address().port);
});
