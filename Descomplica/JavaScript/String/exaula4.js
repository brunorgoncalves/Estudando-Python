var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";

const parametros = url.split("?")[1];
console.log(parametros)

const valores = parametros.split("&");
console.log(valores);

for (let i = 0; i < valores.length; i++){
    if (valores[i].includes("atores"))
        valores[i] = "atores= " +  valores[i].substring(valores[i].indexOf("Lucas"),).toLocaleUpperCase();
           
};

console.log(valores);