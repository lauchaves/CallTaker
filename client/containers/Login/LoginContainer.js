import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../../components/LoginForm'
import { login } from '../../redux/modules/loginReducer';
import { userModel } from '../../models/user';

@connect(
  (state, props) => ({
    user: state.user,
    
  }),
  dispatch =>
    bindActionCreators({login},dispatch)
)
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          model: userModel
        };
    }

    handleSubmit = async () =>  {
      console.log('loginCOntainer');
      console.log(this.state.model);
      return await login(this.state.model);

    };
   
    render() {
      return <LoginForm model={this.state.model}  handleSubmit={this.handleSubmit} />;
    }
  }

  export default Login;