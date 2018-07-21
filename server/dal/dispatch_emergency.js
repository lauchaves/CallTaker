import { knex } from '../database/knex';
import uuid from 'uuid';
import jwt from 'jsonwebtoken';

export const postDispatch = async dispatch => {

    const schema = 'call_taker';
    const dispatchEmergency= `${schema}.dispatch_emergency`;
    const resourceId = dispatch.resourceId;
    const emergencyId = dispatch.emergencyId;
    const dispatchId = uuid.v4(); 
    const decode = jwt.decode(dispatch.token);
    const dispatchInfo = { userId: decode.userId, timeStamp: dispatch.timeStamp};

    const queryResult = await 
    knex(dispatchEmergency).insert({
        dispatch_id: dispatchId,
        dispatch_info: dispatchInfo,
        emergency_id: emergencyId,
        resource_id: resourceId
    }).returning('dispatch_id');

    return queryResult.toString();
};