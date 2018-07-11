import { getEmergencies } from './../dal/emergencyRepo';

export const emergencyService = async () => {
    const result = await getEmergencies();
    return result;
};

