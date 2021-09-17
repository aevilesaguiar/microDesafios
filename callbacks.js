//callback é uma função que passa como parametro outra função
//e essa função é responsável por executar uma função recebida quando for necessário

//funções sem nome são chamadas de função anônimas


//Somar - função anonima
const somar = (n1,n2)=> n1+n2;

//Subtrair- função anonima
const subtrair= (n1,n2)=>n1-n2;

//função calculadora com  dois argumentos e também o callback operacao

const calculadora = (n1,n2,operacao) => operacao(n1,n2);

console.log(calculadora(10,20,subtrair));

//posso também criar uma função anonima dentro do argumento

console.log(calculadora(10,20,(n1,n2)=>n1-n2));



//quando passamos uma função como parametro não devemos incluir os () , passamos apenas o seu nome
