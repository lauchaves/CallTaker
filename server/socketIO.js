import * as server from './server';
import SocketIO from 'socket.io';
import  { createServer } from 'http';
import * as constants from './constants';

let io; 

export const createSocketServer = app => { 
    const server = createServer(app);
    io = new SocketIO(server);
    server.listen(4001); 
};

export const connectIo = async () => {
    const conn = await io.on('connection', socket => socket);
    return conn;
};

export const notify = async id => {
    const conn = await connectIo();

    const { socketIOMsgType, EMERGENCIES_ROOM } = constants;
    //conn.on(EMERGENCIES_ROOM, ()=> {
    console.log(socketIOMsgType.NEW_EMERGENCY, id);
    conn.emit(socketIOMsgType.NEW_EMERGENCY, {emergencyId: id});
    // });
}


export const notifyPriority = async emergency => {
    const conn = await connectIo();

    const { socketIOMsgType, EMERGENCIES_ROOM } = constants;
    //conn.on(EMERGENCIES_ROOM, ()=> {
    console.log(socketIOMsgType.NEW_EMERGENCY, emergency);
    conn.emit(socketIOMsgType.NEW_EMERGENCY, {emergencyPriority: emergency});
    // });
}


// encargado de config el socket io 

// export funct q manda la notificacion