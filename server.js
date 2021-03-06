// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Allows Express app to handle data parsing
// =============================================================

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Allows Express app tp serve static files in the public folder
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("index");
});

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/post-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);

// Require models for sequelize syncing
// =============================================================
var db = require("./models");

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true })
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Rogue Scholar App is Alive and Listening on PORT " + PORT);
  });
});
