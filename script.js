const boton = document.querySelector("#boton");

let encendido = true;

boton.addEventListener("click", cambiar);

function cambiar() {
    if (encendido == true) {
        document.getElementById("cambio").className = "encendido";
        encendido = false;
    }else {
        document.getElementById("cambio").className = "apagar";
        encendido = true;
    }
}