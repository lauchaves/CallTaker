import { knex } from '../database/knex';
import uuid from 'uuid';

export const getEmergencies = async () => {
    const schema = 'call_taker';
    const emergencyTable= `${schema}.emergency`;
    const dispatch_emergencyTable=`${schema}.dispatch_emergency`
    const userTable= `${schema}.user`;

    const queryResult = await 
    knex.select(`${emergencyTable}.id`,`${emergencyTable}.person_id`,`${emergencyTable}.emergency_state`,`${emergencyTable}.emergency_type`,`${emergencyTable}.description`,
                `${userTable}.user_name`,`${dispatch_emergencyTable}.dispatch_id`,
                (knex.raw(` ${dispatch_emergencyTable}.dispatch_info->>'timeStamp' AS timeStamp` )))
    .from(emergencyTable)
    .leftJoin(dispatch_emergencyTable, `${emergencyTable}.id`, '=', `${dispatch_emergencyTable}.emergency_id`)
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
    const emergencyStatus = 'Awaiting';
    const dateTime = new Date();
    
    console.log('repo date', dateTime);

    const queryResult = await 
    knex(emergencyTable).insert({
        id: emergencyId,
        emergency_type: emergencyType,
        description: emergencyDescription,
        emergency_state: emergencyStatus,
        creationdate: dateTime
    }).returning('id');

    return queryResult.toString();
};


export const putEmergencies = async emergencyInfo => {
    //console.log('emergency Repo','putEmergency', emergencyInfo);
    const schema = 'call_taker';
    const emergencyTable= `${schema}.emergency`;
    const emergencyId = emergencyInfo.emergency_id;
    const emergencyFullname = emergencyInfo.fullname;
    const emergencyAddress = emergencyInfo.address;
    const emergencyPhone = emergencyInfo.phone;
    const emergencyDetails = emergencyInfo.details;
    const emergencyPersonId = emergencyInfo.personId;
    //const emergencyResource = emergency.resource;
    const emergencyStatus = 'Taken';

    const queryResult = await knex(emergencyTable)
    .where((knex.raw(`${emergencyTable}.id::text`)),'=',emergencyId)
    .update({
        fullname: emergencyFullname,
        address: emergencyAddress,
        phone: emergencyPhone,
        details: emergencyDetails,
        emergency_state: emergencyStatus,
        person_id: emergencyPersonId
    }).returning('id');

    return queryResult.toString();
}

export const getInfoEmergencyPriority = async () => {
    const schema = 'call_taker';
    const emergencyTable= `${schema}.emergency`;

    const queryResult = await 
    knex.select(`${emergencyTable}.id`,`${emergencyTable}.creationdate`).from(emergencyTable);

    //console.log('queryResult',queryResult);

    return queryResult.length ? queryResult : [];
};