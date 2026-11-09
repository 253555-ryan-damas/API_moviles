const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Permite recibir JSON en los POST

// Base de datos en memoria (ideal para pruebas rápidas)
let usuarios = [];
let productos = [
    { id: "1", nombre: "Tabla Creature Logo 8.25", categoria: "Tabla", precio: 1200.0, stock: 5, esImportado: true },
    { id: "2", nombre: "Ruedas Spitfire Formula Four 56mm 99a", categoria: "Ruedas", precio: 850.0, stock: 12, esImportado: false }
];

// Endpoints de Productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

// Endpoints de Usuarios
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
    const { id, nombre, email, password } = req.body;
    
    const nuevoUsuario = {
        id: id || Date.now().toString(), // Genera ID si Android no lo envía
        nombre: nombre,
        email: email,
        password: password
    };
    
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario); // Responde con éxito
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API Express corriendo en el puerto ${port}`);
});