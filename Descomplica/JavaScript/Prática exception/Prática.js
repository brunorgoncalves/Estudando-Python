class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    };

    seApresentar(){
        
        return `Olá, meu nome é ${this.nome}. Tenho ${this.idade} anos e hoje atuo na empresa como ${this.cargo}.`
    };

    trabalhar(){
        
        return `${this.nome} está trabalhando como ${this.cargo}`
    };
};

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, "Gerente");
        this.departamento = departamento;
    };

    gerenciar(){
        
        return `${this.nome} está gerenciando a área ${this.departamento}`
    };
};

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, "Desenvolvedor");
        this.linguagem = linguagem;
    };

    programar(){
        
        return `${this.nome} está programando em ${this.linguagem}`
    };
};

function exibirErro(mensagem){
    const resultadoErro = document.getElementById("erro");
    resultadoErro.innerHTML = `
        <p style= "color: red;">Erro: ${mensagem}</p>`;
};

function criarFuncionario(){
    try{
        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;
        const cargo = document.getElementById("cargo").value.toLowerCase();
        const departamento = document.getElementById("departamento").value;
        const linguagem = document.getElementById("linguagem").value;
        
        if(!nome || !idade || !cargo){
            throw new Error("Todos os campos obrigatórios precisam ser preenchidos")  
        }
        
        let funcionario;
        if(cargo === "gerente"){
            if(!departamento){
                throw new Error("O preenchimento de departamento é necessário para o cargo de gerente");
            }

            funcionario = new Gerente(nome, idade, cargo, departamento);

        }else if(cargo === "desenvolvedor"){
            if(!linguagem){
                throw new Error("O preenchimento da linguagem é necessário para o cargo de desenvolvedor")
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        };
        
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `
            <p>${funcionario.seApresentar()}</p>
            <p>${funcionario.trabalhar()}</p>
            ${cargo === 'gerente' ? `<p>${funcionario.gerenciar()}</p>` : `<p>${funcionario.programar()}</p>`}
        `;

        exibirErro("");
    }catch(error){
        exibirErro(error.message);
    };        
};