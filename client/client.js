import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import login from './redux/modules/loginReducer';
import Root from './containers/Root/Root';
import { browserHistory } from 'react-router';

import  {store as mobxStore}  from './stores/index'; 

//sessionStorage.clear();


//console.log(mobxStore); // this returns -> {authStore: Auth, emergencyStore: Emergency}

const reducers = combineReducers({login, form: formReducer});

const dispatcher = () => ({ getState, dispatch }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
}; ;

const storeCreator = compose(applyMiddleware(dispatcher()));
const create = storeCreator(createStore);

const reduxStore = create(reducers);

ReactDOM.render(
<Provider {...mobxStore}>
        <Root key={`key-${Date.now()}`} store={reduxStore} history={browserHistory} />
</Provider>,
  document.getElementById('root')
);

