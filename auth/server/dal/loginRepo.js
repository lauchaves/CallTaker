import { knex } from '../database/knex';

export const verifyUser = async userData => {
    const email = userData.email;
    const password = userData.password;
    const schema = 'call_taker';
    const dbEmail =  await knex.select('email').where('email', email).from(`${schema}.user`);
    const dbPassword =  await knex.select('password').where('password', password).from(`${schema}.user`);

    if (!dbEmail.toString() || !dbPassword.toString()) {
        const error = {type: 'error', msg: 'Cannot find user/password'};
        return error;
    };
    
    const success = { type: 'success', data: userData};
    return success;

};