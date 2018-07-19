// recibe los msj del Backend  -- similar a lo de las colas con un mapa con llaves 

import * as constants from '../server/constants';
import io from 'socket.io-client';

//export let emergencySocketinfo;
const { socketIOMsgType } = constants;

const handleSocketMsgMapping = mobxStore => ({ [socketIOMsgType.NEW_EMERGENCY]: mobxStore.emergency.getEmergencies});


export const connectSocket = () => {
    const socket = io.connect('http://localhost:4001', { 'forceNew': true });
    return socket;
}



export const listener = async mobxStore => {
    const eventsMap = handleSocketMsgMapping(mobxStore);
    
    const socket = connectSocket();

    Object.keys(eventsMap).map( async eventKey => {
        await socket.on(eventKey, async data => {
            await eventsMap[eventKey]();
        })
    });


};
