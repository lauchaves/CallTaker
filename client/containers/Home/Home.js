import React, { Component } from 'react';
import { cf } from '../../client.scss';
import { Table } from '../../components/Table/Table';
import { Header } from '../../components/Header/Header';
import { inject, observer } from 'mobx-react';
import { emergencyListener, connectSocket } from '../../socketListener';

@inject("emergency", "auth")
@observer
class Home extends Component {

    constructor(props) {
      super(props);
    }

    async componentWillMount () {
     await this.props.emergency.getEmergencies();
    };

    render() {
      //console.log("response",this.props.emergency.handleEmergencygMapping);
      return (
        <div>
          <Header/>
          <br/>
          <Table mapping={this.props.emergency.handleEmergencygMapping} list={this.props.emergency.emergencies} />
        </div>
      );
    
    }
  }

  export default Home;