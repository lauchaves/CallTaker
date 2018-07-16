// func q se ejecutan dependiendo el msj recibido en la cola
import * as constants from './constants';
import { postEmergencies } from '../services/emergency';

export const handleQueueMapping = { [constants.emergencyType.PHONE]: postEmergencies, [constants.emergencyType.SMS]: postEmergencies };