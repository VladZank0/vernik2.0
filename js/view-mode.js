function switchView(e){
    let btns = document.querySelectorAll('.view-switch');
    let grid = document.querySelector('.product-grid');
    let view = e.currentTarget.getAttribute(['data-switch']); 
    if(grid && view){
        if(view == 'list' && !grid.classList.contains('product-grid_list')){
            btns.forEach(e => e.classList.remove('view-switch_active'));
            e.currentTarget.classList.add('view-switch_active');
            grid.classList.add('product-grid_list');
        }else if(view != 'list'){
            btns.forEach(e => e.classList.remove('view-switch_active'));
            e.currentTarget.classList.add('view-switch_active');
            grid.classList.remove('product-grid_list');
        }
    }
}