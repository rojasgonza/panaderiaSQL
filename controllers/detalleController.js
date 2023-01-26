const Detallefactura = require('../models/detallefactura');

exports.nuevoDetalle = async (req, res, next) => {
    const {cantidad, precio, facturaId, articulosId} = req.body;
    const detalle = await Detallefactura.create({cantidad,precio,facturaId,articulosId})
    if(!detalle){
        console.log(error);
        next();
    }
    res.json({mensaje: "detalle creado"})
}

exports.mostrarDetalles = async (req,res,next) =>{ 
    const detalles = await Detallefactura.findAll({
        include: [
            {association: Detallefactura.Articulo},
            {association: Detallefactura.Factura}
        ]
    })
    if(!detalles){
        console.log(error);
        next()
    }
    res.json(detalles)
}
exports.mostrarDetalle = async (req,res,next) =>{ 
    let condition = {where: {id: req.params.idDetalle}}
    const detalle = await Detallefactura.findOne({
        include: [
            {association: Detallefactura.Articulo},
            {association: Detallefactura.Factura}
        ],condition
    })
    if(!detalle){
        console.log(error);
        next()
    }
    res.json(detalle)
}

exports.editarDetalle = async (req, res, next) => {
    let condition = { where: { id: req.params.idDetalle } }
    const detalle = await Detallefactura.update({
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        articulosId: req.body.articulosId,
        facturaId: req.body.facturaId
    }, condition)
    if (!detalle) {
        console.log(error)
        next()
    }
    res.json({ mensaje: "detalle ACTUALIZADO" })
}
exports.borrarDetalle = async (req, res, next) => {
    let condition = { where: { id: req.params.idDetalle } }
    const detalle = await Detallefactura.destroy(condition)
    if (!detalle) {
        console.log(error)
        next()
    }
    res.json({ mensaje: "detalle borrado" })
}