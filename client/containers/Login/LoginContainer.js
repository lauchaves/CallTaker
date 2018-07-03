import React, { Component } from 'react';
import LoginForm from './../../components/LoginForm'


const loginStyle = { width: '100%', margin: 'auto', position: 'fixed', top: '20%'};
const modalStyle = { marginTop: '100px' };
const titleStyle = { paddingBottom: '20px' };
const containerStyle = { textAlign:'center', position: 'relative', margin: '0 auto 100px', maxWidth:'400px',
padding: '10px 35px 35px', boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)', zIndex: '1' };


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
        };
    }

    submit = values => {
      console.log(values)
      //this.setState
    }
    render() {
      return <LoginForm onSubmit={this.submit} />
    }
  }

  export default Login;