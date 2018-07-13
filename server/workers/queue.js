// conex canal 

import amqp from 'amqplib';


export const connectToQueue = async () => {
    let conn;
    let channel;
    // connect to rabbitMQ server
    try {
         conn = await amqp.connect('amqp://localhost');
        //create a channel, which is where most of the API for getting things done resides
         channel = await conn.createChannel();
    
    }catch (err) {
        console.log(err);
    }
     
    return {conn, channel};
        
}