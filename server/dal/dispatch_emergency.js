import { knex } from '../database/knex';
import uuid from 'uuid';

export const postDispatch = async dispatch => {
    //console.log('dal emergency', emergency);
    
    const schema = 'call_taker';
    const dispatchEmergency= `${schema}.dispatch_emergency`;

    const resourceId = dispatch.resource_id;
    const emergencyId = dispatch.emergency_id;
    const dispatchId = uuid.v4(); 
    const dispatchInfo = dispatch.dispatch_info;

    const queryResult = await 
    knex(dispatchEmergency).insert({
        dispatch_id: dispatchId,
        dispatch_info: dispatchInfo,
        emergency_id: emergencyId,
        resource_id: resourceId
    }).returning('dispatch_id');

    return queryResult.toString();
};
