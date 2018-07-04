import React from 'react';
import ReactDOM from 'react-dom';
import cf from './client.scss';
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import Login from './containers/Login/LoginContainer';

//<Root key={`key-${Date.now()}`} store={store} history={browserHistory} />
const reducers = {form: formReducer};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

ReactDOM.render(
      <Provider store={store}>
        <Login />
      </Provider>,
    document.getElementById('root')
);

