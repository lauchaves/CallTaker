import React, { Component } from 'react';
import Login from './../containers/Login/LoginContainer';
import { Router } from 'react-router'


  class Root extends Component {

    constructor(props) {
     super(props);
        const routes = {
            childRoutes: [
              {
                path: '/',
                component: Login,
              },
            ],
          };
          this.state = { routes };
    }

    render() {
        const { history } = this.props;
        const { routes } = this.state;
      return (
        <Router history={ history } routes={ routes } />
        
      )
    }
  }

export default Root;