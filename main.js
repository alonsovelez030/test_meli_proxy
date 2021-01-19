/* Core */
require('dotenv').config();

const express = require('express');
const app = express();

/* Routes */
const proxyMsProducts = require('./routes/products');

/* Enviroment vars */

const EXPOSE_PORT = process.env.EXPOSE_PORT;
const HOST = process.env.HOST;
 
/* Intercepting */
app.use('', proxyMsProducts);

/* Runner Logs */
app.listen(EXPOSE_PORT, HOST);
console.log(`Running users listening on host ${HOST} and private port ${EXPOSE_PORT}`);