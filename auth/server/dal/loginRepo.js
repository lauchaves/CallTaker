import { knex } from '../database/knex';

export const verifyUser = async userData => {
    const email = userData.email;
    const password = userData.password;
    const schema = 'call_taker';

    const queryResult =  await knex.select('email', 'password', 'user_name','user_id').where('email', email).andWhere('password', password).from(`${schema}.user`);
    return queryResult.length ? queryResult[0] : null;
};