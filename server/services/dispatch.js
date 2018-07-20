import * as dal from './../dal/dispatch_emergency';

export const postDispatch = async dispatch => {
    try {
        const result = await dal.postDispatch(dispatch);
        return result; // dispatch_id

    }catch (err) {
        console.log(err);
    };
}