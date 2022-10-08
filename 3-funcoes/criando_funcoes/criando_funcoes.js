/*Function declaration (método de criar função */
function somar(a,b) {       /*Esse é um método de criar funções, function nomeFunçao(Parametros). Esse método é respeitado pelo hoisting, a função pode ser declarada em qualquer parte do código */
console.log('Arguments -->',arguments); /*arguments é um valor usado pra mostrar quantos valores foram colocados dentro dos parâmetros da função, além de mostrar também os valores que foram colocados respectivamente em seu lugar, nesse caso foram o 2 e 6 */
    return a+b;
}
var adicao = somar(2,6);
console.log('A soma dos dois valores são:',adicao);



/*function expression (método de criar função)*/
var subtracao = function(a,b) {     /*Esse é um outro método de criar funções var nomeFuncao = function(parametros) */
    return a - b;
}
var subtrair = subtracao(2,1);
console.log('A subtração resulta em:',subtrair);