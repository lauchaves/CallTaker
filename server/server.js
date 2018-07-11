import express from 'express';
import bodyParser from 'body-parser';
import { setupApis } from './api/api';

let app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

setupApis(app);

app.listen(5000, () => {
    console.log('server started - 5000');
});