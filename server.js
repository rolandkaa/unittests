
var express 		= require('express'); 
var app 	    	= express(); // create the app
var bodyParser		= require('body-parser');
var methodOverride 	= require('method-override');

var port = process.env.PORT || 3030 ; 

app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + 'https://angularapp001.herokuapp.com/public'));

require('https://angularapp001.herokuapp.com/app/routes')(app, express); // configure our routes

app.listen(port);               
              
console.log('Server Runs ' + port);


module.exports.app 		= app; 
module.exports.express		= express ; 
