// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
// ==============================================================================

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;
// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.raw({ type: "application/vnd.custom-type"}));
app.use(bodyParser.text({ type: "text/html"}));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
