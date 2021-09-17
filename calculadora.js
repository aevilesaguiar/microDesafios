const calculadora = (n1,n2,operacao) => operacao(n1,n2);

console.log(calculadora(10,20,subtrair));



function somar(a,b){
    return a+b;
}


function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    return a/b;
}

function subtrair(a,b){
    return a-b;
}