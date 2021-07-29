function calcularMediaAritmetica(){
    let sumaLista1 = 0;
    for(let i = 0; i < lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];
    }

    const promedioLista1 = sumaLista1 / lista1.length; 
    return promedioLista1; 
}