import express from 'express';
import bodyParser from 'body-parser';
import { setupApis } from './api/api';
import { mockQueueMessages } from './workers/emitter';
import { receiveMessages } from './workers/consumer';

let app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

setupApis(app);




app.listen(5000, async () => {
    const messagesList = ["Drug overdose","Crime","Building Fire","Heart Attack","Drowning"];
    await mockQueueMessages(messagesList);
    await receiveMessages();
    console.log('server started - 5000');
});