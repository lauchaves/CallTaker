import React, { Component } from 'react';
import Login from '../Login/Login';
import { Router, browserHistory } from 'react-router'
import { getToken } from '../../redux/helpers/sessionhelper';
import Home from '../Home/Home';

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
      const { history } = this.props;
      const { routes } = this.state;

      return (
        <Router history={ history } routes={ routes } />
        
      );
    };
  };

export default Root;