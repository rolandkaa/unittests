
module.exports = function (app, express ) {
	var router	= express.Router();

	router.use(function(req, res, next) {
		next(); 
	});

	router.get('https://angularapp001.herokuapp.com/', function(req, res) {
		res.sendfile('./public/index.html');
	});
	router.route('https://angularapp001.herokuapp.com/demolist/:demoID')

		// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
		.get(function(req, res) {

			var possible = "abcdefghijklmnopqrstuvwxyz";
			var respRandomValue = possible.charAt(Math.floor(Math.random() * possible.length));
			console.log('request  description: ', respRandomValue);
			res.json({type: true, data: ''+respRandomValue});


		});

	app.use('https://angularapp001.herokuapp.com/', router);


};