// Seleccionar los elementos del formulario por su ID
let nombre = document.querySelector("#nombre"); // Selecciona el campo de entrada de nombre
let telefono = document.querySelector("#telefono"); // Selecciona el campo de entrada de teléfono
let fecha = document.querySelector("#fecha"); // Selecciona el campo de entrada de fecha
let comentarios = document.querySelector("#comentarios"); // Selecciona el campo de entrada de comentarios
let boton_forma = document.querySelector("#boton_forma"); // Selecciona el botón de enviar formulario

// Deshabilitar el botón de enviar formulario inicialmente
boton_forma.disabled = true;

// Agregar un evento de cambio a cada elemento del formulario
nombre.addEventListener("change", stateHandle); // Escucha cambios en el campo de nombre
telefono.addEventListener("change", stateHandle); // Escucha cambios en el campo de teléfono
fecha.addEventListener("change", stateHandle); // Escucha cambios en el campo de fecha
comentarios.addEventListener("change", stateHandle); // Escucha cambios en el campo de comentarios

// Función para manejar el estado de los campos y el botón de enviar formulario
function stateHandle() {
    // Comprobar si todos los campos del formulario tienen un valor
    if (nombre.value !== "" && telefono.value !== "" && fecha.value !== "" && comentarios.value !== "") {
        // Si todos los campos tienen un valor, habilitar el botón de enviar formulario
        boton_forma.disabled = false;
    } else {
        // Si algún campo está vacío, deshabilitar el botón de enviar formulario
        boton_forma.disabled = true;
    }
}