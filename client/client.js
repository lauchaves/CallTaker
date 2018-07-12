import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import login from './redux/modules/loginReducer';
import Root from './containers/Root/Root';
import { browserHistory } from 'react-router';

import stores from './stores/index';

 
const reducers = combineReducers({login, form: formReducer});

const dispatcher = () => ({ getState, dispatch }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
}; ;

const storeCreator = compose(applyMiddleware(dispatcher()));
const create = storeCreator(createStore);

const store = create(reducers, ...stores);

ReactDOM.render(
<Provider store={store}>
        <Root key={`key-${Date.now()}`} store={store} history={browserHistory} />
      </Provider>,
  document.getElementById('root')
);

