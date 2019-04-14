var authenticate = require('./../../config/passport');
module.exports = (app) => {

    // this is a test route. check on url http://localhost:3100/test after starting the server
    app.get('/test', (req, res) => {
        res.send("Hello welcome to express starter with mongoose and passport!!!");
    });

    app.get('/authorisedTest', authenticate.verifyUser, (req, res) => {
        res.send("Hello welcome to express starter authenticated with passport");
    })
}