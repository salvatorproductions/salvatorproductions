

document.addEventListener("DOMContentLoaded", () => {


/* =====================================================
   ELEMENTOS QUE APARECEN AL HACER SCROLL
===================================================== */

const elementos = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);


/*
    IntersectionObserver detecta cuando un elemento
    entra en pantalla.
*/

const observer = new IntersectionObserver(

    (entradas, observer) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                const elemento = entrada.target;

                /*
                    Permite utilizar --delay desde el HTML.
                    Ejemplo:

                    style="--delay: .2s"
                */

                const delay =
                    elemento.style.getPropertyValue("--delay");

                if (delay) {
                    elemento.style.transitionDelay = delay;
                }


                elemento.classList.add("visible");

                /*
                    Dejamos de observarlo después de aparecer.
                    Así la animación no se repite constantemente.
                */

                observer.unobserve(elemento);

            }

        });

    },

    {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
    }

);


elementos.forEach((elemento) => {

    observer.observe(elemento);

});



/* =====================================================
   ANIMACIÓN SUAVE DE LAS TARJETAS
===================================================== */

const tarjetas = document.querySelectorAll(
    ".servicio, .portfolio-card, .publicidad-card, .foto"
);


tarjetas.forEach((tarjeta, index) => {

    /*
        Pequeño retraso entre tarjetas.
        Esto crea un efecto escalonado.
    */

    tarjeta.style.setProperty(
        "--delay",
        `${(index % 4) * 0.08}s`
    );

});



/* =====================================================
   SCROLL SUAVE PARA ENLACES INTERNOS
===================================================== */

const enlacesInternos =
    document.querySelectorAll('a[href^="#"]');


enlacesInternos.forEach((enlace) => {

    enlace.addEventListener("click", (evento) => {

        const destino =
            enlace.getAttribute("href");


        /*
            Evita problemas con href="#"
        */

        if (
            !destino ||
            destino === "#"
        ) {
            return;
        }


        const elementoDestino =
            document.querySelector(destino);


        if (!elementoDestino) {
            return;
        }


        evento.preventDefault();


        elementoDestino.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});



/* =====================================================
   NAVBAR: CAMBIO SUTIL AL HACER SCROLL
===================================================== */

const navbar =
    document.querySelector(".navbar");


if (navbar) {

    const comprobarScroll = () => {

        if (window.scrollY > 40) {

            navbar.classList.add("navbar-scroll");

        } else {

            navbar.classList.remove("navbar-scroll");

        }

    };


    window.addEventListener(
        "scroll",
        comprobarScroll,
        { passive: true }
    );


    comprobarScroll();

}



/* =====================================================
   PARALLAX MUY SUAVE PARA IMÁGENES
===================================================== */

const imagenes =
    document.querySelectorAll(
        ".nosotros-imagen img"
    );


/*
    No hacemos un movimiento fuerte.
    Solo un pequeño desplazamiento para dar profundidad.
*/

const actualizarParallax = () => {

    imagenes.forEach((imagen) => {

        const contenedor =
            imagen.closest(".nosotros-imagen");


        if (!contenedor) {
            return;
        }


        const rect =
            contenedor.getBoundingClientRect();


        const centro =
            window.innerHeight / 2;


        const distancia =
            rect.top +
            rect.height / 2 -
            centro;


        /*
            Limitamos el movimiento para que sea elegante.
        */

        const movimiento =
            Math.max(
                -12,
                Math.min(12, distancia * -0.025)
            );


        imagen.style.transform =
            `translateY(${movimiento}px)`;

    });

};


/*
    Solo activamos el parallax si el usuario
    no ha solicitado reducir movimiento.
*/

const reducirMovimiento =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (!reducirMovimiento && imagenes.length) {

    let parallaxTick = false;


    window.addEventListener(
        "scroll",
        () => {

            if (!parallaxTick) {

                window.requestAnimationFrame(() => {

                    actualizarParallax();

                    parallaxTick = false;

                });

                parallaxTick = true;

            }

        },
        { passive: true }
    );


    actualizarParallax();

}



/* =====================================================
   REVELAR ELEMENTOS QUE YA ESTÁN EN PANTALLA
===================================================== */

/*
    En algunas pantallas grandes ciertos elementos
    pueden aparecer directamente al cargar.

    Este pequeño retraso permite que la animación
    se vea de forma natural.
*/

setTimeout(() => {

    elementos.forEach((elemento) => {

        const rect =
            elemento.getBoundingClientRect();


        if (
            rect.top <
            window.innerHeight * 0.90
        ) {

            elemento.classList.add("visible");

        }

    });

}, 100);



/* =====================================================
   EFECTO SUAVE PARA BOTONES
===================================================== */

const botones =
    document.querySelectorAll(".boton");


botones.forEach((boton) => {

    boton.addEventListener(
        "mouseenter",
        () => {

            boton.classList.add("boton-hover");

        }
    );


    boton.addEventListener(
        "mouseleave",
        () => {

            boton.classList.remove("boton-hover");

        }
    );

});



/* =====================================================
   SCROLL INDICATOR
===================================================== */

const indicador =
    document.querySelector(".scroll-indicator");


if (indicador) {

    const comprobarIndicador = () => {

        if (window.scrollY > 100) {

            indicador.classList.add("oculto");

        } else {

            indicador.classList.remove("oculto");

        }

    };


    window.addEventListener(
        "scroll",
        comprobarIndicador,
        { passive: true }
    );


    comprobarIndicador();

}


});
