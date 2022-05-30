const numeros = [
    10,
    200,
    50,
    90
];

numeros.sort((a, b) => a - b);

let media = 0;

for (let i = 0; i < numeros.length; i++) {
    media = media + numeros[i];


};


const mediana = parseInt(media / numeros.length);