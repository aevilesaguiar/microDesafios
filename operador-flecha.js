//arrow functions vem para substituit functions()

let soma=(num1,num2)=> num1+num2;
console.log(soma(10,20));

let dobro=num =>num*2;
console.log(dobro(6));

let Par = numero =>{
    if(numero%2===0){
        return true;
    }
    return false;

}

console.log(Par(20));


const somar = () =>{
    console.log("Estou em uma arrow function");
}

somar();

//quando existe um nome , não é necessário colocar os ()

const informacao = dado=>console.log("recebi R$" + dado);

informacao(50000);


//na arrow function se houver dois parametros é necessário o uso de parenteses

const subtracao = (numeroA, numeroB)=>console.log(numeroA-numeroB);
subtracao(50,20);

//se você tiver apenas uma linha não é necessário usar chaves, caso contrário é necessário

const multiplicacao =(numA ,numB)=>{
      console.log(numA*numB);
      return numA*numB;
}

console.log(multiplicacao(10,9));

//arrow functions função tradicional, só que de forma abreviada e limpa

function dadoSoma(a,b,c){

    return a+b+c(a);
}

function texto(p1){
    return ' esse é o numero '+ p1;
}

console.log(dadoSoma(5, 3, texto));
