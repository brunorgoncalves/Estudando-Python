var arr = ["Bruno", "Matheus", "Amanda", "Camila", "Maycon"];

var arr2 = ["Thiago", "Paulo", "Marjolyn", "Diogo", "Rodrigo"];

var gerente = ["Nunes", "Delio"];

var pessoas = arr.slice(1, 3); //corto e crio um novo array, porém, sem alterar o antigo. Diferente do "plice"
console.log(arr);
console.log(pessoas);

 var empresa = gerente.concat(arr); //utilizado para fazer a junção de dois arrays
 console.log(empresa)

 var final = empresa.concat(arr2);
 console.log(final);

 