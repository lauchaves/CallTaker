// func q se ejecutan dependiendo el msj recibido en la cola
import * as constants from './constants';
import { postEmergencies } from '../services/emergency';
import { setEmergencyPriority } from '../services/emergencyPriority';

export const handleQueueMapping = { 
    [constants.emergencyType.PHONE]: postEmergencies,
    [constants.emergencyType.SMS]: postEmergencies,
    'priority': setEmergencyPriority 

};