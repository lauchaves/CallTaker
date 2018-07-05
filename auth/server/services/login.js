import { verifyUser } from './../dal/loginRepo'

exports.login = async userData => {
    return await verifyUser(userData);
    // token

};
