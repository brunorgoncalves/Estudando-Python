var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var pares = numeros.filter(item => item % 2 == 0); //percorre o meu array, armazena e retorna os ítens em outro array de acordo com o filtro passado

console.log(pares);

//posso fazer isso criando uma função também, como vou mostrar abaixo

function buscarmaioresque5 (value) {
    return value > 5;

};

function buscarpares (value){
    if (value % 2 === 0)
    return value
};


console.log(numeros.filter(buscarpares));

console.log(numeros.filter(buscarmaioresque5))

//ou

var maioresque5 = numeros.filter(buscarmaioresque5);

console.log(maioresque5);

////////////////////////////////////////////////////////////////////////////////


var resta1 = numeros.filter(           // ou posso fazer a função dentro do filter direto
    function buscaresta1 (value){
        return value % 2 == 1;
    }
);

console.log(resta1); //numeros com resto 1 da divisão por 2 na função abaixo