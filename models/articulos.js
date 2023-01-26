const Sequelize = require('sequelize');
const db = require('../config/config');

const Articulo = db.define('articulo',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement:true
    },
    nombre: {
        type: Sequelize.STRING
    },
    lista1: {
        type: Sequelize.DECIMAL(20, 0)
    },
    lista2: {
        type: Sequelize.DECIMAL(20, 0)
    },
    lista3: {
        type: Sequelize.DECIMAL(20, 0)
    },
    lista4: {
        type: Sequelize.DECIMAL(20, 0)
    },
    lista5: {
        type: Sequelize.DECIMAL(20, 0)
    },
    lista6: {
        type: Sequelize.DECIMAL(20, 0)
    },
    lista7: {
        type: Sequelize.DECIMAL(20, 0)
    },
},{timestamps: false})
module.exports = Articulo ;
