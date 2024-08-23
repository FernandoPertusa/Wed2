document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const ano = document.getElementById("ano").value;
    const mensaje = document.getElementById("mensaje");

    if (nombre === "" || apellido === "" || ano === "") {
        mensaje.textContent = "Parece que te has dejado algún campo, papá";
    } else {
        mensaje.textContent = "Muchas gracias, papá!";
        agregarRegistro(nombre, apellido, ano);
        document.getElementById("formulario").reset();
    }
});

function agregarRegistro(nombre, apellido, ano) {
    const tabla = document.getElementById("tabla-registros").getElementsByTagName("tbody")[0];
    const nuevaFila = tabla.insertRow();

    const celdaNombre = nuevaFila.insertCell(0);
    const celdaApellido = nuevaFila.insertCell(1);
    const celdaAno = nuevaFila.insertCell(2);

    celdaNombre.textContent = nombre;
    celdaApellido.textContent = apellido;
    celdaAno.textContent = ano;
}
