class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    
    }

    ligar(){
        if(this.ligado){
            console.log("Já está ligado")
            return;
        }else{this.ligado = true;
        }
    }
}

class SmartPhone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;

    }
}

var s1 = new SmartPhone("Iphone", "Verde", "13 Pro Max");
console.log(s1);
s1.ligar();
console.log(s1);
s1.ligar();