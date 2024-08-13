(function(){

    const textContainers = document.querySelectorAll('[data-text-container]');
    const readMoreBtn = `<button class="review-more-btn">еще</button>`;
    function isTextBig(element) {
        return element.scrollHeight > 196;
    }
    if (textContainers.length > 0){
        textContainers.forEach((text) => {
            
            if (isTextBig(text)) {
                text.classList.add('review-text_hidden');
                text.closest('div').insertAdjacentHTML("afterend", readMoreBtn);
                text.closest('.review').addEventListener('click', (event) => {
                    if (event.target.classList.contains('review-more-btn')) {
                      text.classList.toggle('review-text_hidden');
                      event.target.textContent = text.classList.contains('review-text_hidden') ? 'еще' : 'cвернуть';
                    }
                });
            }
        })
    }
    
}())