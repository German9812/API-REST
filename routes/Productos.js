const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto'); // Asegúrate de tener el modelo Producto definido

// Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (err) {
        res.json({ message: err });
    }
});


// Crear un nuevo producto
router.post('/', async (req, res) => {
    const productos = new Producto({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        categoriaId: req.body.categoriaId // Añadir la categoría al producto
    });

    try {
        const savedProducto = await productos.save();
        res.json(savedProducto);
    } catch (err) {
        res.json({ message: err });
    }
});

// Obtener un Producto específico por ID
router.get('/:productoId', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.productoId);
        res.json(producto);
    } catch (err) {
        res.json({ message: err });
    }
});


// Eliminar un producto
router.delete('/:productoId', async (req, res) =>{
    try {
        const removerProducto = await Producto.deleteOne({ _id: req.params.productoId});
        res.json(removerProducto);
    } catch (err){
        res.json({ message: err});
    }
});
// Actualizar un producto
router.patch('/:productoId', async (req, res) => {
    try {
        const updatedProducto = await Producto.updateOne(
            { _id: req.params.productoId },
            { $set: { nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                categoriaId: req.body.categoriaId // Permitir la actualización de la categoría
            } }
        );
        res.json(updatedProducto);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
