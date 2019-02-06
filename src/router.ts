const Authentication = require('./controllers/authentication');

module.exports = function (app: any) {
    app.post('/signup', Authentication.signup);
}