import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import { setupApis } from './api/api';
import { mockQueueMessages } from './workers/emitter';
import { receiveMessages } from './workers/consumer';
import * as constants from './workers/constants';
import { createSocketServer } from './socketIO';

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
createSocketServer(app);

app.listen(5000, async () => {
    console.log('server started - 5000');
    const { emergencyType } = constants;

    const messagesList = [
        {type: emergencyType.PHONE , description: "Drug overdose"},{type: emergencyType.SMS, description: "Crime"},
        {type: emergencyType.PHONE, description: "Building Fire"},{type: emergencyType.PHONE, description: "Heart Attack"},
    {type: emergencyType.SMS, description:"Drowning"}];

   // await mockQueueMessages(messagesList);
   // await receiveMessages();
});