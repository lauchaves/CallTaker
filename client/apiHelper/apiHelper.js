import request from 'superagent';
import * as constants from '../constants';
import { getToken } from '../redux/helpers/sessionhelper';
import { hydrate } from '../stores/classes/auth';

const setHeaders = (req) => req.set('authorization', getToken()).accept('application/json');

export const makePost = async (url, payload) => {
    const response = await
    request
    .post(url)
    .type('form')
    .use(setHeaders)
    .send(payload)
    .accept('application/json');

    if (response.statusCode == 401) {
        sessionStorage.clear();
        hydrate(null);
        browserHistory.push('/');
    };
    return response;
};

export const makeGet = async url => {
    const response = await request.get(url).use(setHeaders);

    if (response.statusCode == 401) {
        sessionStorage.clear();
        hydrate(null);
        browserHistory.push('/');
    };
    //console.log(response);
    return JSON.parse(response.text);
};


export const makePut= async (url, payload) => {
    const response = await request.put(url).send(payload).use(setHeaders).accept('application/json');

    if (response.statusCode == 401) {
        sessionStorage.clear();
        hydrate(null);
        browserHistory.push('/');
    };
    console.log(response);
    return (response.text);
};

