import React from 'react';
import ReactDOM from 'react-dom';
import cf from './client.scss';
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import login from './redux/modules/loginReducer';

import Root from './components/Root';
import { browserHistory } from 'react-router';

//const reducers = {form: formReducer};
const reducers = combineReducers({login, formReducer});
const store = createStore(reducers);

ReactDOM.render(
      <Provider store={store}>
        <Root key={`key-${Date.now()}`} store={store} history={browserHistory} />
      </Provider>,
    document.getElementById('root')
);

