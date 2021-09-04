function calcularPrecioConDescuento (precio,descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

//HTML - JavaScript
function CalcularPrecio() {
    const price = document.getElementById("InputPrice").value;
    const discount = document.getElementById("InputDiscount").value;

    const precioConDescuento = calcularPrecioConDescuento(price,discount);
    
    document.getElementById("ResultPrice").innerText = "El precio con descuento aplicado es " + precioConDescuento;
    
}