(function (){

    function clear(){
        document.querySelectorAll('.dropdown__btn').forEach((el) => {
            el.classList.remove('dropdown__btn_active');
        })
        document.querySelectorAll('.dropdown__menu').forEach((el) => {
            el.classList.remove('dropdown__menu_active');
        })
    }
    function handleOutClick(e){
        !e.target.closest('.dropdown') ? clear() : null;
    }
    if(document.querySelector('.dropdown')){
        let dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach((el) => {
            let dropdown_btn = el.querySelector('.dropdown__btn');
            let dropdown_menu = el.querySelector('.dropdown__menu');
            dropdown_btn.addEventListener('click', () => {
                if (!dropdown_btn.classList.contains('dropdown__btn_active')) {
                    clear();
                }
                dropdown_btn.classList.toggle('dropdown__btn_active');
                dropdown_menu.classList.toggle('dropdown__menu_active');
            })
            dropdown_menu.addEventListener('click', (e) => {
                if(e.target.closest('.dropdown__item')){
                    dropdown_btn.textContent = e.target.textContent;
                }
            })
        })
        window.addEventListener('click', handleOutClick);
    }

}())