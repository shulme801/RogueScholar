// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
 
  app.get("/api/create_user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/logan.html"));
  });

    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/news", function(req, res) {
        res.render("news");
    });

    app.get("/post", function(req, res) {
        res.render("post");
    });


  //NewsAPI code -- get a news story from NewsAPI
  //================================================
  //================================================
  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI('9f11331ebca94648a396f71e4aec00fa');

  app.get('/news', function(req, res) {
      res.sendFile(path.join(__dirname, "news.handlebars"));
  });

  app.get("/apinews", function(req, res) {
      newsapi.v2.topHeadlines({
          language: 'en',
          country: 'us'
      }).then(response => {

          var randomArticle = response.articles[Math.floor(Math.random() * response.articles.length)];
          res.send(randomArticle);

      });
  });

};
