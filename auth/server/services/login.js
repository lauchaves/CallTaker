import { verifyUser } from './../dal/loginRepo';

export const loginService = async userData => {
    const result = await verifyUser(userData);

    if (result.type == 'error') 
       return result;
    else
        // insert token here
        return result.data;

};
