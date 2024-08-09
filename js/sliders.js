
if(document.querySelector('.result-slider')){
    let search_result_slider = new Swiper('.result-slider', {
        watchOverflow: true,
        slidesPerView: 'auto',
        centeredSlidesBounds:true,
        observer: true,
        observeParents: true,
        speed: 1000,
        spaceBetween: 24,
        navigation: {
            nextEl: '.result-slider__btn-next',
            prevEl: '.result-slider__btn-prev',
        },
    })
}

if(document.querySelector('.categories-slider')){
    let categories_slider = new Swiper('.categories-slider', {
        watchOverflow: true,
        slidesPerView: 'auto',
        centeredSlidesBounds:true,
        observer: true,
        observeParents: true,
        speed: 1000,
        spaceBetween: 8,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
        },
        navigation: {
            nextEl: '.categories-slider__btn-next',
            prevEl: '.categories-slider__btn-prev',
        },
        breakpoints: {
            0: {
                spaceBetween: 8,
                 
            },
            700: {
                spaceBetween: 20
            },
            1100: {
                spaceBetween: 24,
            
               
            }
        },
        
    })
}
