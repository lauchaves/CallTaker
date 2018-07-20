import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cf } from './dispatch.scss';
import DispatchForm from '../../components/DispatchForm/DispatchForm';
import { emergencyModel } from '../../models/emergency';
import { makeDispatch } from '../../redux/modules/dispatch';


@connect(
  state => ({
    dispatchSuccess: state.dispatch.dispatchSuccess,
    dispatchResponse: state.dispatch.dispatchResponse
  }),
  dispatch =>
    bindActionCreators({makeDispatch},dispatch)
)
class Dispatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
          model: emergencyModel
        };
    }


    handleSubmit = async () =>  {
      console.log(this.props.emergencyId);

      const formattedEmergencyModel = this.state.model;
      formattedEmergencyModel.emergency_id=this.props.emergencyId;
      console.log('new obj',formattedEmergencyModel);
      

      await this.props.makeDispatch(formattedEmergencyModel);

    };

    render() {
      const { onCloseDialog } = this.props;
      return (
      <div id="dispatchDialog" className= { cf("modal-content") }>
        <div className={ cf("modal-header") }>
         
          <span onClick={ ()=> onCloseDialog() } className={ cf("close") }>&times;</span>

          <h2>Emergency Information</h2>
        </div>
        <div className={ cf("modal-body") }>
           <DispatchForm model={this.state.model} handleSubmit={this.handleSubmit}/>
        </div>
      </div>
      );
    };
  };

export default Dispatch;