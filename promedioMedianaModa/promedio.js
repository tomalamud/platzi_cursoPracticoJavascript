// PROMEDIO
function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){
    // sumaLista = sumaLista + lista[i];
    // }
    
    // .reduce() = metodo de los arrays que ahorra el for de arriba.
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    ); 

    const promedioLista = sumaLista / lista.length; 
    return promedioLista; 
}

// MEDIANA
const lista1 = [
    200,
    300,
    500,
    700
];
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}
let mediana;
function calcularMediana(){
    if(esPar(lista1.length)){
    mediana = (lista1[mitadLista1] + lista1[mitadLista1 - 1]) / 2;
    } else {
    mediana = lista1[mitadLista1];
    }
    return mediana;
}
