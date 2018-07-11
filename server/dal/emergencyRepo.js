import { knex } from '../database/knex';

export const getEmergencies = async () => {
    const schema = 'call_taker';
    const emergencyTable= `${schema}.emergency`;
    const dispatch_emergencyTable=`${schema}.dispatch_emergency`

    const queryResult = await 
    knex.select(`${emergencyTable}.emergency_type`,`${emergencyTable}.description`,
               (knex.raw(`${dispatch_emergencyTable}.dispatch_info->>'userId' AS userId , 
                          ${dispatch_emergencyTable}.dispatch_info->>'timeStamp' AS timeStamp` )))
    .from(`${emergencyTable}`)
    .innerJoin(`${dispatch_emergencyTable}`, `${emergencyTable}.emergency_id`, '=', `${dispatch_emergencyTable}.emergency_id`);

    return queryResult.length ? queryResult : null;

};