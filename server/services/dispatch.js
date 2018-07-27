import * as dal from './../dal/dispatch_emergency';
import { notify } from '../socketIO';

export const postDispatch = async dispatch => {
    try {
        const result = await dal.postDispatch(dispatch);
        //await notify(result);
        return {success: true, result:result}; // dispatch_id


    }catch (err) {
        console.log(err);
    };
}