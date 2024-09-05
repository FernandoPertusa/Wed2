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
const client = new MongoClient(uri);

// Función para guardar los datos en MongoDB
async function guardarDatos(datos) {
    try {
        await client.connect(); // Conectar al cliente
        const database = client.db('miBaseDeDatos'); // Nombre de la base de datos
        const collection = database.collection('respuestas'); // Nombre de la colección
        await collection.insertOne(datos); // Insertar un documento con los datos
        console.log('Datos guardados correctamente');
    } catch (err) {
        console.error('Error al guardar los datos: ', err);
    } finally {
        await client.close(); // Cerrar la conexión una vez completado
    }
}

// Ruta para recibir los datos del formulario
app.post('/guardar-respuesta', async (req, res) => {
    const datos = req.body;
    console.log('Datos recibidos del frontend:', datos); // Verifica que los datos están llegando
    await guardarDatos(datos);
    res.send('Datos guardados');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
