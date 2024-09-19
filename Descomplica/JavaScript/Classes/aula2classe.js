class pessoa{

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){ // para chamar esse método, preciso usar o () no final 
        console.log("Olá " + this.nome)
    }

    get nomeCompleto(){// Usando o "get" para chamar esse método, não preciso usar o () no final
        console.log("Olá " + this.nome + " " + this.sobrenome)
    }

}

p1 = new pessoa("Bruno", "Gonçalves")
p1.falar(); // com ()
p1.nomeCompleto; // sem o ()