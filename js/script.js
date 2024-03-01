let nombre = document.querySelector("#nombre");
let telefono = document.querySelector("#telefono");
let fecha = document.querySelector("#fecha");
let comentarios = document.querySelector("#comentarios");
let boton_forma = document.querySelector("#boton_forma");

boton_forma.disabled = true; //setting button state to disabled

nombre.addEventListener("change", stateHandle);
telefono.addEventListener("change", stateHandle);
fecha.addEventListener("change", stateHandle);
comentarios.addEventListener("change", stateHandle);

function stateHandle() {
    if (document.querySelector("#nombre" && "#telefono" && "#fecha" && "#comentarios").value === "") {
        boton_forma.disabled = true; //button remains disabled
    } else {
        boton_forma.disabled = false; //button is enabled
    }
}