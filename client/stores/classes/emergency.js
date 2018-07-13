import {observable, computed, reaction, action } from 'mobx';
import { makeGet } from '../../apiHelper/apiHelper';
import * as constants from '../../constants';

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
        console.log('route--',`${constants.SERVER_URL}${constants.EMERGENCY_URL}`);
        const response = await makeGet(`${constants.SERVER_URL}${constants.EMERGENCY_URL}`);
        const finalRes = JSON.parse(response.text);
        console.log(finalRes);
        this.emergenciesList = finalRes;
        
    };

};

export default new Emergency();
