import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { cf } from '../../client.scss';

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
      const notLogged = <label> Unable to authenticate. Try Again</label>;
      console.log(this.props.isLogged);
      const error = this.props.isLogged ? null : <label> Unable to authenticate. Try Again</label> ;


      return (
        <div className={ cf("centerContainer") }>
          <div className = { cf("containerStyle") }>
            <form href="#" onSubmit={ async (event)=> {event.preventDefault();  await handleSubmit();}}>
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
              {error}
              <button type="submit" label="submit">Submit</button>
            </form>
          </div>
        </div>
      );

  }
}
  

 export default reduxForm({ form: 'login' })(LoginForm);