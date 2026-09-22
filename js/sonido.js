const video = document.getElementById("videoPortada");
const botonSonido = document.getElementById("botonSonido");


// Al cargar la página el video comienza sin sonido
video.muted = true;


// Botón para activar/desactivar sonido
botonSonido.addEventListener("click", function () {

    if (video.muted) {

        video.muted = false;

        video.volume = 1;

        botonSonido.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

        botonSonido.setAttribute(
            "aria-label",
            "Desactivar sonido"
        );

    } else {

        video.muted = true;

        botonSonido.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';

        botonSonido.setAttribute(
            "aria-label",
            "Activar sonido"
        );

    }

});