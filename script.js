/* Función para mostrar u ocultar el dropdown */
function botonsrop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/* Cierra el dropdown si el usuario hace clic fuera de él */
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


