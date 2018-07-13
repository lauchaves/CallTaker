import React, { Component } from 'react';
import { cf } from '../../client.scss';
import { Table } from '../../components/Table/Table';
import { Header } from '../../components/Header/Header';
import { inject, observer } from 'mobx-react';

// alimentar el store con la respuesta del api
// 


@inject("emergency", "auth")
@observer
class Home extends Component {

    constructor(props) {
      super(props);
    }

    async componentWillMount () {
     await this.props.emergency.getEmergencies();
      //console.log("response",this.props.emergency.emergencies);
    };

    render() {
      console.log("response",this.props.emergency.emergencies);
      const testList = [{ Type: "Robbery", Description: "Robbery at bank" }, { Type: "Fire", Description: "Fire at Park" } ];
      return (
        <div>
          <Header/>
          <br/>
          <Table list={this.props.emergency.emergencies} />
        </div>
      );
    
    }
  }

  export default Home;