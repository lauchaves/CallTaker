import { putEmergencies, getEmergencies } from './../../services/emergency'
import { action } from 'mobx';

export const emergency  = async (req, res) => {
    //console.log('actions emergency');
    const result = await getEmergencies();
   
    res.send(result);
    return res;
};


export const updateEmergency  = async (req, res) => {
    //console.log('actions updateEmergency', req);
    //console.log(req.body);
    const result = await putEmergencies(req.body);
   
    res.send(result);
    return res;
};



