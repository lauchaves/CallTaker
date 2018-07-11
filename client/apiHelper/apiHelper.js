import request from 'superagent';
import * as constants from '../constants';
import { getToken } from '../redux/helpers/sessionhelper';



const tokenPlugin = req => {
    const token = getToken;
    if (token) {
        req.set('Authorization', `bearer ${token}`);
    }
};


export const makePost = async (url, payload) => 
    request
    .post(url)
    .type('form')
    .send(payload)
    .accept('application/json');

export const makeGet = async url => request.get(url).use(tokenPlugin);