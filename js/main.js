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

/* =========================
    DESTACADOS
========================= */

(() => {

    const carousel = document.querySelector(".featured__carousel");
    const cards = document.querySelectorAll(".featured__card");
    const prevButton = document.querySelector(".featured__arrow--prev");
    const nextButton = document.querySelector(".featured__arrow--next");
    const dots = document.querySelectorAll(".featured__dot");

    if (
        !carousel ||
        !cards.length ||
        !prevButton ||
        !nextButton ||
        !dots.length
    ) return;


    /* ------------------------- Estado ------------------------- */

    let activeIndex = 1;


    /* ------------------------- Actualizar carrusel ------------------------- */

    const updateCarousel = () => {

        const totalCards = cards.length;

        cards.forEach((card, index) => {

            card.classList.remove(
                "featured__card--active",
                "featured__card--side"
            );

            const position =
                (index - activeIndex + totalCards) % totalCards;

            if (position === 0) {

                card.classList.add(
                    "featured__card--active"
                );

            } else {

                card.classList.add(
                    "featured__card--side"
                );

            }

        });


        /* ------------------------- Actualizar indicadores ------------------------- */

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "featured__dot--active",
                index === activeIndex
            );

            dot.setAttribute(
                "aria-current",
                index === activeIndex ? "true" : "false"
            );

        });

    };


    /* ------------------------- Siguiente ------------------------- */

    const showNext = () => {

        activeIndex =
            (activeIndex + 1) % cards.length;

        updateCarousel();

    };


    /* ------------------------- Anterior ------------------------- */

    const showPrevious = () => {

        activeIndex =
            (activeIndex - 1 + cards.length) % cards.length;

        updateCarousel();

    };


    /* ------------------------- Eventos ------------------------- */

    nextButton.addEventListener(
        "click",
        showNext
    );

    prevButton.addEventListener(
        "click",
        showPrevious
    );


    /* ------------------------- Indicadores ------------------------- */

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            activeIndex = index;

            updateCarousel();

        });

    });


    /* ------------------------- Estado inicial ------------------------- */

    updateCarousel();

})();