import { verifyUser } from './../dal/loginRepo';

export const loginService = async userData => {
    console.log('im at login service: ' + userData);
    return await verifyUser(userData);
    // token

};
