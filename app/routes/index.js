// import all your routes here
var test_routes = require('./test-routes');
var user_routes = require('./user-routes');

module.exports = (app) => {
    // pass the app into the routes and export all the routes here
    user_routes(app);
    test_routes(app);
}