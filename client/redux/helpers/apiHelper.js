import request from 'superagent';
import * as constants from '../modules/constants';

export const makePost = async (url, payload) => 
    request
    .post(`${constants.AUTH_URL}${url}`)
    .type('form')
    .send(payload)
    .accept('application/json');