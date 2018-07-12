import dal from './../dal/emergencyRepo';

export const getEmergencies = async () => {
    const result = await dal.getEmergencies();
    return result;
};
po
