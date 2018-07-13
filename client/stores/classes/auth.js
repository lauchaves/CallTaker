import {observable, computed, reaction, action } from 'mobx';
import { verifyToken } from '../../../auth/server/services/authenticate';
import { getToken } from '../../redux/helpers/sessionhelper';


class Auth {
    @observable token;

    constructor() {
        this.token = null;
        
    };

    @computed get isAuthenticated () {
        return !!this.token;
    }

    @action async hydrate (token) { 
        this.token = token;
    }

};

export default new Auth();

