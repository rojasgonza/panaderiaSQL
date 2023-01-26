const Sequelize = require('sequelize');
const db = require('../config/config');
const CuentaCorriente = require('./cc');

const Pagos = db.define('pagos', {
    fecha:{
        type: Sequelize.DATEONLY
    },
    monto: {
        type: Sequelize.DECIMAL(10,2)
    }
}, {timestamps: false})
Pagos.CuentaCorriente = Pagos.belongsTo(CuentaCorriente, {as: "ccfk"})
module.exports = Pagos;