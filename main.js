//get perimetro


function perimetroF(lado) {
    return lado * 4;
};

function getPerimetro() {
    //valor del input segun el user

    const lado = input1;

    const pResult = document.querySelector(".pResult");

    const perimetro = document.querySelector(".perimetro-btn");

    const ladoN = parseInt(input1.value);

    const perimetroOp = perimetroF(ladoN);
    pResult.innerHTML = perimetroOp + " cm";
};

// get area

function areaF(lado) {
    return lado * lado;
};


function getArea() {
    const lado = input1;
    const aResult = document.querySelector(".aResult");
    const area = document.querySelector(".area-btn");
    const ladoN = parseInt(input1.value);

    const areaOP = areaF(ladoN);
    aResult.innerHTML = areaOP + " cm²";
}

function getDelete() {
    const pResult = document.querySelector(".pResult");
    const aResult = document.querySelector(".aResult");
    aResult.innerHTML = 0 + " cm²"
    pResult.innerHTML = 0 + " cm";
    const input = document.getElementById("input1");
    input.value = " ";

};


//calcula altura de triangulo



function getAltura() {

    const ladosIguales = inputA;
    const ladosIgualesNumero = parseInt(inputA.value);
    const base = inputB;
    const baseNumero = parseInt(inputB.value);
    const alturaResult = document.querySelector(".alturaResult");
    const alturaBtn = document.querySelector(".altura-btn");

    const alturaMth = Math.sqrt(ladosIgualesNumero ** 2 - baseNumero ** 2 / 4);

    alturaResult.innerHTML = alturaMth + " cm";
};

function getDelete() {
    const pResult = document.querySelector(".pResult");
    const aResult = document.querySelector(".aResult");
    aResult.innerHTML = 0 + " cm²"
    pResult.innerHTML = 0 + " cm";
    const input = document.getElementById("input1");
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");
    input.value = " ";
    inputA.value = " ";
    inputB.value = " ";

};