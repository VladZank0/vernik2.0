Fancybox.bind("[data-fancybox]", {
    on: {
        reveal: (fancybox, slide) => {
            // Проверяем, какая модалка открыта
            if (slide.src === "#geo") {
                // Задаем свойства для модалки 1
                document.querySelector('.with-fancybox').style.overflow = "auto";
                document.querySelector('.fancybox__backdrop').style.display = "none";

            }
        },
    },
    Hash: false,
});



