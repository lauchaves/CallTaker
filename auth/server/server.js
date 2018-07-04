import express from 'express';
import bodyParser from 'body-parser';
import { setupApis } from './api/api';

let app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

setupApis(app);

app.listen(4000, () => {
    console.log('server started - 4000');
});