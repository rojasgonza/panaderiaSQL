const express = require('express');
const router = express.Router()
const clientesController = require('../controllers/clientesController')
const articulosController = require('../controllers/articulosController')
const pagosController = require('../controllers/pagosController')
const ccController = require('../controllers/cuentaController');
const facturasController = require('../controllers/facturasController');
const detalleController = require('../controllers/detalleController');



module.exports = function(){
    router.get('/')

    //clientes
    router.post('/clientes', clientesController.nuevoCliente);
    router.get('/clientes', clientesController.mostrarClientes);
    router.get('/clientes/:idCliente', clientesController.mostrarCliente);
    router.put('/clientes/:idCliente', clientesController.editarCliente);
    router.delete('/clientes/:idCliente', clientesController.borrarCliente);

    //articculos
    router.post('/articulos', articulosController.nuevoArticulo );
    router.get('/articulos', articulosController.mostrarArticulos);
    router.get('/articulos/:idArticulo', articulosController.mostrarArticulo);
    router.put('/articulos/:idArticulo', articulosController.editarArticulo);
    router.delete('/articulos/:idArticulo', articulosController.borrarArticulo);
    
    //pagos
    router.post('/pagos', pagosController.nuevoPago);
    router.get('/pagos', pagosController.mostrarPagos);
    router.get('/pagos/:idPago', pagosController.mostrarPago);
    router.put('/pagos/idPago', pagosController.editarPago);
    router.delete('/pagos/:idPago', pagosController.borrarPago);
    
    //cuentascorrientes
    router.post('/cc', ccController.nuevaCC)
    router.get('/cc', ccController.mostrarCCS)
    router.get('/cc/:idCC', ccController.mostrarCC)
    router.put('/cc/:idCC', ccController.editarCC)
    router.delete('/cc/:idCC', ccController.borrarCC)

    //facturas

    router.post('/facturas', facturasController.nuevaFactura);
    router.get('/facturas', facturasController.mostrarFacturas);
    router.get('/facturas/:idFactura', facturasController.mostrarFactura);
    router.put('/facturas/:idFactura', facturasController.editarFactura);
    router.delete('/facturas/:idFactura', facturasController.borrarFactura);


    //detalles
    router.post('/detalles', detalleController.nuevoDetalle)
    router.get('/detalles', detalleController.mostrarDetalles)
    router.get('/detalles/:idDetalle', detalleController.mostrarDetalle)
    router.put('/detalles/:idDetalle', detalleController.editarDetalle);
    router.delete('/detalles/:idDetalle', detalleController.borrarDetalle);

    return router;
}