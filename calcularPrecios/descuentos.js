function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
};

function calcularPrecioConDescuentoYCupon(precio,descuento){
    const porcentajePrecioConDescuento = 85 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
};

let cuponDB = 394820;
function buttonValidateCupon() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;
    if (cuponValue != 0) {
        if (cuponValue == cuponDB) {
            const precioConDescuentoYCupon = calcularPrecioConDescuentoYCupon(priceValue,discountValue);
            const resultP = document.getElementById("priceResult");
            resultP.innerText = "El precio con el descuento del día más el cupón es: $" + precioConDescuentoYCupon;
        } else {
            alert("El cupon no es válido.")
        }
    }
}

function buttonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("priceResult");
    resultP.innerText = "El precio con el descuento del día es: $" + precioConDescuento;
}

// Validar Email
function validarEmail(valor) {
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(re.exec(valor)){
        return true;
    } else {
        alert("La dirección de email es incorrecta.");
    };
};

// Generar cupón
function generarCupon(max,min){
    return Math.round(Math.random() * (max - min) + min);
};

// Interacutar con botón
function buttonSolicitarCupon(){
    const inputMail = document.getElementById("InputMail");
    const mailValue = inputMail.value;

    // const inputCheck = document.getElementById("InputCheck");
    // const checkValue = inputCheck.value;
    if (validarEmail(mailValue) == true) {
        var lastCupon = generarCupon(10000,9000)
        alert("Tu cupón es:" + lastCupon);
    }
    return lastCupon
}

