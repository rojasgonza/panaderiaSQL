const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../config/config');

const Cliente = db.define('clientes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    direccion: {
        type: Sequelize.STRING
    },
    lista: {
        type: Sequelize.INTEGER
    },
    contacto: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
},{timestamps:false}
)
module.exports = Cliente;