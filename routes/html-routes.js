// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  //
  // app.get("/", function(req, res) {
  //   res.render("hi");
  // });

  //NewsAPI code
  //================================================
  //================================================
  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI('9f11331ebca94648a396f71e4aec00fa');

  app.get('/', function(req, res) {
      console.log("testing");
      res.sendFile(path.join(__dirname, "test2.html"));


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
