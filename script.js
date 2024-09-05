document.getElementById("formulario").addEventListener("submit", async function(event) {
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
        const datos = {
            nombre: nombre,
            pregunta1: pregunta1,
            pregunta2: pregunta2,
            // Añadir todas las preguntas aquí
            pregunta10: pregunta10
        };

        try {
            const response = await fetch('http://localhost:3000/guardar-respuesta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datos),
            });
            if (response.ok) {
                alert("¡Gracias por enviar tu respuesta!");
            } else {
                alert("Hubo un problema al enviar los datos.");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
});

document.getElementById("resultados-button").addEventListener("click", function() {
    window.location.href = "resultados.html";
});
