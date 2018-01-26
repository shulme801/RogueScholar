var db = require("../models");

module.exports = function(app) {

	app.post("/api/create_user", function(req, res) {
		db.Users.create(req.body.username).then(function(dbUser) {
			res.json(dbUser);
		});
	});



};