console.log("JS cargado correctamente");
document.addEventListener('DOMContentLoaded', function() {

    // Botones del slide (redirigir)
    document.querySelectorAll('.slide-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.closest('.carousel-slide').dataset.section;
            
            if (section) {
                window.location.href = `${section}.html`;
            }
        });
    });

    // Navbar toggle
    const toggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggle && navLinks) {
        toggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            toggle.classList.toggle("active");
        });
    }

});