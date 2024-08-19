(function (){
    let filter = document.querySelector('.filter');
    let filter_btn = document.querySelector('.filter-btn');
    let filter_close = document.querySelector('.filter__close');

    filter_btn.addEventListener('click', () => {
        filter.classList.add('filter_active');
    })
    filter_close.addEventListener('click', () => {
        filter.classList.remove('filter_active');
    })

}())