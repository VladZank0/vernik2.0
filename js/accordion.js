(function(){
    let btns = document.querySelectorAll('.accordion-btn');

    btns.forEach((btn)=>{
        if (btn.nextElementSibling.classList.contains('accordion-content_active')) {
            btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + "px";
            btn.nextElementSibling.style.transition = 0 + 's';
        }
    })
    setTimeout(()=>{
        btns.forEach((btn)=>{
            btn.nextElementSibling.style.transition = null;
        })
    }, 200)
    btns.forEach((btn)=>{
      
        btn.addEventListener('click', (event)=>{
            let content =  btn.nextElementSibling;
            if(!content.classList.contains('accordion-content_active')){
                content.style.maxHeight = content.scrollHeight + "px";  
            }else{
                content.style.maxHeight = null;  
            }
            content.classList.toggle('accordion-content_active');
            btn.classList.toggle('accordion-btn_active');
        })
    })
    
}())