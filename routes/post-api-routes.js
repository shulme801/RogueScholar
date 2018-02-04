var db = require("../models");

//Grab all the models and make them known to Sequelize
const sequelize = require('../models').sequelize;

module.exports = function(app) {


/* Here are the database create record routes */
	// create post that is associated with the user_id stored in local storage
	app.post("/api/create_post", function(req, res) {
		db.Posts.create({
			user_user_id: req.body.user_user_id,
			content: req.body.content,
		}).then(function(dbUser) {
			res.json(dbUser);
		});
	});

   // create comment that is associated with the comment_id stored in local storage
   app.post("/api/create_comment", function(req, res) {
		db.Comments.create({
			post_post_id: req.body.post_post_id,
			content: req.body.content,
		}).then(function(dbUser) {
			res.json(dbUser);
		});
	});

/* Get random post from posts model */

  app.get("/api/random_post", function(req, res) {
    db.Posts.find({
      order: [
        sequelize.fn( 'RAND' ),
      ],
      include: [
        { model: db.Comments }
      ]
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

/* here are the database retrieve routes */

// GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

// GET route for getting all of the comments
  app.get("/api/comments/", function(req, res) {
    db.Comments.findAll({})
    .then(function(dbComments) {
      res.json(dbComments);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for returning comments of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Comments.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbComments) {
      res.json(dbComments);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for retrieving a single comment
  app.get("/api/comments/:id", function(req, res) {
    db.Comments.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbComments) {
      res.json(dbComments);
    });
  });

};