const express = require('express');
const router = express.Router();
const Categoria = require('../models/Categoria');

// Crear nueva categoría
router.post('/', async (req, res) => {
    const categoria = new Categoria({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    });

    try {
        const savedCategoria = await categoria.save();
        res.json(savedCategoria);
    } catch (err) {
        res.json({ message: err });
    }
});

// Obtener todas las categorías
router.get('/', async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (err) {
        res.json({ message: err });
    }
});

// Actualizar una categoría
router.patch('/:categoriaId', async (req, res) => {
    try {
        const updatedCategoria = await Categoria.updateOne(
            { _id: req.params.categoriaId },
            { $set: { nombre: req.body.nombre, descripcion: req.body.descripcion } }
        );
        res.json(updatedCategoria);
    } catch (err) {
        res.json({ message: err });
    }
});

// Eliminar una categoría
router.delete('/:categoriaId', async (req, res) => {
    try {
        const removedCategoria = await Categoria.deleteOne(req.params.categoriaId);
        if (!removedCategoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.json({ message: 'Categoría eliminada', removedCategoria });
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
