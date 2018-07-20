import { makePut } from '../../apiHelper/apiHelper';
import * as constants from '../../constants';

const DISPATCH = 'DISPATCH';
const DISPATCH_SUCCESS = 'DISPATCH_SUCCESS';
const DISPATCH_FAIL = 'DISPATCH_FAIL';


export default (state = {}, action = {}) => {
  
    switch (action.type) {
      case DISPATCH:
        return state;
      case DISPATCH_SUCCESS: {
        console.log(action.result);
        return { dispatchSuccess: true, response: action.result};
      };
      case DISPATCH_FAIL:
        return { dispatchSuccess: false, response: action.result};
      default:
        return state;
    };
  };
  
  export const makeDispatch = model => async dispatch => {
      console.log(`${constants.SERVER_URL}${constants.UPDATE_EMERGENCY_URL}`);
      
      dispatch({type: DISPATCH});
      const result = await makePut(`${constants.SERVER_URL}${constants.UPDATE_EMERGENCY_URL}`, model);
      const finalRes = JSON.parse(result.text);
      
      if (finalRes.auth == false) {
        dispatch({ type: DISPATCH_FAIL, result: finalRes});
      }
      else {
        dispatch({type: DISPATCH_SUCCESS, result: finalRes });
      };
  
    };
  

