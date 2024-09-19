var bebida = "Café";
var valor = "";


switch(bebida){
    case "Café":
        valor = 74.99;
        console.log ("Você escolheu Café e ele custa R$ " + valor.toFixed(2));
        break;

    case "Leite":
        valor = 84.21;
        console.log ("Você escolheu Leite e ele custa R$ " + valor.toFixed(2));
        break;
        
    case "Chá":
        valor = 129.9478;
        console.log ("Você escolheu chá e ele custa R$ " + valor.toFixed(2));
        break;

    default:
        console.log("Bebida não existente! A bebida escolhida deve estar entre as disponíveis, que são: Café, Leite ou Chá.")
};