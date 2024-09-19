var valorTotal = [0, 0];
var valorProduto = [50.00, 30.00];
var qtd = [0, 0];

function adicionarItem(item){
    
    var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById("total" + item);
    qtd[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();

}

function removerItem(item){
    
    if(qtd[item] > 0){
        qtd[item] -= 1;
        var quantidade = document.getElementById("quantidade" + item);
        var total = document.getElementById("total" + item);
    
    
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
        quantidade.innerHTML = qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);
        valorCompra();
    }

}

function valorCompra(){ // forma de iteração feita por fora para estudo
    var valorTotalCompra = document.getElementById("valorTotalCompra");
    var valor = 0

    valorTotal.forEach(function(item){
        valor += item
    })

    valorTotalCompra.innerHTML = valor.toFixed(2);

    
}

// forma que foi feito na aula abaixo

// function subtotal(){
    //var valorTotalCompra = document.getElementById("valorTotalCompra");
    //var valor = 0

    //for(var i = 0; i < valorTotal.length; i++){
        //valor += valorTotal[i]
        
    //}

    //valorTotalCompra.innerHTML = valor.toFixed(2);


//}

function removerTudo(item){
    var remover = document.getElementById("removerTudo" + item);
    var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById("total" + item);

    valorTotal[item] = 0;
    qtd[item] = 0;

    total.innerHTML = valorTotal[item].toFixed(2);
    quantidade.innerHTML = qtd[item];
    valorCompra();    
}
