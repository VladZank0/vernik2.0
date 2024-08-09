(function(){

    let cards = document.querySelectorAll('.product-card');
    
    
    cards.forEach((card) => {
        let separators = card.querySelectorAll('.product-card-preview__separator-item');
        let preview = card.querySelector('.product-card-preview__track');
        let pagination = card.querySelector('.product-card-preview__pagination');
        let pagination_bullets = card.querySelectorAll('.bullet');
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
    })

}())