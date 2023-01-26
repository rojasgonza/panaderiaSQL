const Sequelize = require('sequelize');
const Cliente = require('./cliente');
const db = require('../config/config')

const Factura = db.define('facturas',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    fecha: {
        type: Sequelize.DATEONLY
    }
},{timestamps: false});
Factura.Cliente = Factura.belongsTo(Cliente, {
    onDelete: 'cascade',
    onUpdate:'cascade'
});

module.exports = Factura;