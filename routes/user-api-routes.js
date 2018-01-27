var db = require("../models");

module.exports = function(app) {

	app.post("/api/login_user", function(req, res) {
		console.log("Hit '/api/login_user' route");
		console.log("Here is the req.body: ", req.body);
		db.Users.findOne({ 
			where: {username: req.body.username} 
		})
		.then(function(dbUsers) {
			res.json(dbUsers);		
		});
	});

	app.post("/api/create_user", function(req, res) {
		console.log(req.body);
		console.log(req.body.username);
		db.Users.create(req.body).then(function(dbUser) {
			res.json(dbUser);
		});
	});



};