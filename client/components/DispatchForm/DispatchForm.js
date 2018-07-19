import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { cf } from './dispatchForm.scss';

class DispatchForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      //model: props.model
    };
  }

  setValue = (event, newValue, previousValue, name) => {
    console.log(newValue);
    //this.state.model[name] = newValue;
   };

  render() {
      const { handleSubmit } = this.props;
      const model = this.state.model;

      return (
        <div className={ cf("container") }>
          <div>
            <form href="#" onSubmit={ async (event)=> {event.preventDefault();  await handleSubmit();}}>
                <div>
                    <label className={ cf("labelTitle") }>Emergency Status: </label>
                    <Field name="status" component="select">
                        <option></option>
                        <option value="ff0000">Awaiting</option>
                        <option value="00ff00">Taken</option>
                    </Field>
                </div>
                
                <div>
                    <label className={ cf("labelTitle") }>Fullname: </label> 
                    <Field
                    //value= {model.email}
                    name="fullname"
                    component="input"
                    type="text"
                    placeholder="Fullname"
                    //onChange={this.setValue}
                />
                </div> 
                <div>
                    <label className={ cf("labelTitle") }>Address: </label> 
                    <Field
                    //value= {model.email}
                    name="address"
                    component="input"
                    type="text"
                    placeholder="Address"
                    //onChange={this.setValue}
                />
                </div>
                <div>
                    <label className={ cf("labelTitle") }>Phone: </label> 
                    <Field
                    //value= {model.email}
                    name="phone"
                    component="input"
                    type="text"
                    placeholder="Phone"
                    //onChange={this.setValue}
                />
                </div>
                <div>
                    <label className={ cf("labelTitle") }>Description: </label> 
                    <Field
                    //value= {model.email}
                    name="Description"
                    component="input"
                    type="text"
                    placeholder="Description"
                    //onChange={this.setValue}
                />
                </div> 
                <div> 
                    <label className={ cf("labelTitle") } >Resource:  </label>
                    <Field name="resources" component="select">
                        <option></option>
                        <option value="ff0000">Fireman</option>
                        <option value="00ff00">Police</option>
                        <option value="0000ff">Doctor</option>
                    </Field>
                </div> 
              <button type="submit" label="submit">Dispatch</button>
            </form>
          </div>
        </div>
      );
  }
}
  

export default reduxForm({ form: 'dispatch' })(DispatchForm);