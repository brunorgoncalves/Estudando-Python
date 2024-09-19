var arr = [1, 2, 3, 4, 5, 6, 7];

arr.splice(2, 3);  //tiro um elemento da lista, a partir do índice "x" escolhido (x, y), e tiro o número de elementos "y" desejados a partir dele (x, y);
console.log(arr);

var nomes = ["maria", "joão", "lucas", "pedro"];
var novos = nomes.splice(1, 1, "Bruno"); //fiz o corte, retirei um nome e substituí por um novo. Posso fazer isso com quantos nomes eu quiser.
console.log(novos) //mostra o nome retirado
console.log(nomes) //mostra a matriz antiga, porém agora com um novo nome acrescentado

var pais = ["brasil", "argentina", "colombia"];

pais.unshift("uruguai");
console.log(pais);
