var db = require("../models");

module.exports = function(app) {

	app.get("/api/user", function(req, res) {
		console.log(req.body);
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