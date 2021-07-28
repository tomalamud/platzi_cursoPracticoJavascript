// codigo cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
};

function areaCuadrado(lado){
    return lado * lado;
};

// codigo triangulo
function perimetroTriangulo(lado1,lado2,base) {
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
};


function areaTriangulo(base,altura){
    return (base * altura) / 2;
} 

function alturaTrianguloIsoceles(lados,base){
    alturaA = (lados ** 2) - ((base / 2) ** 2)
    return Math.sqrt(alturaA);
}

// Código del círculo

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) { 
    let diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
};
