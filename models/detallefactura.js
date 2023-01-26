const Sequelize = require('sequelize');
const Articulo = require('./articulos');
const Factura = require('./factura');
const db = require('../config/config');

const Detallefactura = db.define('detallefactura',{
    cantidad:{
        type: Sequelize.INTEGER
    }, precio:{
        type: Sequelize.DECIMAL(10,2)
    }
}, {timestamps:false});

Detallefactura.Articulo =Detallefactura.belongsTo(Articulo, {as: "articulos"});
Detallefactura.Factura =Detallefactura.belongsTo(Factura, {as: "factura"})

module.exports = Detallefactura;