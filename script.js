document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const pregunta1 = document.getElementById("pregunta1").value;
    const pregunta2 = document.getElementById("pregunta2").value;
    // Añadir las demás preguntas de la misma forma
    const pregunta10 = document.getElementById("pregunta10").value;

    // Validación simple
    if (nombre === "" || pregunta1 === "" || pregunta10 === "") {
        alert("Por favor, rellena todos los campos.");
    } else {
        // Guardar las respuestas en la base de datos (MongoDB)
        // Aquí en el siguiente paso vamos a conectar con MongoDB para guardar estos datos
        alert("¡Gracias por enviar tu respuesta!");
    }
});

document.getElementById("resultados-button").addEventListener("click", function() {
    window.location.href = "resultados.html";
});
