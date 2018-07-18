import { knex } from '../database/knex';
import uuid from 'uuid';

export const getEmergencies = async () => {
    const schema = 'call_taker';
    const emergencyTable= `${schema}.emergency`;
    const dispatch_emergencyTable=`${schema}.dispatch_emergency`
    const userTable= `${schema}.user`;

    const queryResult = await 
    knex.select(`${emergencyTable}.emergency_type`,`${emergencyTable}.description`,
                `${userTable}.user_name`,
                (knex.raw(` ${dispatch_emergencyTable}.dispatch_info->>'timeStamp' AS timeStamp` )))
    .from(emergencyTable)
    .leftJoin(dispatch_emergencyTable, `${emergencyTable}.emergency_id`, '=', `${dispatch_emergencyTable}.emergency_id`)
    .leftJoin(userTable, (knex.raw(`${userTable}.user_id::text`)), (knex.raw(`${dispatch_emergencyTable}.dispatch_info->>'userId'`)));

    //console.log('queryResult',queryResult);



    return queryResult.length ? queryResult : [];

    
};

export const postEmergencies = async (emergency) => {
    //console.log('dal emergency', emergency);
    
    const schema = 'call_taker';
    const emergencyTable= `${schema}.emergency`;
    const emergencyType = emergency.type;
    const emergencyDescription = emergency.description;
    const emergencyId = uuid.v4(); 

    const queryResult = await knex(emergencyTable).insert({emergency_id: emergencyId,emergency_type: emergencyType,
         description: emergencyDescription}).returning('emergency_id');

    return queryResult.toString();
};

