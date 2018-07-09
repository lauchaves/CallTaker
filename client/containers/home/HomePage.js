import React, { Component } from 'react';
import { userModel } from '../../models/user';
import { NavBar } from '../../components/navbar';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class HomePage extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        model: props.model
      };
    }
  
    render() {
      const model = this.state.model;
      return (
        <div>
          <NavBar/>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell numeric>Calories</TableCell>
                  <TableCell numeric>Fat (g)</TableCell>
                  <TableCell numeric>Carbs (g)</TableCell>
                  <TableCell numeric>Protein (g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">qwer</TableCell>
                  <TableCell numeric>1234</TableCell>
                  <TableCell numeric>tyui</TableCell>
                  <TableCell numeric>jjjj</TableCell>
                  <TableCell numeric>llll</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      );
    
    }
  }

  export default HomePage;