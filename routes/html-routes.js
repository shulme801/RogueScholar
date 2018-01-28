// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
 
  app.get("/api/create_user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/logan.html"));
  });


  //***Joshua put the below code on 1/28
  //possible misuse of syntax
  //should not be res.render maybe?
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/news", function(req, res) {
        res.render("news");
    });

    app.get("/post", function(req, res) {
        res.render("post");
    });


  //NewsAPI code
  //================================================
  //================================================
  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI('9f11331ebca94648a396f71e4aec00fa');

  app.get('/news', function(req, res) {
      console.log("testing");
      res.sendFile(path.join(__dirname, "news.handlebars"));
  });

  app.get("/news", function(req, res) {
      newsapi.v2.topHeadlines({
          language: 'en',
          country: 'us'
      }).then(response => {

          var randomArticle = response.articles[Math.floor(Math.random() * response.articles.length)];

          //console.log(randomArticle);
          res.send(randomArticle);

      });
  });

};
