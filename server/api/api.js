import * as actions from './actions/index';
import { verifyToken } from '../../auth/server/services/authenticate';

export const setupApis = app => {
    app.get('/', (req, res) => res.send('What is up ')); // this is for testing
    app.get('/emergency' ,actions.emergency);
};


