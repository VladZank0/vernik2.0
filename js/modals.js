(function(){


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