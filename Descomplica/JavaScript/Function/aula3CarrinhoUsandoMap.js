const shoppingCart = [];

function addItemToCart (item){
    shoppingCart.push(item);
};

function removeItemFromCart (item){
    var index = shoppingCart.indexOf(item);
    if (index !== -1){
        shoppingCart.splice(index,1)
    };
};


function viewCart(){
    if(shoppingCart.length == 0){
        console.log("Your shopping Cart is empty !")
    }else{
        console.log("Itens in your shopping cart: ")
        var seeItens = shoppingCart.map(function(product, i){ // na aula o professor fez com o "for", mas eu quis fazer com o "map" para me testar e para estudar essa formade interação
            return console.log(`${i + 1} - `+ product);
        })
        };
    };

  

function clearCart(){
    shoppingCart.length = 0;
    console.log("Your shopping cart has been cleared")
};

addItemToCart("blusa");
addItemToCart("calça");
addItemToCart("tênis");
addItemToCart("cueca");

viewCart()

removeItemFromCart("cueca");

viewCart();

clearCart();

viewCart();


