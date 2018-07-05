import { verifyUser } from './../dal/loginRepo';

export const loginService = async userData => {
    return await verifyUser(userData);
    // token

};
