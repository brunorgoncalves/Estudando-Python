var pais = "Brasil";
 

if (pais != "Brasil"){
    console.log("Você é um estrangeiro")
}else{
    console.log("Olá meu conterrâneo !!")
};

var idade = 18;

if (idade < 16){
  console.log("Você não vota")
}else if(idade < 18 || idade >= 65){
  console.log("Seu voto é opcional")
}else{
  console.log("Seu voto é obrigatório")
};