(function(){

    const [ menu_catalog, menu_catalog_btn, menu_catalog_close, burger_menu, burger_menu_close, burger_btn, header, body ] = 
          [ document.querySelector('.menu-catalog'),
            document.getElementById('catalog-btn'),
            document.querySelector('.menu-catalog-close'),
            document.getElementById('burger-menu'),
            document.querySelector('.burger-menu-close'),
            document.querySelector('.burger-btn'),
            document.querySelector('.header'),
            document.querySelector('body'),
          ];

    function toggleMenu(){
        burger_menu.classList.toggle('header__burger-menu_active');
        body.classList.contains('no-scroll') 
        ? body.classList.remove('no-scroll') 
        : body.classList.add('no-scroll');
    }
    function toggleCatalog(){
        menu_catalog.classList.toggle('menu-catalog_active');
    }
    function isMobile(){
        return window.innerWidth < 1100 ;
    }
    function stickHeader(isMobile){ 
        if(!isMobile()){
            window.scrollY >= 100 ? header.classList.add('header_sticky') : 
            header.classList.remove('header_sticky');
        }else{
            header.classList.remove('header_sticky');
        }
    }
    
    stickHeader(isMobile);

    burger_btn.addEventListener('click', toggleMenu);
    burger_menu_close.addEventListener('click', toggleMenu);
    menu_catalog_btn.addEventListener('click', toggleCatalog);
    menu_catalog_close.addEventListener('click', toggleCatalog);
    
    window.addEventListener('scroll', () => {
        stickHeader(isMobile);
    });
    window.addEventListener('resize', () => {
        stickHeader(isMobile);
    });
    window.addEventListener('click', (event)=> {
        if( !event.target.closest('.menu-catalog') && menu_catalog.classList.contains('menu-catalog_active') && !event.target.matches('#catalog-btn')){
            menu_catalog.classList.remove('menu-catalog_active');
        }
    })
    

}())