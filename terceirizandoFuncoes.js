function andar(){
    return "ANDANDO";
}

function parar(){
    return " PARADO";
}

//função que recebe callback
function acaoCarro(resposta){
    return "O carro está: " + resposta();
};


console.log(acaoCarro(andar))


