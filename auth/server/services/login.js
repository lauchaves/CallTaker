import { verifyUser } from './../dal/loginRepo';
import jwt from 'jsonwebtoken';
import { secret } from './config';

export const loginService = async userData => {
    const result = await verifyUser(userData);
    
    if (result.type == 'error') 
        return result;
    else {
        const dbemail = result.data.email;
        const dbpassword = result.data.password;
    
        //token here
        const token = jwt.sign({email: dbemail, password: dbpassword}, secret);
        return token;
    };
};
