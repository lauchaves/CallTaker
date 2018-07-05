import { knex } from './../database/knex';

export const verifyUser = userData => {
    
    console.log(userData.email);
    const email = userData.email;
    const password = userData.email;
    
    const test = knex.select('*').from('user');
    console.log(test.toString());



    /* const email = userData.email;
    const password = userData.email;

    const dbEmail;
    const dbPassword;

    const test;

    //test = knex.select('*').from('users');

    console.log(test);

   /* knex('user')
    .where(qb => qb.where('email', email).
    

    if (email == dbEmail && password == dbPassword){
        return true;
    }
    */
};