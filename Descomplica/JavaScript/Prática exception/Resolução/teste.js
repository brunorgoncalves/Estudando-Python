// Classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
}

// Classe Gerente (herda de Funcionario)
class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
        super(nome, idade, "Gerente");
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor (herda de Funcionario)
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
        super(nome, idade, "Desenvolvedor");
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Função para exibir erro
function exibirErro(mensagem) {
    const erroDiv = document.getElementById('erro');
    erroDiv.innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}

// Função para criar funcionário
function criarFuncionario() {
    try {
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value;
        const linguagem = document.getElementById('linguagem').value;
        
        // Validação dos campos
        if (!nome || !idade || !cargo) {
            throw new Error("Todos os campos obrigatórios devem ser preenchidos.");
        }

        let funcionario;
        if (cargo === 'gerente') {
            if (!departamento) {
                throw new Error("O departamento é obrigatório para o cargo de gerente.");
            }
            funcionario = new Gerente(nome, idade, departamento);
        } else if (cargo === 'desenvolvedor') {
            if (!linguagem) {
                throw new Error("A linguagem de programação é obrigatória para o cargo de desenvolvedor.");
            }
            funcionario = new Desenvolvedor(nome, idade, linguagem);
        }

        // Exibir resultado
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
            <p>${funcionario.seApresentar()}</p>
            <p>${funcionario.trabalhar()}</p>
            ${cargo === 'gerente' ? `<p>${funcionario.gerenciar()}</p>` : `<p>${funcionario.programar()}</p>`}
        `;

        // Limpa o campo de erro, caso haja
        exibirErro("");
    } catch (error) {
        exibirErro(error.message);
    }
}