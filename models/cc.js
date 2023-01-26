const Sequelize = require('sequelize');
const db = require('../config/config');
const Factura = require('./factura');


const CuentaCorriente = db.define('cuentacorriente',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: Sequelize.DATEONLY
    },
    total: {
        type: Sequelize.DECIMAL(10,2)
    },
    acuenta: {
        type: Sequelize.DECIMAL(10,2)
    },
    saldo: {
        type: Sequelize.DECIMAL(10,2)
    }
},{
    timestamps:false
})
CuentaCorriente.Factura = CuentaCorriente.belongsTo(Factura, {as: "facturafk"});
module.exports = CuentaCorriente;