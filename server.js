// Cargar las variables de entorno
require('dotenv').config();

// Importar MongoClient desde el paquete de MongoDB
const { MongoClient } = require('mongodb');

// Recuperar la URI de MongoDB desde el archivo .env
const uri = process.env.MONGO_URI;

// Crear una instancia del cliente MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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

// Ejemplo de datos a guardar (deberás integrar la parte del frontend para que envíe estos datos)
const ejemploDatos = {
    nombre: 'Fernando',
    pregunta1: 8,
    pregunta2: 7,
    // Añadir aquí las demás preguntas y respuestas
    pregunta10: 9
};

// Llamar a la función para guardar los datos
guardarDatos(ejemploDatos);
