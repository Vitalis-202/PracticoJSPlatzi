//Funciones Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}

//Calcular la media Aritmética
function calcularMediaAritmetica(lista){
    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista/lista.length;
    return promedio;
}

//Funciones del negocio

const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }

);

const salariosColSorted = salariosCol.sort(
    function (SalaryA,SalaryB){
        return SalaryA - SalaryB;
    }
);

//Calculadora de medianas
//Calcular la mediana general
function medianaSalarios(lista) { 

    let mediana = 0;
    let mitadMediana;
    mitadMediana = parseInt(lista.length/2);

    if(esPar(lista.length)){
        const elementoA = lista[mitadMediana-1];
        const elementoB = lista[mitadMediana];
        mediana = calcularMediaAritmetica([elementoA,elementoB]);


    }else{
         
        mediana = lista[mitadMediana];    
    }
    return mediana;

}
//Calcular la medianaTop10
const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);



const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10Col = medianaSalarios(salariosColTop10);
//
console.log({
    medianaGeneralCol,
    medianaTop10Col
});