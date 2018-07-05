import * as actions from './actions/index';

export const setupApis = app => {
    app.get('/', (req, res) => res.send('What is up ')); // this is for testing
    app.post('/login', actions.login);

};

