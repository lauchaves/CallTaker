import {observable, computed, reaction } from 'mobx';

class Emergency {
    @observable emergenciesList;

    constructor() {
        this.emergenciesList = [];
    };

    @computed get emergencies () {
        return this.emergenciesList;
    }

};

export default new Emergency();
