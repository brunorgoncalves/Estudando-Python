var lista = [8, 1, 7, 2, 9];
soma = 0;

for (var pos = 0; pos < lista.length; pos++){ //ainda não aprendemos for em JavaScript, mas estamos adiantando para esse exemplo
    soma += lista[pos];
    console.log(soma);
    media = soma / lista.length //diz o tamanho do array. (quantidade de elemento dentro dele)
    console.log("A média é: " + media)
}

console.log("Array sequencial e invertido " + lista.sort() && lista.reverse()); //ordena e inverte os valores de um array. Seja numericamente ou alfabeticamente


var teste = [1,2,3,4,5,6,7,8,9];

console.log(teste.join(" - ")); //separa os valores de um array por caracteres escolhidos

var retirado = teste.shift(); //retira o primeiro valor de um array

console.log(retirado);

console.log(teste)

console.log("A posição do número 3 na lista acima é: " + teste.indexOf(3)); //imprime a posição do valor solicitado na lista

teste.push(15); //acrescenta um número no array
console.log(teste)

teste.pop(); //retira o último elemento do array
console.log(teste);