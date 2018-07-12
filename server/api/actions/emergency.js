import { getEmergencies } from './../../services/emergency'
import { action } from 'mobx';

export const emergency  = async (req, res) => {
    console.log('actions emergency');
    const result = await getEmergencies();

    console.log('action', result);
    if (!result || !result.length) 
        res.send({error: "No Emergencies"}); 

    res.send(result);

};

