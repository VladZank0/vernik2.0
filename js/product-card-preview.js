(function(){

    let cards = document.querySelectorAll('.product-card');
   

   
    
    cards.forEach((card) => {
        let separators = card.querySelectorAll('.product-card-preview__separator-item');
        let preview = card.querySelector('.product-card-preview__track');
        let pagination = card.querySelector('.product-card-preview__pagination');
        let pagination_bullets = card.querySelectorAll('.bullet');

        let touchStartX = 0;
        let touchEndX = 0;

        function handleSwipe(preview, pagination) {
            if (touchEndX < touchStartX - 50) {
                // Свайп влево
                console.log('right')
                showNextSlide(preview, pagination);
            
            } else if (touchEndX > touchStartX + 50) {
                // Свайп вправо
                console.log('left')
                showPreviousSlide(preview, pagination);
            }
        }
    
        function showNextSlide(preview, pagination) {
            const activeSlide = preview.querySelector('.product-card-preview__slide_active');
            const nextSlide = activeSlide.nextElementSibling;
            if (nextSlide) {
            activeSlide.classList.remove('product-card-preview__slide_active');
            nextSlide.classList.add('product-card-preview__slide_active');
              updatePagination(preview, pagination);
            }
        }
    
        function showPreviousSlide(preview, pagination) {
            const activeSlide = preview.querySelector('.product-card-preview__slide_active');
            const previousSlide = activeSlide.previousElementSibling;
            if (previousSlide) {
                activeSlide.classList.remove('product-card-preview__slide_active');
                previousSlide.classList.add('product-card-preview__slide_active');
                updatePagination(preview, pagination);
            }
        }
    
        function updatePagination(preview, pagination) {
            let currentImage =  preview.querySelector('.product-card-preview__slide_active').getAttribute('data-image');
            pagination.querySelectorAll('.bullet').forEach((e) => {
                e.classList.remove('bullet_active');
            })
            pagination.querySelector(`[data-image="${currentImage}"`).classList.add('bullet_active');

        }
        
        separators.forEach((separator) => {
            separator.addEventListener('mouseenter', ()=>{
                preview.querySelectorAll('.product-card-preview__slide').forEach((e) => {
                    e.classList.remove('product-card-preview__slide_active');
                })
                let data_image = separator.getAttribute('data-image');
                preview.querySelector(`[data-image="${data_image}"`).classList.add('product-card-preview__slide_active');
                pagination_bullets.forEach((e) => {
                    e.classList.remove('bullet_active');
                })
                pagination.querySelector(`[data-image="${data_image}"`).classList.add('bullet_active');

            })
        })
        pagination_bullets.forEach((bullet) => {
            bullet.addEventListener('mouseenter', ()=>{
                preview.querySelectorAll('.product-card-preview__slide').forEach((e) => {
                    e.classList.remove('product-card-preview__slide_active');
                })
                let data_image = bullet.getAttribute('data-image');
                preview.querySelector(`[data-image="${data_image}"`).classList.add('product-card-preview__slide_active');
                pagination_bullets.forEach((e) => {
                    e.classList.remove('bullet_active');
                })
                pagination.querySelector(`[data-image="${data_image}"`).classList.add('bullet_active');

            })
        })


        //для мобилки

        preview.addEventListener('touchstart', (event) => {
            touchStartX = event.changedTouches[0].screenX;
        });
        preview.addEventListener('touchend', (event) => {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe(preview, pagination);
        });
    })

}())

