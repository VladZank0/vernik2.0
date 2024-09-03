if(document.querySelector('.phone-input')){
    document.querySelectorAll('.phone-input').forEach((e) => {
        const phoneMask = IMask( e, { mask: '+{7} 000 000 00 00' });
    })
}
if(document.querySelector('.number-input')){
    document.querySelectorAll('.number-input').forEach((e) => {
        const priceeMask = IMask( e, { 
            mask: Number, // Ограничить ввод только числами
            
        });
    })
}
