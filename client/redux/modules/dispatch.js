import { makePut, makePost } from '../../apiHelper/apiHelper';
import * as constants from '../../constants';

const DISPATCH = 'DISPATCH';
const DISPATCH_SUCCESS = 'DISPATCH_SUCCESS';
const DISPATCH_FAIL = 'DISPATCH_FAIL';


export default (state = {}, action = {}) => {
  
    switch (action.type) {
      case DISPATCH:
        return state;
      case DISPATCH_SUCCESS: {
        console.log('Dispatch: ',action.result);
        return { dispatchSuccess: true, response: action.result};
      };
      case DISPATCH_FAIL:
        return { dispatchSuccess: false, response: action.result};
      default:
        return state;
    };
  };
  
  export const makeDispatch = model => async dispatch => {
      console.log("MAke dispatch") ;
      const d = new Date();
      const dispatchInfo = { dispatch_id: model.dispatch_id, resourceId: model.resource, timeStamp: d.toLocaleString(), emergencyId: model.emergency_id };
      
      dispatch({type: DISPATCH});
      const resultUpdate = await makePut(`${constants.SERVER_URL}${constants.UPDATE_EMERGENCY_URL}`, model);
      const resultDispatch = await makePost(`${constants.SERVER_URL}${constants.POST_DISPATCH}`, dispatchInfo);

      const update = JSON.parse(resultUpdate);

      const newDispatch = JSON.parse(resultDispatch.text);

      console.log(update, '1');
      console.log(newDispatch, '2');





      if ((update.success) && (newDispatch.success)) {
        const result = { success: true, result: { resultUpdate: resultUpdate, resultDispatch: resultDispatch } };
        dispatch({ type: DISPATCH_SUCCESS, result: result});
      }
      else {
        dispatch({type: DISPATCH_FAIL, result: { resultUpdate: resultUpdate, resultDispatch: resultDispatch } });
      };
      
  
    };
  

