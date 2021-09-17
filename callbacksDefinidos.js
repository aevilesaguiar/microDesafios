function nomeCompleto(nome,sobrenome){
    return nome + ' '+ sobrenome;
}

console.log(nomeCompleto('Amanda', 'Ferreira'));

function bomDia(nome, sobrenome, callback){
    return 'Olá, '+ callback(nome,sobrenome);
};

//callback será a função que iremos executar internamente

console.log(bomDia('Amanda', 'Ferreira',nomeCompleto));


//outra function

function iniciais(nome, sobrenome){
    return nome[0]+sobrenome[0];
};
console.log(iniciais("M","A"));

function bomDia(nome,sobrenome, callback){
    return 'olá' + callback(nome,sobrenome);
};


console.log(bomDia('Amanda', 'Ferreira',iniciais));