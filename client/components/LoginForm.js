import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { cf } from './../client.scss';


let LoginForm = props => {
  const { handleSubmit } = props
    return (
      <div className={ cf("loginStyle") }>
        <div className = { cf("containerStyle") }>
          <form onSubmit={ handleSubmit }>
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="Username"
            />
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
            <button type="submit" label="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
  
  LoginForm = reduxForm({
    form: 'login'
  })(LoginForm)
  
  export default LoginForm
