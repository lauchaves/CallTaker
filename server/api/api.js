import * as actions from './actions/index';
import { verifyToken } from '../../auth/server/services/authenticate';

export const setupApis = app => {
    app.get('/', (req, res) => res.send('What is up ')); // this is for testing
    app.get('/emergency', verifyToken, actions.emergency);
    app.put('/updateEmergency', verifyToken, actions.updateEmergency);
    app.post('/dispatch', verifyToken, actions.dispatch);
    app.get('/resource', verifyToken, actions.resource);
};


