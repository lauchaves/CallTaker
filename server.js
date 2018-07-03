import express from 'express';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(4000, () => {
    console.log('server started - 3000');
});