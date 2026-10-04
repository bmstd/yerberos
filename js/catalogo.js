/* =========================
    CATÁLOGO
========================= */

(() => {

    const productsContainer =
        document.querySelector("#catalog-products");

    const filters =
        document.querySelectorAll(".catalog__filter");


    if (
        !productsContainer ||
        typeof productos === "undefined"
    ) {
        return;
    }


    /* =========================
        CONFIGURACIÓN
    ========================= */

    const whatsappNumber = "5493816481327";


    /* =========================
        NOMBRES DE CATEGORÍAS
    ========================= */

    const categoryNames = {

        mates: "Mates",

        yerbas: "Yerbas",

        complementos: "Complementos"

    };


    /* =========================
        GENERAR URL WHATSAPP
    ========================= */

    const createWhatsAppLink = (productName) => {

        const message =
            `Hola Yerberos! Vengo desde su web y quería consultar por el ${productName}.`;

        return (
            `https://wa.me/${whatsappNumber}?text=` +
            encodeURIComponent(message)
        );

    };


    /* =========================
        CREAR TARJETA
    ========================= */

    const createProductCard = (product) => {

        const article =
            document.createElement("article");

        article.className = "catalog-card";


        article.innerHTML = `

            <a
                href="${createWhatsAppLink(product.nombre)}"
                class="catalog-card__link"
                target="_blank"
                rel="noopener noreferrer"
            >

                <div class="catalog-card__media">

                    <img
                        src="${product.imagen}"
                        alt="${product.nombre}"
                        class="catalog-card__image"
                        loading="lazy"
                    >

                </div>


                <div class="catalog-card__content">

                    <span class="catalog-card__category">
                        ${categoryNames[product.categoria]}
                    </span>

                    <h2 class="catalog-card__title">
                        ${product.nombre}
                    </h2>

                    <p class="catalog-card__description">
                        ${product.descripcion}
                    </p>

                    <span class="catalog-card__action">
                        Consultar
                    </span>

                </div>

            </a>

        `;


        return article;

    };


    /* =========================
        MOSTRAR PRODUCTOS
    ========================= */

    const renderProducts = (category = "todos") => {

        productsContainer.innerHTML = "";


        const filteredProducts =
            category === "todos"
                ? productos
                : productos.filter(
                    (product) =>
                        product.categoria === category
                );


        filteredProducts.forEach((product) => {

            const card =
                createProductCard(product);

            productsContainer.appendChild(card);

        });

    };


    /* =========================
        FILTROS
    ========================= */

    filters.forEach((filter) => {

        filter.addEventListener("click", () => {

            const category =
                filter.dataset.category;


            filters.forEach((item) => {

                item.classList.remove(
                    "catalog__filter--active"
                );

            });


            filter.classList.add(
                "catalog__filter--active"
            );


            renderProducts(category);

        });

    });


    /* =========================
        INICIALIZAR
    ========================= */

    renderProducts();

})();