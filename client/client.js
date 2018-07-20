import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reduxReducers} from './redux/modules/indexReducers';
import Root from './containers/Root/Root';
import { browserHistory } from 'react-router';
import  {store as mobxStore}  from './stores/index'; 
import { listener } from './socketListener';

const reducers = combineReducers({...reduxReducers, form: formReducer});

const dispatcher = () => ({ getState, dispatch }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
}; ;

const storeCreator = compose(applyMiddleware(dispatcher()));
const create = storeCreator(createStore);

const reduxStore = create(reducers);

listener(mobxStore);

ReactDOM.render(
<Provider {...mobxStore}>
        <Root key={`key-${Date.now()}`} store={reduxStore} history={browserHistory} />
</Provider>,
  document.getElementById('root')
);

