class ContaCliente{
    constructor(numeroConta, saldo, debito, credito){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    };

    CalcularSaldoAtual(){
        return this.saldo - this.debito + this.credito;
    };

    VerificarSaldo(){
        const saldoAtual = this.CalcularSaldoAtual()
        if (saldoAtual >= 0){
            alert("Saldo positivo em R$ " + saldoAtual)
        }else{
            alert("Saldo negativo em R$ 0" + saldoAtual)
        };
    };
};

let numeroConta = prompt("Digite o número da conta do cliente");
let saldo = parseFloat(prompt("Digite o saldo do cliente"));
let debito = parseFloat(prompt("Digite o debito do cliente"));
let credito = parseFloat(prompt("Digite o credito do cliente"));

let conta = new ContaCliente(numeroConta, saldo, debito, credito);
conta.VerificarSaldo();