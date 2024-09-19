function multiplicar (x, y){ // função regular. Tem esse nome pois é feclarada direto e passado os parâmetros
    return x*y
}

var a = multiplicar(4,2);
console.log(a);


var b = multiplicar(2,10);
console.log(b);




function somaValores(a, b = 2, c = 6){
    var total = a + b + c
    return total
};

var f = somaValores(8);

console.log(f);



var infoCalculo = function(a, b, c){ // função anônima. Tem esse nome, porque fica dentro de uma variável declarada
    return a + b + c
}

console.log(infoCalculo(2, 5, 7));




const soma = (num1, num2) =>{
    return num1 + num2
};

console.log(soma(3,6));


const numeros = [1, 2, 3, 4, 5];
const valores = numeros.map((num) => num * num)
console.log(valores);


var listaProdutos = ["geladeira", "fogão", "air fryer"];
var listaEmMaiuscula = listaProdutos.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
};

console.log(listaEmMaiuscula);

