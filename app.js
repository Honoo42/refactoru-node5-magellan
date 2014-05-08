var express = require('express');
var http = require('http');
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

var findDestination = function (req) {
	var currentPage = req.path;
	console.log(currentPage);
	console.log(urlPaths);
	for(var i = 0; i < urlPaths.length; i++){
	// console.log(urlPaths[i]);
		if(urlPaths[i] === currentPage ) {
			// ??
			// currentPage = urlPaths[i];
			var destinationPath = urlPaths[i + 1];
			// return destinationPath;
		}
	};
		console.log(destinationPath);
};
// 
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	findDestination(req);
	res.render('seville', {pageName:location});
	
});

// URL path
app.get('/canaryislands', function(req, res) {
	findDestination(req);
	res.render('canaryislands', {pageName:location});
});

app.get('/capeverde', function(req, res) {
	findDestination(req);

	res.render('capeverde', {pageName:location});
});

app.get('/straitm', function(req, res) {
	findDestination(req);

	res.render('straitm', {pageName:location});
});

app.get('/guam', function(req, res) {
	findDestination(req);
	res.render('guam', {pageName:location});
});

app.get('/philippines', function(req, res) {
	res.render('philippines', {pageName:location});
});

var server = app.listen(8475, function() {
	console.log('Express server listening on port ' + server.address().port);
});
