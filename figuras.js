//Código del Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {

    return lado * 4;
}

function areaCuadrado(lado) {

    return lado * lado;
}

console.groupEnd;
//Código del Triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd;
//Código del Círculo
console.group("Círculos");
const radioCirculo = 4;

function diametroCirculo(radio) {
    return radio * 2;
}
function perimetroCircunferencia(radio) {
    return diametroCirculo(radio) * Math.PI;
}
function areaCircunferencia(radio) {
    return Math.pow(radio, 2) * Math.PI;
}
console.groupEnd;

//Función calcularPerimetro
//Cada vez que haga click a calcularPerimetro se conecte
//Interacción del HTML con JavaScript
function calcularPerimetroCuadrado(){
    const value = document.getElementById("InputCuadrado").value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
function calcularAreaCuadrado(){
    const value = document.getElementById("InputCuadrado").value;
    const area = areaCuadrado(value);
    alert(area);
}