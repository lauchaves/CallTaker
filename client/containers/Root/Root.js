import React, { Component } from 'react';
import Login from '../Login/Login';
import { Router, browserHistory } from 'react-router'
import { getToken } from '../../redux/helpers/sessionhelper';
import Home from '../Home/Home';
import  mobxStore  from '../../stores'; 
import { Provider } from 'react-redux';


  class Root extends Component {

    verifyToken = () => { 
      if (getToken()==null) {
        return;
      }
        
      browserHistory.push('/home');
    }; 

    constructor(props) {
     super(props);
     
        const routes = {
            childRoutes: [
              {
                path: '/',
                component: Login,   
                onEnter: this.verifyToken   
              },
              {
                path: '/home',
                component: Home,
                
              },
            ],
          };
          this.state = { routes };
    };

    

    render() {
      const { history, store } = this.props;
      const { routes } = this.state;

      return (
        <Provider store={store} >
          <Router history={ history } routes={ routes } />
        </Provider>
        
      );
    };
  };

export default Root;