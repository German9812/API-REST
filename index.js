const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Importar Routes
const productosRoute = require('./routes/Productos');
const categoriasRoute = require('./routes/Categorias');
const postsRoute = require('./routes/posts');

app.use('/productos', productosRoute );
app.use('/categorias', categoriasRoute);
app.use('/posts', postsRoute);

// Conexión a la base de datos
async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://germanst325:xsugiKZybmFA9lW0@prueba.qeeue8c.mongodb.net/?retryWrites=true&w=majority&appName=Prueba', {
        });                    
        console.log('Conectado a MongoDB Atlas');
    } catch (err) {
        console.error('Error de conexión a MongoDB Atlas:', err);
    }
}

connectDB();

// Escucha en el puerto 10000
app.listen(10000, () => {
    console.log('Servidor escuchando en el puerto 10000');
});