import {observable, computed, reaction } from 'mobx';

class Emergency {
    @observable emergenciesList;

    constructor() {
        this.emergenciesList = [];
    };
    // emergency = {type: '', description: ''}
};

const emergencyModel = new Emergency();
export default emergencyModel;
export {Emergency};