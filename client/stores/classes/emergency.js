import {observable, computed, reaction, action } from 'mobx';
import { makeGet } from '../../apiHelper/apiHelper';
import * as constants from '../../constants';
import { hydrate } from './auth';
import dispatch from '../../redux/modules/dispatch';

class Emergency {
    @observable emergenciesList;
    //hacer un map observable para dar formato a la tabla
    @observable handleEmergencygMapping;
    @observable emergencyTableExcludedColumns;

    constructor() {
        this.emergenciesList = [];
        this.emergencyTableExcludedColumns = ['id', 'dispatch_id', 'person_id'];

        this.emergencyHeaderMapping = {
            emergency_state: 'Status',
            emergency_type: 'Emergency Type',
            description: 'Description',
            user_name: 'User',
            timestamp: 'Time Stamp'
        };
    };

    @computed get emergencies () {
        return this.emergenciesList;
    }

    @action getEmergencies = async () => {

        this.emergenciesList = await makeGet(`${constants.SERVER_URL}${constants.EMERGENCY_URL}`);
    };

};

export default new Emergency();

