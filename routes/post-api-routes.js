var db = require("../models");

module.exports = function(app) {

	// create post that is associated with the user_id stored in local storage
	app.post("/api/create_post", function(req, res) {
		console.log(req.body);
		db.Posts.create({
			user_user_id: req.body.user_user_id,
			content: req.body.content,
		}).then(function(dbUser) {
			res.json(dbUser);
		});
	});

   // create comment that is associated with the comment_id stored in local storage
   app.post("/api/create_comment", function(req, res) {
		console.log(req.body);
		db.Comments.create({
			post_post_id: req.body.post_post_id,
			content: req.body.content,
		}).then(function(dbUser) {
			res.json(dbUser);
		});
	});



};