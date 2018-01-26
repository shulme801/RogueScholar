var db = require("../models");

module.exports = function(app) {

	app.post("/api/create_user", function(req, res) {
		console.log(req.body);
		db.Users.create(req.body).then(function(dbUser) {
			res.json(dbUser);
		});
	});



};