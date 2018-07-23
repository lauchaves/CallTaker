import { knex } from '../database/knex';
import uuid from 'uuid';
import jwt from 'jsonwebtoken';
import util from 'util';

export const postDispatch = async dispatch => {
    
    const schema = 'call_taker';
    const dispatchEmergency= `${schema}.dispatch_emergency`;
    const resourceId = dispatch.resourceId;
    const emergencyId = dispatch.emergencyId;
    const newId= uuid.v4();
    
    const decode = jwt.decode(dispatch.token);
    const dispatchInfo = { userId: decode.userId, timeStamp: dispatch.timeStamp};

   const queryResult = await knex.raw(`
        INSERT INTO ${dispatchEmergency} (dispatch_id, dispatch_info, resource_id, emergency_id) 
        VALUES ('${newId}','${JSON.stringify(dispatchInfo)}','${resourceId}','${emergencyId}')
        ON CONFLICT (emergency_id) 
        DO UPDATE SET dispatch_info='${JSON.stringify(dispatchInfo)}', resource_id='${resourceId}'`);
    
    return JSON.stringify(queryResult);
};