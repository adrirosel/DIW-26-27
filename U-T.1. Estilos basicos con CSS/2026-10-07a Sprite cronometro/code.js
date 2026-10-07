let posicionActual = -810

const nDivNumero = document.getElementById('eDivNumero')

// Puedo acceder al css desde JavaScript usando la propiedad style
// de la etiqueta


setInterval(() => {
    nDivNumero.style.backgroundPositionX= `${posicionActual}px`
    posicionActual !== 0 ? posicionActual += 90 : posicionActual
}, 1000);

