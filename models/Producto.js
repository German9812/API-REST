const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio:{
        type:Number,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    categoriaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria'
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);