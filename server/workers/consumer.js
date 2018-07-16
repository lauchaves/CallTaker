import amqp from 'amqplib/callback_api';
import { connectToQueue } from './queue';
import * as constants from './constants';
import { postEmergencies } from '../services/emergency';
import { handleQueueMapping } from './handlers';


export const receiveMessages = async () => {
  const {conn, channel} = await connectToQueue(); 
  channel.assertExchange(constants.queueName, 'topic', {durable: true});
  
  try {
    await channel.assertQueue('phoneQueue', {exclusive: true}) ;
    await channel.assertQueue('smsQueue', {exclusive: true}) ;

    channel.prefetch(1);
    const { emergencyType } = constants;

    await channel.bindQueue('phoneQueue', constants.queueName, emergencyType.PHONE);
    await channel.bindQueue('smsQueue', constants.queueName, emergencyType.SMS);
    
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", 'queue');

    channel.consume('phoneQueue', async msg => { 
      console.log(" PHONE [x] %s", msg.content.toString()); 
      //postEmergencies(JSON.parse(msg.content.toString()));
      const message = JSON.parse(msg.content.toString());
      await handleQueueMapping[message.type](message);

      }, {noAck: true});

      channel.consume('smsQueue', async msg => { 
        console.log(" SMS [x] %s", msg.content.toString()); 
        const message = JSON.parse(msg.content.toString());
        await handleQueueMapping[message.type](message);
  
        }, {noAck: true});

  }catch(err){
    console.log(err);
  }

};

//parse msg