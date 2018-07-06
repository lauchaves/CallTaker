import * as constants from './constants';
import request from 'superagent';
import jwt from 'jsonwebtoken'; 
import { secret } from '../../auth/server/services/config';

export const loginReducer = async (state = {}, values ) =>  {
    const emailValue = values.username;
    const passwordValue = values.password;

    if (!emailValue || !passwordValue) {
        alert( 'You need a username and password');
        return;
      };

    const setToken = token => { sessionStorage.setItem('token',token) };

    const logout = () => { sessionStorage.removeItem('token') };
    
    const getToken = () => { return sessionStorage.getItem('token') };

    const getProfile = token => { 
        const decoded= jwt.verify(getToken(),secret);
        console.log(decoded);
    
    }

    const result = await request
    .post(constants.API_URL+'login')
    .type('form')
    .send({email: emailValue, password: passwordValue})
    .accept('application/json');

    if (finalRes.auth == false) {
        alert(finalRes.error.message);
    }

    setToken(finalRes.token);
    getProfile(finalRes.token);

    


  };
