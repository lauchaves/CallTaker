import { makePost } from '../helpers/apiHelper';
import * as constants from './constants';

const LOGIN= 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN__FAIL = 'LOGIN__FAIL';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return state;
    case LOGIN_SUCCESS:
      return { success: true, data: action.result};
    case LOGIN__FAIL:
      return { error: action.result};
    default:
      return state;
  }
};

export const login = model => async dispatch => {
  console.log(model);
    
    dispatch({type: LOGIN});
    const payload = {'email':model.email, 'password':model.password};
  
    const result = await makePost(constants.LOGIN_URL, payload);
    const finalRes = result.text;
    
    console.log(finalRes);

    if (finalRes.auth == false) {
      console.log('fail');
      const errorRes = finalRes.error.message;
      dispatch({ type: LOGIN__FAIL, result: errorRes});

    }
    else {
      console.log('success');
      const data = finalRes.token;
      dispatch({type: LOGIN_SUCCESS, result: data });
    };



  };
