import * as constants from './constants';
import request from 'superagent';

/*
export const loginReducer = (state = {}, action ) =>  {
    switch(action.type) {
      case 'SET_LOGGED_USER':
        return action.payload;
      case 'LOGOUT':
        return {};
      default:
        return state;
    }
  };

*/

 export const auth = async values => {
     const email = values.username;
     const password = values.password;
     // const result = await .... post
     console.log(result);
   

    }

      

/*             dispatch({type: types.ADD_RECIPE});
            axios.post(constants.API_URL + 'recipes', recipe).then(resp => {
                dispatch({
                    type: types.ADD_RECIPE_SUCCESS,
                    payload: resp
                });
                dispatch(fetchRecipes());
            }).catch(err => {
                dispatch({
                    type: types.ADD_RECIPE_REJECTED,
                    error: err
                });
            });
        }; 
*/