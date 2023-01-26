const express = require('express')
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('./config/config');

require('./models/cliente')
require('./models/articulos')
require('./models/factura')
require('./models/detallefactura')
require('./models/pago')
require('./models/cc')



const cors = require('cors');
const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

db.sync()
    .then( () => console.log('Conectado'))
    .catch( error => console.log(error))
app.use(cors());

///rutas
app.use('/', routes());
app.listen(5000)