const salarios = colombia.map(

    function(persona) {

        return persona.salary;

    }
);

const salariosSorted = salarios.sort(

    function(salaryA, salaryB) {

        return salaryA - salaryB;
    }
);

function esPar(numero) {
    return (numero % 2 === 0);
}


function calcularMediana(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function mediana(lista) {
    const mitad = parseInt(lista.length / 2);


    if (esPar(lista.length)) {

        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const medianaResult = calcularMediana([personaMitad1, personaMitad2]);

        return medianaResult;

    } else {
        const personaMitad = lista[mitad];

        return personaMitad;
    }
}


const salarioGeneral = mediana(salariosSorted);


//salario top 10

const spliceStart = (salariosSorted.length * 90) / 100;
const spliceCount = salariosSorted.length - spliceStart;

const salarioTop10 = salariosSorted.splice(spliceStart, spliceCount);


const salarioTop = mediana(salarioTop10);

console.log({
    salarioGeneral,
    salarioTop,
});