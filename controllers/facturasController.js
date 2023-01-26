const Facturas = require('../models/factura')

exports.nuevaFactura = async (req, res, next) => {

    const {fecha, clienteId, id } = req.body;
    const factura = await Facturas.create({id,fecha, clienteId});

    if (!factura) {
        console.log(error);
        next()
    }
    res.json({ mensaje: "factura realizado" });

}

exports.mostrarFacturas = async (req,res,next) => {
    const facturas = await Facturas.findAll({
        include: [
            {association: Facturas.Cliente}
        ]
    })
    if(!facturas){
        console.log(error)
        next()
    }
    res.json(facturas)
}

exports.mostrarFactura = async (req,res,next) => {
    let condition = {where: {id: req.params.idFactura}}
    const factura = await Facturas.findOne({
        include: [
            {association: Facturas.Cliente}
        ],condition
    })
    if(!factura){
        console.log(error)
        next()
    }
    res.json(factura)
}
exports.editarFactura = async (req, res, next) => {
    let condition = { where: { id: req.params.idFactura } }
    const factura = await Facturas.update({
        fecha: req.body.fecha,
        clienteId: req.body.clienteId
    }, condition)
    if (!factura) {
        console.log(error)
        next()
    }
    res.json({ mensaje: "FACTURA ACTUALIZADA" })
}

exports.borrarFactura = async (req, res, next) => {
    let condition = { where: { id: req.params.idFactura } }
    const factura = await Facturas.destroy(condition)
    if (!factura) {
        console.log(error)
        next()
    }
    res.json({ mensaje: "FACT borrado" })
}