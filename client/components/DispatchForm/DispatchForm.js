import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { cf } from './dispatchForm.scss';
import * as constants from '../../constants';
import { makeGet } from './../../apiHelper/apiHelper';
import { connect } from 'react-redux';
import { loadEmergencyInfo } from '../../redux/modules/dispatch';


class DispatchForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      model: props.model,
      resources: []
    };
  }

  setValue = (event, newValue, previousValue, name) => {
    this.state.model[name] = newValue;
   };

   async componentWillMount () {

    this.props.loadEmergencyInfo(this.state.model);

    const getResources  = await makeGet(`${constants.SERVER_URL}${constants.GET_RESOURCE}`);
    this.setState({resources: getResources});
   };

  render() {
      const { handleSubmit, currentEmergency} = this.props;
      const model = this.state.model;
      return (
        <div className={ cf("container") }>
          <div>
            <form href="#" onSubmit={ async (event)=> {event.preventDefault();  await handleSubmit();}}>  
              <div>
                    <label className={ cf("labelTitle") }>Emergency Type: </label> 
                    <Field
                    value={model.emergency_type}
                    placeholder="Emergency Type"
                    name="emergency_type"
                    component="input"
                    type="text"
                    readOnly="readOnly"
                    
                />
                </div> 
                <div>
                    <label className={ cf("labelTitle") }>Description: </label> 
                    <Field
                    //value={model.description}
                    placeholder="Description"
                    name="description"
                    component="input"
                    type="text"
                    readOnly="readOnly"
                />
                </div> 

                <div>
                    <label className={ cf("labelTitle") }>Fullname: </label> 
                    <Field
                    //= {model.fullname}
                    name="fullname"
                    component="input"
                    type="text"
                    placeholder="Fullname"
                    onChange={this.setValue}
                />
                </div> 
                <div>
                    <label className={ cf("labelTitle") }>Identity Card: </label> 
                    <Field
                    value= {model.person_id}
                    name="person_id"
                    component="input"
                    type="text"
                    placeholder="Identity Card"
                    onChange={this.setValue}
                />
                </div> 
                <div>
                    <label className={ cf("labelTitle") }>Address: </label> 
                    <Field
                    value= {model.address}
                    name="address"
                    component="input"
                    type="text"
                    placeholder="Address"
                    onChange={this.setValue}
                />
                </div>
                <div>
                    <label className={ cf("labelTitle") }>Phone: </label> 
                    <Field
                    value= {model.phone}
                    name="phone"
                    component="input"
                    type="text"
                    placeholder="Phone"
                    onChange={this.setValue}
                />
                </div>
                <div>
                    <label className={ cf("labelTitle") }>Details</label> 
                    <Field
                    value= {model.details}
                    name="details"
                    component="input"
                    type="text"
                    placeholder="Details"
                    onChange={this.setValue}
                />
                </div> 
                <div> 
                    <label className={ cf("labelTitle") } >Resource:  </label>
                    <Field 
                    value= {model.resource}
                    name="resource" 
                    component="select"
                    onChange={this.setValue}
                    >
                    <option></option>
                    {this.state.resources.map( (resource, index) => <option key={index} value={resource.resource_id}>{resource.resource_name}</option> )}
                    loadEmergencyInfo()
                    </Field>
                </div> 
              <button type="submit" label="submit">Dispatch</button>
            </form>
          </div>
        </div>
      );
  }
}
  

let dispatchReduxForm = reduxForm({ form: 'makeDispatch' })(DispatchForm);
dispatchReduxForm = connect(
    state => {
        return ({initialValues: state.dispatch.emergencyInfo});
    }, {loadEmergencyInfo}
)(dispatchReduxForm);


export default dispatchReduxForm;

