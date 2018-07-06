import { verifyUser } from './../dal/loginRepo';
import jwt from 'jsonwebtoken';
import { secret } from './config';

export const loginService = async userData => {
    const result = await verifyUser(userData);

    if (!result) {
        const error = {type: 'error', msg: 'Cannot find user/password'};
        return error;
    }
    else {
        const dbEmail = result.email
        const dbUserId = result.user_id;
        const dbUsername = result.user_name;

        const token = jwt.sign({email: dbEmail, userId: dbUserId, username: dbUsername}, secret, {expiresIn: '15m'});
        return token;
    };

};
