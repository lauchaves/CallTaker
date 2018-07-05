import actions from './actions/index';

exports.setupApis = app => {
    app.get('/', function(req, res) {res.send('What is up ');}); // this is for testing
    app.post('/login', (req, res) => actions.login);

};

