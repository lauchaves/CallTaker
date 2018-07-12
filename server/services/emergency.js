import * as dal from './../dal/emergencyRepo';

export const getEmergencies = async () => {
    console.log('emergency service');
    const result = await dal.getEmergencies();
    return result;
};
