var db = require("../models");

module.exports = function(app) {

	app.post("/api/create_post", function(req, res) {
		console.log(req.body);
		db.Post.create(req.body).then(function(dbUser) {
			res.json(dbUser);
		});
	});



};