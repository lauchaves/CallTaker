import React, { Component } from 'react';
import { cf } from '../Dispatch/dispatch.scss';
import { Table } from '../../components/Table/Table';
import { Header } from '../../components/Header/Header';
import { inject, observer } from 'mobx-react';
import { emergencyListener, connectSocket } from '../../socketListener';
import Dispatch from '../Dispatch/Dispatch';

@inject("emergency", "auth")
@observer
class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
        show:false
      }
    }

    displayEmergencyDialog = () => {
        this.setState({show:true});
    }

    closeDialog = () => {
      this.setState({show:false});
    }



    async componentWillMount () {
     await this.props.emergency.getEmergencies();
    };

    render() {

      const dialog = this.state.show ? <Dispatch  onCloseDialog = {this.closeDialog}/> : null;

      return (
        <div>
          <Header/>
          <br/>
          <Table onRowClick={this.displayEmergencyDialog}  headerMapping={this.props.emergency.emergencyHeaderMapping} list={this.props.emergency.emergencies} />
          {dialog}
        </div>
      );
    
    }
  }


  //onRowClick={}
  export default Home;