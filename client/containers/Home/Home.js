import React, { Component } from 'react';
import { cf } from '../Dispatch/dispatch.scss';
import { Table } from '../../components/Table/Table';
import { Header } from '../../components/Header/Header';
import { inject, observer } from 'mobx-react';
import { emergencyListener, connectSocket } from '../../socketListener';
import Dispatch from '../Dispatch/Dispatch';
import { emergencyModel } from '../../models/emergency';

@inject("emergency", "auth")
@observer
class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
        show:false,
        currentEmergency: null,
        model: emergencyModel
      }
    }

    displayEmergencyDialog = async emergency => {
      console.log('row click');
      console.log(emergency);
      await this.setState({currentEmergency: emergency});

      this.state.model["emergency_type"] = this.state.currentEmergency.emergency_type;
      this.state.model["description"] =  this.state.currentEmergency.description;

      this.setState({show:true});

    }

    closeDialog = () => {
      this.setState({show:false});
    }



    async componentWillMount () {
     await this.props.emergency.getEmergencies();
    };

    render() {

      const dialog = this.state.show ? <Dispatch currentEmergency={this.state.currentEmergency} onCloseDialog = {this.closeDialog}/> : null;

      return (
        <div>
          <Header/>
          <br/>
          <Table excludedColumns={this.props.emergency.emergencyTableExcludedColumns} onRowClick={this.displayEmergencyDialog}  headerMapping={this.props.emergency.emergencyHeaderMapping} list={this.props.emergency.emergencies} />
          {dialog}
        </div>
      );
    
    }
  }

  export default Home;