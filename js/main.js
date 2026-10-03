/* =========================
    NAVBAR
========================= */

(() => {

    const navbar = document.querySelector(".navbar");
    const toggle = document.querySelector(".navbar__toggle");
    const links = document.querySelectorAll(".navbar__link");

    if (!navbar || !toggle) return;


    /* ------------------------- Abrir / cerrar menú ------------------------- */

    toggle.addEventListener("click", () => {

        const isOpen = navbar.classList.toggle("navbar--open");

        toggle.setAttribute("aria-expanded", isOpen);

        toggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

    });


    /* ------------------------- Cerrar al tocar un enlace ------------------------- */

    links.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("navbar--open");

            toggle.setAttribute("aria-expanded", "false");

            toggle.setAttribute(
                "aria-label",
                "Abrir menú"
            );

        });

    });

})();