var db = require("../models");

module.exports = function(app) {

	app.post("/api/create_post", function(req, res) {
		console.log(req.body);
		db.Posts.create({
			content: req.body.content,
			user_user_id: 1,
		}).then(function(dbUser) {
			res.json(dbUser);
		});
	});



};