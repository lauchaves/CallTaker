import * as dal from './../dal/emergencyRepo';
import { notify } from '../socketIO';
import * as constants from '../../common/constants';

export const getEmergencies = async () => {
    console.log('service');
    const result = await dal.getEmergencies();

    const { emergencyType }= constants;
    
    const formattedResult = result.map( emergency => {

        return Object.assign({}, emergency, {
            emergency_type:  emergencyType[emergency.emergency_type]
          });
        });

    return formattedResult;
};

export const postEmergencies = async emergency => {
    
    try {
        const result = await dal.postEmergencies(emergency);
        await notify(result);
        return result; // emergency_id

    }catch (err) {
        console.log(err);
    };
};


export const putEmergencies = async emergency => {
    try {
        const result = await dal.putEmergencies(emergency);
        return {success: true, result:result}; // emergency_id

    }catch (err) {
        console.log(err);
    };
}