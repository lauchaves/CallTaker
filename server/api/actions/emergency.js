import { emergencyService } from './../../services/emergency'
import { action } from 'mobx';

export const emergency  = async (req, res) => {

    const result = await emergencyService();

    console.log('action', result);
    if (!result || !result.length) 

    res.send(result);

};

