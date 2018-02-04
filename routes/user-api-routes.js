var db = require("../models");

module.exports = function(app) {

	app.post("/api/login_user", function(req, res) {
		db.Users.findOne({ 
			where: {username: req.body.username} 
		})
		.then(function(dbUsers) {
			res.json(dbUsers);		
		});
	});

	app.post("/api/create_user", function(req, res) {
		db.Users.create(req.body).then(function(dbUser) {
			res.json(dbUser);
		});
	});



};