import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'


let LoginForm = props => {
  const { handleSubmit } = props
    return (
      <form onSubmit={handleSubmit}>
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
    )
  }
  
  LoginForm = reduxForm({
    form: 'login'
  })(LoginForm)
  
  export default LoginForm
