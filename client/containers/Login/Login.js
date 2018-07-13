import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../../components/LoginForm/LoginForm'
import { login } from '../../redux/modules/loginReducer';
import { userModel } from '../../models/user';
import { browserHistory } from 'react-router'

@connect(
  (state, props) => ({
    loginSuccess: state.login.loginSuccess,
    response: state.login.response
    
  }),
  dispatch =>
    bindActionCreators({login},dispatch)
)
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          model: userModel,
          isLogged: true,
        };
    }

    componentWillReceiveProps(nextProps){
      if (nextProps.loginSuccess == true ) {
        browserHistory.push('/home');
        return;
      }
      console.log('before set state');
      this.setState({ isLogged: !this.state.isLogged });
      console.log('after',this.state.isLogged);
      return;
    }


    handleSubmit = async () =>  {
      await this.props.login(this.state.model);

    };
   
    render() {
      return <LoginForm isLogged={this.state.isLogged} model={this.state.model}  handleSubmit={this.handleSubmit} />;
    };
  };

  export default Login;