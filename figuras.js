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

// interactuar con HTML

// cuadrado
function calcularPerimetroCuadrado(){ // estas funciones fueron definidas en el onclick del HTML
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// triangulo
function calcularPerimetroTriangulo(){
    const inputT1 = document.getElementById("inputTriangulo1");
    const inputT2 = document.getElementById("inputTriangulo2");
    const inputTB = document.getElementById("inputTrianguloB");
    const valueT1 = inputT1.value;
    const valueT2 = inputT2.value;
    const valueTB = inputTB.value;

    const perimetro = perimetroTriangulo(valueT1,valueT2,valueTB);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputTA = document.getElementById("inputTrianguloA");
    const inputTB = document.getElementById("inputTrianguloB");
    const valueTA = inputTA.value;
    const valueTB = inputTB.value;
    const area = areaTriangulo(valueTB,valueTA);
    alert(area);
}

// circulo
function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}