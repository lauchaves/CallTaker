import request from 'superagent';
import * as constants from '../constants';
import { getToken } from '../redux/helpers/sessionhelper';


export const makePost = async (url, payload) => 
    request
    .post(url)
    .type('form')
    .send(payload)
    .accept('application/json');

export const makeGet = async url => {
    const token = await getToken();
    console.log(token);

    return request.get(url).set('authorization', token)
    
};
//.set({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Authorization': `${token}`});

