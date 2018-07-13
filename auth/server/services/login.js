import { verifyUser } from './../dal/loginRepo';
import jwt from 'jsonwebtoken';
import { secret } from './config';

export const loginService = async userData => {
    const result = await verifyUser(userData);

    if (!result) {
        const error = {type: 'error', msg: 'Cannot find user/password'};
        return error;
    }
    const token = jwt.sign({email: result.email, userId: result.user_id, username: result.user_name}, secret, {expiresIn: '5m'});
    return token;
};