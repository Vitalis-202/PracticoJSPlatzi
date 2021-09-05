//Calcular la Media
function calcularMediaAritmetica(lista){
    
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista/lista.length;
    return promedio;
}
//Mediana
function calcularMediana(lista){

    let mediana = 0;
    let mitadMediana;
    const listaOrdenada = lista.sort(function(a,b){return a-b;}); 
    mitadMediana = parseInt(lista.length/2);
    console.log(listaOrdenada)

    if(esPar(lista.length)){
        const elemento1 = lista[mitadMediana-1];
        const elemento2 = lista[mitadMediana];
        mediana = calcularMediaAritmetica([elemento1,elemento2])


    }else{
        
        mediana = lista[mitadMediana];
    }

    return mediana;

}

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

//Calcular la moda

function calcularModa(lista){

    const listaCount={};
    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
            
        }
    );

    const listaArray = Object.entries(listacount).sort(
        function (valorAcumulado,nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    return listaArray[listaArray.length-1];

}