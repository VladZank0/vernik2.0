document.querySelectorAll('.phone-input').forEach((e) => {
    const phoneMask = IMask( e, { mask: '+{7} 000 000 00 00' })
})