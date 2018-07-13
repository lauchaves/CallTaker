import {observable, computed, reaction, action } from 'mobx';
import { makeGet } from '../../apiHelper/apiHelper';
import * as constants from '../../constants';
import { hydrate } from './auth';

class Emergency {
    @observable emergenciesList;

    constructor() {
        this.emergenciesList = [];
    };

    @computed get emergencies () {
        return this.emergenciesList;
    }

    @action getEmergencies = async () => {
        console.log('emergency store');

        this.emergenciesList = await makeGet(`${constants.SERVER_URL}${constants.EMERGENCY_URL}`);
    };

};

export default new Emergency();
