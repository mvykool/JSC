//

//calcular descuento

//



const cupones = [
    "santa",
    "carro",
    "perro"
];



function myCupon()

{
    const cupon = document.getElementById("cupon");
    const cuponValue = cupon.value;



    let discount;



    switch (cuponValue) {

        case cupones[0]:
            discount = 10;
            break;
        case cupones[1]:
            discount = 15;
            break;
        case cupones[2]:
            discount = 20;
            break;

    }

    const cuponAmount = document.querySelector("#cuponAmount");
    cuponAmount.innerHTML = discount + "%";
    const precioNumber = precio;
    const precioNumber2 = parseInt(precio.value);
    const priceWithCupon = 100 - discount;
    const oP = priceWithCupon * precioNumber2;
    const resultado = document.querySelector(".show-resultado");


    resultado.innerHTML = oP + " $";

};

function resultado() {

    const precioUser = precio;
    const precioN = parseInt(precio.value)

    const descuentoUser = descuento;
    const descuentoN = parseInt(descuento.value);


    const operacion = 100 - descuentoN;
    const rFinal = operacion * precioN;

    const result = document.querySelector(".show-resultado");


    result.innerHTML = rFinal + " $";


};


function reset() {
    const reset1 = document.querySelector("#precio");
    const reset2 = document.querySelector("#descuento");
    reset1.value = " ";
    reset2.value = " ";
    const result = document.querySelector(".show-resultado");

    result.innerHTML = "0";
};