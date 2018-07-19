import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import  login from './loginReducer';
import dispatch from './dispatch';

const rootReducer = combineReducers({

  form: formReducer,
  login: login,
  dispatch: dispatch

})

const store = createStore(rootReducer)