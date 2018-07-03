import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App';
import { Provider } from 'mobx-react';
import { browserHistory } from 'react-router';

ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(
    <Provider>
      <Root key={`key-${Date.now()}`} store={store} history={browserHistory} />
    </Provider>, 
    document.getElementById('root')
);
