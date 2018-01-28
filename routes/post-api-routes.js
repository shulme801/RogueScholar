var db = require("../models");

module.exports = function(app) {

	// create post that is assocaited with the user_id stored in local storage
	app.post("/api/create_post", function(req, res) {
		console.log(req.body);
		db.Posts.create({
			user_user_id: req.body.user_user_id,
			content: req.body.content,
		}).then(function(dbUser) {
			res.json(dbUser);
		});
	});



};