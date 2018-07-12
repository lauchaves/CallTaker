import React, { Component } from 'react';
import { cf } from '../../client.scss';
import { Table } from '../../components/Table/Table';
import { Header } from '../../components/Header/Header';
//import { emergencyStore } from '../../stores/classes/emergency';
import { inject, observer } from 'mobx-react';
import { makeGet } from '../../apiHelper/apiHelper';
import constants from '../../constants';


// alimentar el store con la respuesta del api
// 

@inject("emergencyStore")
@observer
class Home extends Component {
  
    constructor(props) {
      super(props);
      this.store = emergencyStore
    }

    getEmergencies = async () => {
      const emergencies = await makeGet(`${constants.SERVER_URL}${constants.EMERGENCY_URL}`);
      console.log(emergencies);
    };

    componentWillMount() {
      this.getEmergencies;
    }


  
    render() {
      const testList = [{ Type: "Robbery", Description: "Robbery at bank" }, { Type: "Fire", Description: "Fire at Park" } ];
      // this.store.emergenciesList; lista de emergencias from DB
      
      return (
        <div>
          <Header/>
          <br/>
          <Table list={testList} />
        </div>
      );
    
    }
  }

  export default Home;