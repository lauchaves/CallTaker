import amqp from 'amqplib/callback_api';
import { connectToQueue } from './queue';
import * as constants from './constants';
import bluebird from 'bluebird';


export const mockQueueMessages = async messages => {
    const {conn, channel} = await connectToQueue(); 
    channel.assertExchange(constants.queueName, 'topic', {durable: true});
    
    await bluebird.mapSeries(messages, 
        async msg => { await setTimeout( 
            async () => await channel.publish(constants.queueName, msg.type , 
                new Buffer(JSON.stringify(msg)), {persistent: true}), 5000
        )}
    );
};

//stringify buffer