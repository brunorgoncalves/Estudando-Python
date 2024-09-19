var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var novos = numeros.map(function(valor){
    return valor * 2;

});

console.log(novos);

var funcionarios = [
    {nome: "Bruno", idade: 28},
    {nome: "Matheus", idade: 29},
    {nome: "Camila", idade: 31},
    {nome: "Amanda", idade: 20},
    {nome: "Maycon", idade: 26},
    {nome: "Suellen", idade: 19},
];

var nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes)