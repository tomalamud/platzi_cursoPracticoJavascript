// Helpers
function esPar(num){
    return (num % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce((a = 0, b) => a + b); 
    const promedioLista = sumaLista / lista.length; 
    return promedioLista; 
}

// Mediana General
const salariosCol = colombia.map((persona) => persona.salary);

const salariosColSorted = salariosCol.sort((a, b) => a - b);

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad]; 
        const personaMitad2 = lista[mitad - 1]; 
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneral = medianaSalarios(salariosColSorted);

// Mediana Top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaColTop10 = medianaSalarios(salariosColTop10);

// Outputs
console.log(
    {medianaGeneral,
    medianaColTop10,
    }
);

function x (lista) {
    for (let i = 0; i > lista.length; i++){
        return i;
    }
};

console.log(x(salariosColSorted));