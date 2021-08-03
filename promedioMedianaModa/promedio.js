// PROMEDIO
function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){
    // sumaLista = sumaLista + lista[i];
    // }
    
    // .reduce() = metodo de los arrays que ahorra el for de arriba.
    const sumaLista = lista.reduce(
        function (a = 0, b) {
            return a + b;
        }
    ); 

    const promedioLista = sumaLista / lista.length; 
    return promedioLista; 
}

// MEDIANA
const lista1 = [
    700,
    100,
    200,
    300,
    500,
    100,
    500,
    100,
];

let listaOrdenada = lista1.sort((a, b) => a - b);
function esPar(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}
let mediana;
function calcularMediana(){
    const mitadLista1 = parseInt(listaOrdenada.length / 2);
    if(esPar(lista1.length)){
    mediana = (lista1[mitadLista1] + lista1[mitadLista1 - 1]) / 2;
    } else {
    mediana = lista1[mitadLista1];
    }
    return mediana;
}

// MODA
const lista2 = [
    1,
    2,
    3,
    4,
    5,
    6,
    3,
    4,
    5,
    3,
    2,
    1,
    2,
    3,
    4,
    3,
    2,
    1,
    2,
    3,
    2,
    1,
];

const lista2Count = {};

lista2.map(
    function (elemento) {
        if (lista2Count[elemento]){
            lista2Count[elemento] += 1;
        } else {
            lista2Count[elemento] = 1;   
        }
    }
);

const lista2Array = Object.entries(lista2Count).sort(
    function (elementoA,elementoB) { 
        return elementoA[1] - elementoB[1];
    }
);
// es como: .sort((a, b) => a[1] - b[1]);
// y tambien es como .sort(
//     function (a,b){
//         if (a[1] < b[1]) return 1;
//         if (a[1] == b[1]) return 0;
//         if (a[1] > b[1]) return -1;
//     }
// );
let moda = lista2Array[lista2Array.length - 1]; // el menos uno es porque el indice del array empieza a contar desde el cero y el length no.

// Ejemplo compa.
// function mode(arr){
//     return arr.sort((a,b) =>
//           arr.filter(v => v===a).length
//         - arr.filter(v => v===b).length
//     ).pop();
// }
// console.log(mode(lista2Array));

// Promedio ponderado. (incompleto)
// const notas = [10,5,8,9,7,5,9];
// const credits = [200,300,200,500,2000,200,400];

// function promedioPonderado(){
//     for (let i = 0; i < notas.length; i++){
//         let result = [];
//         (notas[i] * credits[i])

//     }
// }