// require/export is a global variable.
var express = require('express');

//Mongoose provides a straight-forward, schema-based solution to model your application data.
//It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var config = require('./config/db-config');
var cors = require('cors');
var passport = require('passport');
require('./config/passport');

//creating express app
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

//creating db connection using mongoose
var url = config.mongo_url + config.db;
var port = 3100;
const connection = mongoose.connect(
  url,
  {
    useNewUrlParser: true
  }
);
connection.then(db => {
  require('./app/routes/index')(app);

  // serving express app on a port
  app.listen(port, () => {
    console.log('connected to ' + db.connections[0].name + ' on port ' + port);
  });
});
