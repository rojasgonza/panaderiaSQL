const Pagos = require('../models/pago');

exports.nuevoPago = async (req, res, next) => {
    const { fecha, monto, ccfkId } = req.body;
    const pago = await Pagos.create({ fecha, monto, ccfkId })

    if (!pago) {
        console.log(error);
        next()
    }
    res.json({ mensaje: "pago realizado" });
}

exports.mostrarPagos = async (req, res, next) => {
    const pagos = await Pagos.findAll({
        include: [
            {
                association: Pagos.CuentaCorriente
            }
        ]
    });

    if (!pagos) {
        console.log(error);
        next()
    }
    res.json(pagos)
}

exports.mostrarPago = async (req, res, next) => {
    let condition = { where: { id: req.params.idPago } }
    const pago = await Pagos.findOne({
        include: [
            {
                association: Pagos.CuentaCorriente
            }
        ], condition
    })
    if (!pago) {
        console.log(error);
        next()
    }
    res.json(pago)
}

exports.editarPago = async (req, res, next) => {
    let condition = { where: { id: req.params.idPago } }
    const pago = await Pagos.update({
        fecha: req.body.fecha,
        monto: req.body.monto,
        ccfkId: req.body.ccfkId
    }, condition)
    if (!pago) {
        console.log(error)
        next()
    }
    res.json({ mensaje: "PAGO ACTUALIZADO" })
}

exports.borrarPago = async (req, res, next) => {
    let condition = { where: { id: req.params.idPago } }
    const pago = await Pagos.destroy(condition)
    if (!pago) {
        console.log(error)
        next()
    }
    res.json({ mensaje: "pago borrado" })
}