var db = require("../models");

module.exports = function(app) {

	// Get 
	app.get("/api/user", function(req, res) {
		console.log("Hit '/api/user/' route");
		console.log("Here is the re.body " + req.body);
		db.Users.findAll({}).then(function(dbUsers) {
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