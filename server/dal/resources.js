import { knex } from '../database/knex';

export const getResources = async () => {
    const schema = 'call_taker';
    const resourceTable= `${schema}.resource`;

    const queryResult = await knex(resourceTable).select('*');
    //console.log('queryResult',queryResult);

    return queryResult.length ? queryResult : [];

    
};
