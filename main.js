document.addEventListener("DOMContentLoaded", function(e) {
    const parrafos = document.querySelectorAll('.descripcion');

    let altura = [];

    const aplicarAltura = (function() {
        parrafos.forEach(parrafo => {
            altura.push(parrafo.clientHeight);
        });

        const alturaMaxima = Math.max.apply(null, altura);

        parrafos.forEach(parrafo => {
            parrafo.style.height = alturaMaxima + "px";
        });
    })();
});