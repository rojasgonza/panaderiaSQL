const Cliente = require('../models/cliente');

//nuevo local
exports.nuevoCliente = async (req, res) => {
    const { nombre, direccion, lista, contacto, email } = req.body;
    const cliente = await Cliente.create({ nombre, direccion, lista, contacto, email })
    if (cliente) {
         res.json({ mensaje: "creado el cliente" }) 
        }
    else {
        console.log(error)
    }
}

//mostrar clientes
exports.mostrarClientes = async (req, res) => {
    const clientes = await Cliente.findAll({});
    if (!clientes) {
        console.log(error);
        next()
    }
    res.json(clientes)
}

//mostrar local
exports.mostrarCliente = async (req, res) => {
    let condition = { where: { id: req.params.idCliente } }
    const cliente = await Cliente.findOne(condition)
    if (!cliente) {
        console.log(error);
        next()
    }
    res.json(cliente)
}

//editar cliente
exports.editarCliente = async (req, res) => {
    let condition = { where: { id: req.params.idCliente } };

    const cliente = await Cliente.update({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        lista: req.body.lista,
        direccion: req.body.direccion,
        contacto: req.body.contacto
    }, condition);
    res.json({ mensaje: "cambiaado" })
}

//borrar cliente
exports.borrarCliente = async (req, res) => {
    let condition = { where: { id: req.params.idCliente } };
    const cliente = await Cliente.destroy(condition);
    if (!cliente) {
        console.log(error);
        next()
    }
    res.json({ mensaje: "borrado" })

}