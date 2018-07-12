import amqp from 'amqplib/callback_api';


 // connect to rabbitMQ server
amqp.connect('amqp://localhost', (err, conn) => {
    //create a channel, which is where most of the API for getting things done resides
    conn.createChannel((err,ch) => {

        //To send, we must declare a queue for us to send to; then we can publish a message to the queue:
        const q = 'Hello';
        const msg = 'Hello World!';
        ch.assertQueue(q, {durable: false});
        ch.sendToQueue(q, new Buffer(msg));
        console.log(" [x] Sent %s",msg);
    });
    //Close connection
    setTimeout(function() { conn.close(); process.exit(0) }, 500); 
});

