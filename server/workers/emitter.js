import amqp from 'amqplib/callback_api';
import { connectToQueue } from './queue';
import * as constants from './constants';
import bluebird from 'bluebird';


export const mockQueueMessages = async messages => {
    const {conn, channel} = await connectToQueue(); 
    channel.assertExchange(constants.queueName, 'topic', {durable: true});
    
    await bluebird.mapSeries(messages, async msg => await channel.publish(constants.queueName,'topic', new Buffer(msg), {persistent: true}));

    /*
    setInterval( async () =>
     await Promise.all(messages.map( async msg => await channel.publish(constants.queueName,'', new Buffer(msg)) ) ), 60000);
     */

    /*setTimeout(() => {
        conn.close(); process.exit(0) 
    }, 500);
    */
};

