require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const keys = require("./keys");
const session = require("express-session");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({
  secret: 'Doctor Who',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use Routes for url pathing to determine content population
app.use(routes);

//Connect to the database
var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
