//setTimeout()
//Execute um bloco de código especificado uma vez depois de decorrido um tempo especificado.
//1000 milissegundos é igual a 1 segundo
//A quantidade de tempo especificada (ou o atraso) não é o tempo garantido para a execução, mas sim o tempo mínimo para a execução. Os retornos de chamada que você passa para essas funções não podem ser executados até que a pilha no thread principal esteja vazia.
//Como consequência, o código como setTimeout(fn, 0)será executado assim que a pilha estiver vazia, não imediatamente. Se você executar o código como,  setTimeout(fn, 0)mas imediatamente após executar um loop que conta de 1 a 10 bilhões, seu retorno de chamada será executado após alguns segundos.

setTimeout(function(){
    console.log('Olá, Mundo!');
},1000);

let myGreeting = setTimeout(() => {
   console.log('Hello, Mr. Universe!');
  }, 2000);