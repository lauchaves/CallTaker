import amqp from 'amqplib/callback_api';
import { connectToQueue } from './queue';
import * as constants from './constants';



export const receiveMessages = async () => {
  const {conn, channel} = await connectToQueue(); 
  channel.assertExchange(constants.queueName, 'topic', {durable: true});
  
  try {
    const queue= await channel.assertQueue('queue', {exclusive: true}) ;
    channel.prefetch(1);

    await channel.bindQueue('queue', constants.queueName, 'topic');
    
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", 'queue');

     channel.consume('queue',  msg => { 
      console.log(" [x] %s", msg.content.toString());
  
      }, {noAck: true});

  }catch(err){
    console.log(err);
  }

};
