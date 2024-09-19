var jogo = "Barcelona vs Real melhor time";

var val = jogo.includes("Real"); // verifica se existe a string passada, dentro da variavel de string selecionada

if (val){
    console.log("Existe !");
}else{
    console.log("Não existe !");
};

var str1 = "Hello ";
var str2 = "World";

var str3 = str1.concat(str2); // junta duas strings

console.log(str3);

var frase = "                 Olá, Mundo !"
console.log(frase.trim()); // tira todos os espaços vazios de uma string

var num = "1,2,3,4,5,6,7,8";
var arr = num.split(","); // transforma uma string em um array, caso toda ela seja dividida po um mesmo caracter. Nesse exemplo, o caracter é a "," (vírgula.)


console.log(arr);
console.log(arr[5]); // acessando um valor do array gerado após a transformação

