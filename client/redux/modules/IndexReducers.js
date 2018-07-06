import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({

  form: formReducer,
  login: loginReducer

})

const store = createStore(rootReducer)