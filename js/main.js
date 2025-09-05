// Este archivo contiene el código JavaScript para la funcionalidad de la página. Puede incluir interacciones y manipulaciones del DOM utilizando Bootstrap.

document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes agregar tu código JavaScript para la funcionalidad de la página.
    console.log('La página ha sido cargada y está lista para interactuar.');

    // Ejemplo de uso de Bootstrap: inicializar un tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});