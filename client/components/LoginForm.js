import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { cf } from './../client.scss';

class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      model: props.model
    };
  }

 
  setValue = (event, newValue, previousValue, name) => {
    console.log(newValue);
    this.state.model[name] = newValue;
   };

  render() {
    const { handleSubmit } = this.props;
    const model = this.state.model;
    return (
      <div className={ cf("loginStyle") }>
        <div className = { cf("containerStyle") }>
          <form onSubmit={ async (event)=> {event.preventDefault();  await handleSubmit();}}>
            <Field
              value= {model.email}
              name="email"
              component="input"
              type="text"
              placeholder="Username"
              onChange={this.setValue}
            />
            <Field
             value= {model.password}
              name="password"
              component="input"
              type="password"
              placeholder="Password"
              onChange={this.setValue}
            />
            <button type="submit" label="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  
  }
}
  

 export default reduxForm({ form: 'login' })(LoginForm);

    //<ButLaton bsStyle="primary" onClick={ this.saveReport }>Save this Report</Button>
    /*const loginFail = this.props. ? (
    <label for="favorite-animal">Cannot find user. Try Again</label
    
   ) : null;
   */