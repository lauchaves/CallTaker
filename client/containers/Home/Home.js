import React, { Component } from 'react';
import { userModel } from '../../models/user';
import { cf } from '../../client.scss';
import { Table } from '../../components/Table/Table';
import { Header } from '../../components/Header/Header';

class Home extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        model: props.model
      };
    }
  
    render() {
      const model = this.state.model;
      const testList = [{ Type: "Robbery", Description: "Robbery at bank" }, { Type: "Fire", Description: "Fire at Park" } ];

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