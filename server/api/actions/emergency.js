import { getEmergencies } from './../../services/emergency'
import { action } from 'mobx';

export const emergency  = async (req, res) => {
    console.log('actions emergency');
    const result = await getEmergencies();
   
    res.send(result);
    return res;
};

