import {observable, computed, reaction } from 'mobx';
import { verifyToken } from '../../../auth/server/services/authenticate';


class Auth {
    @observable token;

    constructor() {
        this.token = null;
        
    };

    @computed get isAuthenticated () {
        return !!this.token;
    }

};

export const authStore = new Auth();

