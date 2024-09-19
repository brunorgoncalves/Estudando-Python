// forma de criar objetos

const pessoa = {
    nome: "Bruno",
    sobrenome: "Gonçalves"
}

console.log(pessoa["sobrenome"]);

// segunda forma de criar objetos

const funcionario = new Object();
funcionario.nome = "Ana";
funcionario.sobrenome = "Luiza";

console.log(funcionario.nome); // muda também a forma de chamar o objeto


// terceira forma de criar objetos

function criarPessoa(nome, sobrenome, i){
    return {
        nome, 
        sobrenome,
        idade: i,
        get nomeCompleto(){ //crio uma funçao dentro do meu objeto
            return `${this.nome} ${this. sobrenome}`
        }
        // nomeCompleto(){ //crio uma funçao dentro do meu objeto
        //    return `${this.nome} ${this. sobrenome}`
        //} // fazendo sem o "get", a forma de chamar é diferente. Representei isso na chamada de p3
    
    
    
    }
};

const p1 = criarPessoa("Rafael", "Assis", 29);
const p2 = criarPessoa("Hamilton", "Abreu", 32);
const p3 = criarPessoa("Luiz", "Nunes", 34);

console.log(p1); // dessa forma, ainda acesso os valores usando o nome da variável + "."(nome da chave)
console.log(p2.nomeCompleto + " " + p2.idade + " anos"); // como chamar a função criada dentro do objeto
console.log(p3.nomeCompleto);
// console.log(p3.nomeCompleto()); // chamando a função que está sem o get

