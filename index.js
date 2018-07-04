import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App';
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import Login from './client/containers/Login/LoginContainer';

ReactDOM.render(<App />, document.getElementById('root'));

//<Root key={`key-${Date.now()}`} store={store} history={browserHistory} />
const reducers = {form: formReducer};
const reducer = combineReducers(reducers);
let store = createStore(reducer);

ReactDOM.render(

      <Login />,
    document.getElementById('root')
);

