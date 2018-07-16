import * as dal from './../dal/emergencyRepo';

export const getEmergencies = async () => {
    const result = await dal.getEmergencies();
    console.log(result);
    return result;
};

export const postEmergencies = async (emergency) => {
    const result = await dal.postEmergencies(emergency);
    console.log('emergencies service result ', result);
    return result;
}