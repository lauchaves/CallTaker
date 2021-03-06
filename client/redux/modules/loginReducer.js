import { makePost } from '../../apiHelper/apiHelper';
import * as constants from '../../constants';
import { getToken, setToken } from '../helpers/sessionhelper';

const LOGIN= 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN__FAIL = 'LOGIN__FAIL';

export default (state = {}, action = {}) => {
  
  switch (action.type) {
    case LOGIN:
      return state;
    case LOGIN_SUCCESS: {
      console.log(action.result);

      if (!getToken()) 
        setToken(action.result.token);

      return { loginSuccess: true, response: action.result};
      
    };

    case LOGIN__FAIL:
      return { loginSuccess: false, response: action.result};
    default:
      return state;
  };
};

export const login = model => async dispatch => {
    console.log(`${constants.AUTH_URL}${constants.LOGIN_API_URL}`);
    
    dispatch({type: LOGIN});
    const result = await makePost(`${constants.AUTH_URL}${constants.LOGIN_API_URL}`, model);
    //console.log(result);

    const finalRes = JSON.parse(result.text);
    
    if (finalRes.auth == false) {
      dispatch({ type: LOGIN__FAIL, result: finalRes});
    }
    else {
      dispatch({type: LOGIN_SUCCESS, result: finalRes });
    };

  };
