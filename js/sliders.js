
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
        centeredSlidesBounds:true,
        centredSlides: true,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        speed: 1000,
        spaceBetween: 8,
        pagination: {
            el: '.categories-slider-pagination',
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
                spaceBetween: 8
            },
            1100: {
                spaceBetween: 24,
            }
        },
        
    })
}
if(document.querySelector('.review-slider')){
    let review_slider = new Swiper('.review-slider', {
        watchOverflow: true,
        centeredSlidesBounds:true,
        centredSlides: true,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        speed: 1000,
        spaceBetween: 8,
        watchSlidesProgress: true,
        pagination: {
            el: '.review-slider-pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
        },
        navigation: {
            nextEl: '.review-slider__btn-next',
            prevEl: '.review-slider__btn-prev',
        },
        breakpoints: {
            0: {
                spaceBetween: 8,
                 
            },
            700: {
                spaceBetween: 8
            },
            1100: {
                spaceBetween: 24,
            
               
            }
        },
        
    })
}
if(document.querySelector('.journal-slider')){
    let journal_slider = new Swiper('.journal-slider', {
        watchOverflow: true,
        centeredSlidesBounds:true,
        centredSlides: true,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        speed: 1000,
        spaceBetween: 24,
        pagination: {
            el: '.journal-slider-pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
        },
        navigation: {
            nextEl: '.journal-slider__btn-next',
            prevEl: '.journal-slider__btn-prev',
        },
         
        
    })
}
if(document.querySelector('.product-slider')){
    let product_slider = new Swiper('.product-slider', {
        centeredSlidesBounds:true,
        centredSlides: true,
        slidesPerView: 'auto',
        watchOverflow: true,
        observer: true,
        observeParents: true,
        speed: 1000,
        spaceBetween: 8,
        freeMode: true,
        slidesOffsetAfter: -20, 
        pagination: {
            el: '.product-slider-pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
        },
        navigation: {
            nextEl: '.product-slider__btn-next',
            prevEl: '.product-slider__btn-prev',
        },
        breakpoints: {
            0: {
                spaceBetween: 8,
                 
            },
            700: {
                spaceBetween: 8
            },
            1100: {
                spaceBetween: 24,
            }
        },
        
    })
    const previews = document.querySelectorAll('.product-card-preview');
    previews.forEach(element => {
        element.addEventListener('touchstart', handleTouchStart);
    });
    previews.forEach(element => {
        element.addEventListener('touchend', handleTouchEnd);
    });

    function handleTouchStart(e) {
        const previewElement = e.target.closest('.product-card-preview');
        if (previewElement) {
            product_slider.allowTouchMove = false;
        }
    }

    function handleTouchEnd(e) {
        const previewElement = e.target.closest('.product-card-preview');
        if (previewElement) {
            product_slider.allowTouchMove = true;   
        }
    }

}

if(document.querySelector('.videos-slider')){
    let numSlides = document.querySelectorAll('.videos-slider .swiper-slide').length;
    let initialSlide = Math.floor(numSlides / 2);

    let videos_slider;
    
    videos_slider = new Swiper('.videos-slider', {
        centeredSlidesBounds: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        centeredSlides: true, 
        speed: 200,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.video-slider__btn-next',
            prevEl: '.video-slider__btn-prev',
        },
        
    })
}

if(document.querySelector('.banner-slider')){
    let banner_slider = new Swiper('.banner-slider', {
        slidesPerView: 1,
        spaceBetween: 24,  
        speed: 1000,
        pagination: {
            el: '.banner-slider-pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
        },
      
        breakpoints: {
            0: {
                spaceBetween: 8,
            },
            700: {
                spaceBetween: 8
            },
            1100: {
                spaceBetween: 24,
                navigation: {
                    nextEl: '.banner-slider__btn-next',
                    prevEl: '.banner-slider__btn-prev',
                },
            }
        },
            
        
    })
}
let product_page_slider_thumbs = null;
if(document.querySelector('.product-page-slider-thumbs')){
    product_page_slider_thumbs = new Swiper('.product-page-slider-thumbs', {
        slidesPerView: 'auto', 
        spaceBetween: 2,
        observer: true,
        observeParents: true,
    })
}
if(document.querySelector('.product-page-slider') && product_page_slider_thumbs != null){
    let product_page_slider = new Swiper('.product-page-slider', {
        slidesPerView: 'auto', 
        spaceBetween: 6,
        observer: true,
        observeParents: true,
        thumbs: {
            swiper: product_page_slider_thumbs,
        },
        on:{
            slideChange(){
                const activeSlideIndex = this.activeIndex;
                product_page_slider_thumbs.slideTo(activeSlideIndex - 1);
            }
        }
    })
} 

if(document.querySelector('.comparison-slider')){
    let comparison_slider = new Swiper('.comparison-slider', {
        slidesPerView: 'auto', 
        spaceBetween: 6,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.comparison-slider__btn-next',
            prevEl: '.comparison-slider__btn-prev',
        },
        breakpoints: {
            0: {
                spaceBetween: 8,
            },
            700: {
                spaceBetween: 20
            },
            1100: {
                spaceBetween: 36,
            }
        },
        
    })
    let dataSliders = document.querySelectorAll('.comparison-row-slider');
    if(dataSliders.length){
        const childSliders = [];
        dataSliders.forEach( el => {
            let data_slider = new Swiper( el, {
                slidesPerView: 'auto', 
                spaceBetween: 8,
                observer: true,
                observeParents: true,
                allowSlideNext: false,
                allowSlidePrev: false,
                breakpoints: {
                    0: {
                        spaceBetween: 8,
                    },
                    700: {
                        spaceBetween: 20
                    },
                    1100: {
                        spaceBetween: 36,
                    }
                },
                
            })
            childSliders.push(data_slider);
        }) 
        comparison_slider.controller.control = childSliders;
         
     
    }
}
 
if(document.querySelector('.breadcrumbs-slider')){
    let breadcrumbs_slider = new Swiper('.breadcrumbs-slider', {
        slidesPerView: 'auto', 
        centeredSlidesBounds: true,
        spaceBetween: 16,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        breakpoints: {
            0: {
                spaceBetween: 16,
            },
            1100: {
                spaceBetween: 32,
            }
        },
    })
} 