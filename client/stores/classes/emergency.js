import {observable, computed, reaction } from 'mobx';

class Emergency {
    @observable emergenciesList;

    constructor() {
        this.emergenciesList = [];
    };

    @computed get emergencies () {
        return this.emergenciesList;
    }

    // action lleva la logica bd 

    /*
    const emergenciesDb = await getEmergencies(); // el resultado del query// emergency = {type: '', description: ''}

    this.emergenciesList = emergenciesDb; 
    */


    // emergency = {type: '', description: ''}
};

export const emergencyStore = new Emergency();
