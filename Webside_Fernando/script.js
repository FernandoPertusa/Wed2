document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    // Recoger los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const anoNacimiento = document.getElementById('anoNacimiento').value;
    const dni = document.getElementById('dni').value;

    // Mostrar los valores en la consola (puedes adaptarlo para hacer algo más interesante)
    console.log('Nombre:', nombre);
    console.log('Año de Nacimiento:', anoNacimiento);
    console.log('DNI:', dni);

    // Podrías agregar código aquí para enviar los datos a un servidor, por ejemplo
});
