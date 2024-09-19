const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var pais = input.question('Informe um número: ', (resposta) => {
  // TODO: Log the answer in a database
  console.log(`Número informado: ${resposta}`);
  input.close();
});

 

if (pais != "Brasil"){
    console.log("Você é um estrangeiro")
}else{
    console.log("Olá meu conterrâneo !!")
}