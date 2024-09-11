(function (){
    let filter = document.querySelector('.filter');
    let filter_btn = document.querySelector('.filter-btn');
    let filter_close = document.querySelector('.filter__close');
    let body = document.querySelector('body');
    if(filter){
        filter_btn.addEventListener('click', () => {
            filter.classList.add('filter_active');
            body.classList.add('no-scroll');
        })
        filter_close.addEventListener('click', () => {
            filter.classList.remove('filter_active');
            body.classList.remove('no-scroll');
        })
    }
}())