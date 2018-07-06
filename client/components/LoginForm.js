import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { cf } from './../client.scss';

const LoginForm = props => {
  const { handleSubmit, model } = props;
  const setValue = (event, newValue, previousValue, name) => {
    model[name] = newValue;
   };

   //<ButLaton bsStyle="primary" onClick={ this.saveReport }>Save this Report</Button>
   /*const notlogin = this.props. ? (
    <label for="favorite-animal">Favorite Animal</label>
    
   ) : null;*/

    return (
      <div className={ cf("loginStyle") }>
        <div className = { cf("containerStyle") }>
          <form onSubmit={handleSubmit}>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Username"
              onChange={setValue}
            />
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
              onChange={setValue}
            />
            <button type="submit" label="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
  

 export default reduxForm({
    form: 'login'
  })(LoginForm);
