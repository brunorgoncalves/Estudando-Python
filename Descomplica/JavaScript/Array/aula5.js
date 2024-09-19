var a = [10, 20, 30, 40, 50, 60];

a.forEach(valor => console.log(valor));

var total = 0

a.forEach(valor => {
    total += valor;
});

console.log(total);

a.forEach(function(valor, indice, array){
    console.log(array[indice]);
});