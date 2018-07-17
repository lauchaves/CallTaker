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



 /* 
 async componentDidMount () {
      await emergencyListener();
    }


    async componentDidMount () {

      emergencyListener();

     
      const socket = connectSocket();
      socket.on(socketIOMsgType.NEW_EMERGENCY, async data => {
        console.log(data);
        if (!('emergencyId' in data))
          return;

        await this.props.emergencies.getEmergencies();
    });

   
    } */

    /*
    async componentWillReceiveProps () {
      console.log('willReceiveprops');
      const res = await getEmergencySocket();
     // if (!(res.hasOwnProperty('emergencyId')))
       // return;
        console.log(res);
     // await this.props.emergency.getEmergencies();
    }
  */

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