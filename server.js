var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));


// Import routes
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Now running at localhost:" + PORT);
});