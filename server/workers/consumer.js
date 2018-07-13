import amqp from 'amqplib/callback_api';

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel( (err, ch) => {
    const q = 'Emergencies';

    ch.assertQueue(q, {durable: false});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, (msg) => {
        console.log(msg);
      console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
  });
});