var express = require('express');
var http = require('http');
var app = express();

app.set('view engine','jade');
app.set('views', __dirname + '/views');

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
	if(currentPage === '/'){
		currentPage = urlPaths[0];
	} 
	console.log(currentPage);
	console.log(urlPaths);
	for(var i = 0; i < urlPaths.length; i++){
	// console.log(urlPaths[i]);
		if(urlPaths[i] === currentPage ) {
			// currentPage = urlPaths[i];
			var destinationPath = urlPaths[i + 1];
			if(i+1 >= urlPaths.length) {
				// go to '/'
				return '/';
			}
			console.log(destinationPath);
			return destinationPath;
		}
	};
};

// 'next button' event handler
// res.redirect(destinationPath);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	findDestination(req);
	res.render('seville', {
		nextUrl: findDestination(req),
		pageName: location
	});
});

// URL path
app.get('/canaryislands', function(req, res) {
	findDestination(req);
	res.render('canaryislands', {
		nextUrl: findDestination(req),
		pageName: location
	});
});

app.get('/capeverde', function(req, res) {
	findDestination(req);
	res.render('capeverde', {
		nextUrl: findDestination(req),
		pageName: location
	});
});

app.get('/straitm', function(req, res) {
	findDestination(req);
	res.render('straitm', {
		nextUrl: findDestination(req),
		pageName: location
	});
});

app.get('/guam', function(req, res) {
	findDestination(req);
	res.render('guam', {
		nextUrl: findDestination(req),
		pageName: location
	});
});

app.get('/philippines', function(req, res) {
	res.render('philippines', {
		nextUrl: findDestination(req),
		pageName: location
	});
});
// port needed for heroku
var port = process.env.PORT || 8475;
var server = app.listen(8475, function() {
	console.log('Express server listening on port ' + server.address().port);
});
