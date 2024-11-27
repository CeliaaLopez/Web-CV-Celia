/*esta primera línea es para asegurarme de que la página esté 
totalmente cargada*/
document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById("start-button");
    let blackHole = document.getElementById("black-hole");
    let pageWrapper = document.querySelector(".page-wrapper");

    button.addEventListener("click", function() {
        pageWrapper.classList.add("shrink");
        blackHole.classList.add("black-hole-expand");

        setTimeout(function() {
            window.location.href = "portal.html";
        }, 800); // Duración de la animación
    });
});
