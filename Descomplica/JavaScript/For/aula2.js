var carros = [{modelo: "Onix", marca: "Chevrolet", ano: 2017, valor: 38500},
            {modelo: "Civic", marca: "Honda", ano: 2024, valor: 150000}];

var valortotal = 0;

for (let i = 0; i < carros.length; i++) {  //usando o for puro
    console.log(carros[i]);
    valortotal += carros[i].valor;
}

console.log("A soma dos valores dos dois carros é " + valortotal);


for (let i in carros){ // usando o "for" "in". Preciso passar o array e o índice para imprimir um valor específico do objeto.
    console.log(carros[i].modelo);
}

for (let carro of carros){ // usando o "for" "of". Não preciso passar índice, pois ele já trata o "carro" como um objeto do meu array.
    console.log(carro.ano)
}
