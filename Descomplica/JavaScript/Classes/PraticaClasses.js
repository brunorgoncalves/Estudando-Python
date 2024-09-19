class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    };

    seApresentar(){
        console.log(this.cargo + " se apresente !")
        console.log("Olá, meu nome é " + this.nome + ". Tenho " + this.idade + " anos e hoje atuo na empresa como " + this.cargo + ".")
        console.log("")
    };

    trabalhar(){
        console.log(this.nome + " de volta ao trabalho !")
        console.log("A minha mesa é aquela com o nome " + this.nome + " na frente? Ok, estou indo para lá iniciar o dia de trabalho agora mesmo")
        console.log("")
    };
};

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    };

    gerenciar(){
        console.log("Meu nome é " + this.nome + " e como gerencio o departamento de " + this.departamento + ", vou verificar se os funcionários dessa área precisam de alguma ajuda minha para melhorar o desempenho deles nas entregas")
        console.log("")
    };
};

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    };

    programar(){
        console.log(this.nome + " preciso que você comece o projeto de " + this.linguagem + " hoje mesmo !")
        console.log("Já não era hora ! Eu sou apaixonado por programar em " + this.linguagem + " e já estava ansioso pra começar !")
        console.log("A propósito, meu nome é " + this.nome + ", tenho " + this.idade + " anos e sou o novo " + this.cargo + " aqui da área. Prazer !")
    };
};


var gerente1 = new Gerente("Marcelo", 30, "Gerente", "Full Stack Developers");
var dev1 = new Desenvolvedor("Bruno", 28, "Desenvolvedor", "JavaScript");

gerente1.seApresentar();
dev1.seApresentar();

gerente1.trabalhar();
dev1.trabalhar();

gerente1.gerenciar();

dev1.programar();