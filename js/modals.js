(function(){

const modalButtons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
let modal_container = null; 
if(modals){
  
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(e=>{
                e.style.display = "none";
            })
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal_container = modal.querySelector('.modal__container');
            modal_container.classList.add('modal__container_active');
            modal.style.display = 'flex';
            const screenWidth = window.innerWidth;
            if(screenWidth <= 1100){
                document.querySelector('body').style.overflow = 'hidden';
            }
            setTimeout(()=>{
                modal.style.opacity = 1;
            }, 0)
        });
    });
    modals.forEach((e)=>{
        const closeBtn = e.querySelector('.modal__close');
        const form = e.querySelector('form');
        if(form){
            form.addEventListener('submit', (e)=>{
                close_window(e);
            })
        }
        closeBtn.addEventListener('click', (e)=>{
            close_window(e);
        })
        e.addEventListener('click', (event)=>{
            if(event.target.classList.contains('modal') && event.target.style.display !== 'none'){
                close_window(event);
            } 
        })
    })
    
}
function close_window(event){
    const modal = event.currentTarget.closest('.modal');
    modal_container.classList.remove('modal__container_active');
    // modal.style.opacity = 0;
    // modal_container.style.animation = 'modal_close_animation .5s';
    setTimeout(()=>{
        event.target.closest('.modal').style.display = "none";
        modal_container.style.animation = null;
        modal.style.opacity = null;
        if(document.querySelector('body').style.overflow == 'hidden'){
            document.querySelector('body').style.overflow = null;
        }
    }, 450)
}

if(document.querySelector('.sticky-box')){
    const sticky_box = document.querySelector('.sticky-box');
    const data_sticky_box = document.querySelector('[data-sticky-box]');
    if (sticky_box && data_sticky_box) {
        function getWindowBottom() {
            return window.innerHeight + window.scrollY; // Низ окна
        }

        function getBoxTopRelativeToDocument(element) {
            const rect = element.getBoundingClientRect();
            return rect.top + window.scrollY; // Позиция элемента относительно документа
        }
        function handleStickBlock() {
            let window_bottom = getWindowBottom();
            let box_top = getBoxTopRelativeToDocument(data_sticky_box);
            if (window_bottom - sticky_box.scrollHeight >= box_top) {
                sticky_box.classList.remove('sticky-box_active');
            } else if(window_bottom <= box_top) {
                sticky_box.classList.add('sticky-box_active');
            }
        }
        window.addEventListener('scroll', handleStickBlock);
        window.addEventListener('resize', handleStickBlock); // Обрабатываем изменение размера окна
        handleStickBlock(); // Вызов функции для начальной проверки
    } else {
        console.error('Один или оба элемента не найдены');
    }
}

}())