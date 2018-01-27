var db = require("../models");

module.exports = function(app) {

	app.post("/api/create_post", function(req, res) {
		console.log(req.body);
		db.Posts.create({
			content: req.body.content,
			user_user_id: 641d41c3-6972-4ffd-bf82-1e522cc00f3b,
		}).then(function(dbUser) {
			res.json(dbUser);
		});
	});



};