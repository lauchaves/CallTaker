import actions from './index';

const setupApis = app => {
    
    app.post('/login', (req, res) => actions.login);

};

