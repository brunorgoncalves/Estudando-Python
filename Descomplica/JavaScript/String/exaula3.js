var frase = "Olá, Mundo !"

if (frase.includes("Olá")){
    var sub = frase.substring(frase.indexOf("Mundo"),);
    var nova = sub.replace("Mundo !", "pessoal !");
    var novaupper = nova.toLocaleUpperCase();

    console.log(frase.substring(0, (frase.indexOf(",")) + 1).concat(" " + novaupper));
}

var nome = console.log("Bruno")

