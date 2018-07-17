import * as dal from './../dal/emergencyRepo';
import { notify } from '../socketIO';

export const getEmergencies = async () => {
    const result = await dal.getEmergencies();
    console.log(result);
    return result;
};

export const postEmergencies = async (emergency) => {
    
    try {
        const result = await dal.postEmergencies(emergency);
        await notify(result);
        return result; // emergency_id

    }catch (err) {
        console.log(err);
    }
    

}

// configurar el emitter socket io