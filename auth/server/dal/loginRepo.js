import { knex } from '../database/knex';

export const verifyUser = async userData => {
    const email = userData.email;
    const password = userData.password;
    const schema = 'call_taker';

    const queryResult =  await knex.select('email', 'password', 'user_name').where('email', email).andWhere('password', password).from(`${schema}.user`);

    if (!queryResult.toString()) {
        const error = {type: 'error', msg: 'Cannot find user/password'};
        return error;
    };

    const success = { type: 'success', data: queryResult[0]};
    return success;
};