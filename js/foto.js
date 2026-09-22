

const fotos = document.querySelectorAll(".foto img");

const visor = document.getElementById("visor");

const imagenGrande = document.getElementById("imagenGrande");

const descripcionImagen = document.getElementById("descripcionImagen");

const cerrar = document.querySelector(".cerrar");



fotos.forEach(function (foto) {

    foto.addEventListener("click", function () {

        visor.style.display = "flex";

        imagenGrande.src = foto.src;

        imagenGrande.alt = foto.alt;

        descripcionImagen.textContent = foto.alt;

        // Evita que la página se desplace
        document.body.style.overflow = "hidden";

    });

});



cerrar.addEventListener("click", function () {

    cerrarVisor();

});




visor.addEventListener("click", function (e) {

    if (e.target === visor) {

        cerrarVisor();

    }

});




document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        cerrarVisor();

    }

});




function cerrarVisor() {

    visor.style.display = "none";

    imagenGrande.src = "";

    descripcionImagen.textContent = "";

    // Permite volver a desplazar la página
    document.body.style.overflow = "";

}

    const elementos = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observer.unobserve(entrada.target);
            }

        });

    }, {
        threshold: 0.12
    });

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });
