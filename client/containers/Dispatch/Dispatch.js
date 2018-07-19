import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cf } from './dispatch.scss';
import DispatchForm from '../../components/DispatchForm/DispatchForm';

import { browserHistory } from 'react-router'

/*
@connect(
  (state, props) => ({
    
    
  }),
  dispatch =>
    //bindActionCreators({login},dispatch)
)
*/
class Dispatch extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(nextProps){
        
    }


    handleSubmit = async () =>  {
      // save dispatch

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
           <DispatchForm />
        </div>
      </div>
      );
    };
  };

  export default Dispatch;

   /*       <!-- <div className={ cf("modal-footer") }>
  <h3>Modal Footer</h3>
  </div>

  */