// Cargar las variables de entorno
require('dotenv').config();

// Importar MongoClient desde el paquete de MongoDB
const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();

// Configurar Express para interpretar JSON
app.use(express.json());

// Recuperar la URI de MongoDB desde el archivo .env
const uri = process.env.MONGO_URI;

// Crear una instancia del cliente MongoDB
let client;

// Conectar a MongoDB una sola vez cuando el servidor se inicia
async function conectarMongoDB() {
    try {
        client = new MongoClient(uri);
        await client.connect(); // Conectar al cliente
        console.log('Conectado a MongoDB correctamente');
    } catch (err) {
        console.error('Error al conectar a MongoDB: ', err);
    }
}

// Función para guardar los datos en MongoDB
async function guardarDatos(datos) {
    try {
        const database = client.db('miBaseDeDatos'); // Nombre de la base de datos
        const collection = database.collection('respuestas'); // Nombre de la colección
        await collection.insertOne(datos); // Insertar un documento con los datos
        console.log('Datos guardados correctamente');
    } catch (err) {
        console.error('Error al guardar los datos: ', err);
        throw err; // Lanza el error para que la ruta también lo maneje
    }
}

// Ruta para recibir los datos del formulario
app.post('/guardar-respuesta', async (req, res) => {
    const datos = req.body;
    console.log('Datos recibidos del frontend:', datos); // Verifica que los datos están llegando

    try {
        await guardarDatos(datos);
        res.status(200).send('Datos guardados correctamente');
    } catch (err) {
        res.status(500).send('Error al guardar los datos en MongoDB');
    }
});

// Iniciar el servidor y conectar a MongoDB
app.listen(3000, async () => {
    await conectarMongoDB(); // Conectar a MongoDB al iniciar el servidor
    console.log('Servidor escuchando en el puerto 3000');
});
