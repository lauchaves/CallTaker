import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import  login from './loginReducer';

const rootReducer = combineReducers({

  form: formReducer,
  login: login

})

const store = createStore(rootReducer)