
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
