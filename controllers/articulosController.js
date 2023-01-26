const Articulos = require('../models/articulos');

exports.nuevoArticulo = async (req,res) => {
    const {nombre, lista1, lista2, lista3,lista4,lista5,lista6,lista7} = req.body;
    const articulo = await Articulos.create({nombre, lista1, lista2, lista3,lista4,lista5,lista6,lista7})

    if(!articulo){
        console.log(error)
        next();
    }
    res.json({mensaje: "Articulo creado"})
}

exports.mostrarArticulos = async(req,res) => {
    const articulos = await Articulos.findAll({})
    if(!articulos){
        console.log(error)
        next()
    }
    res.json(articulos);
}

exports.mostrarArticulo = async (req,res,next) =>{
    let condition = {where: {id: req.params.idArticulo}}
    const articulo = await Articulos.findOne(condition)
    if(!articulo){
        console.log(error);
        next();
    }
    res.json(articulo);
}

exports.editarArticulo = async (req,res,next) => {
    let condition = {where: {id: req.params.idArticulo}}
    const articulo = await Articulos.update({
        nombre: req.body.nombre,
        lista1: req.body.lista1,
        lista2: req.body.lista2,
        lista3: req.body.lista3,
        lista4: req.body.lista4,
        lista5: req.body.lista5,
        lista6: req.body.lista6,
        lista7: req.body.lista7
    }, condition)
    if(!articulo){
        console.log(error);
        next()
    }
    res.json({mensaje: "articulo corregidos"})
}

exports.borrarArticulo = async (req, res, next) => {
    let condition = { where: {id: req.params.idArticulo}}
    const articulo = await Articulos.destroy(condition)
        if (!articulo) {
        console.log(error);
        next()
    }
    res.json({ mensaje: "borrado" })

}