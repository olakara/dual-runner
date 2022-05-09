const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app:service-two');
const morgan = require('morgan');



const PORT = process.env.PORTTWO || 9090;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.use(morgan('short'));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// App status
app.get('/', (req, res) => {
    res.send('ok from service 2');
});


app.listen(PORT, HOST, () => {
    debug('Listening on port: ' + chalk.green(PORT));
});