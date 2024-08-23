document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const anioNacimiento = document.getElementById('anioNacimiento').value;

    const mensaje = document.getElementById('mensaje');

    if (nombre === '' || apellido === '' || anioNacimiento === '') {
        mensaje.textContent = 'Parece que te has dejado algún campo, papá';
    } else {
        mensaje.textContent = 'Muchas gracias, papá!';
        
        const tablaRegistros = document.getElementById('tablaRegistros').querySelector('tbody');
        const nuevaFila = tablaRegistros.insertRow();
        
        const celdaNombre = nuevaFila.insertCell(0);
        const celdaApellido = nuevaFila.insertCell(1);
        const celdaAnioNacimiento = nuevaFila.insertCell(2);
        
        celdaNombre.textContent = nombre;
        celdaApellido.textContent = apellido;
        celdaAnioNacimiento.textContent = anioNacimiento;

        document.getElementById('miFormulario').reset();
    }
});
