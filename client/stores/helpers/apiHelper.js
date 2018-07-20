import request from 'superagent';
import * as constants from '../../constants';


export const makeGet = async (url) => request.get(`${url}`);