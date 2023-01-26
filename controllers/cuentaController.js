const CuentaCorriente = require('../models/cc')

exports.nuevaCC = async (req,res,next ) => {
    const {fecha, total, acuenta, saldo, facturafkId} = req.body;
    const cc = await CuentaCorriente.create({fecha, total, acuenta, saldo, facturafkId})
    if(!cc){
        console.log(error)
        next()
    }
    res.json({mensaje: "creado la cc"})
} 

exports.mostrarCCS = async (req,res,next) => {
    const ccs = await CuentaCorriente.findAll({
        include: [
            {
                association: CuentaCorriente.Factura
            }
        ]

    })
    if(!ccs){
        console.log(error);
        next()
    }
    res.json(ccs);
};
exports.mostrarCC = async (req,res,next) => {
    let condition = {where: {id: req.params.idCC}}
    const cc = await CuentaCorriente.findOne({
        include: [
            {
                association: CuentaCorriente.Factura
            }
        ],condition

    })
    if(!cc){
        console.log(error);
        next()
    }
    res.json(cc);
};

exports.editarCC = async (req, res, next) => {
    let condition = {where: {id: req.params.idCC}}
    const cc = await CuentaCorriente.update({
        fecha: req.body.fecha,
        total: req.body.total,
        acuenta: req.body.acuenta,
        saldo: req.body.saldo,
        facturafkId: req.body.facturafkId
    }, condition)
    if(!cc){
        console.log(error);
        next()
    }
    res.json({mensaje: "editado el cc"})
}

exports.borrarCC = async (req,res,next) => {
    let condition = {where: {id: req.params.idCC}}
    const cc = await CuentaCorriente.destroy(condition)
    if (!cc) {
        console.log(error)
        next()
    }
    res.json({ mensaje: "cc borrado" })
}