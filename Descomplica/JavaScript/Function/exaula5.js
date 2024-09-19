function criarPessoa(nome, sobrenome, peso, altura){
    return {
        nome,
        sobrenome,
        peso,
        altura,
        calcularIMC(){
            const IMC = (peso / (altura**2))
            if (IMC < 18.5){
                console.log("Abaixo do peso")
            }else if (IMC >= 18.5 && IMC < 24.9){
                console.log("Peso normal")
            }else if (IMC >= 25 && IMC < 29.9){
                console.log("Acima do peso (Sobrepeso)")
            }else if (IMC >= 30 && IMC < 34.9){
                console.log("Obesidade I")
            }else if (IMC >= 35 && IMC < 39.9){
                console.log("Obesidade II")
            }else if(IMC){
                console.log("Obesidade III")
            };
        }
    }
};
   
p1 = criarPessoa("Bruno", "Gonçalves", 70, 1.77)

p1.calcularIMC();

