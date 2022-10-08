var notaMinima = Math.min(11,22,33);            /*Match.min mostra a menor nota dentro dos paramêtros */
console.log('A menor nota foi: ',notaMinima);

var notaMaxima = Math.max(11,22,33);            /*Match.max mostra a maior nota dentro dos paramêtros */
console.log('A maior nota foi: ',notaMaxima);

var temperatura = Math.round(22.4);             /*Match.round mostra o numero arredondado. Do 1 ao 4 arredonda pra baixo e do 5 ao 9 arredonda pra cima */
console.log('A temperatura é',temperatura,'º C');

var numeroAleatorio = Math.random();            /*Math.random retorna um número entre 0 e 1 aleatoriamente */
console.log('Número aleatório é:',numeroAleatorio);
var numero = numeroAleatorio * 60;              /*Simulação de um sorteio de 60 numeros, o numero sorteado no aleatório é multiplicado por 60, resultando em um número entre 0 e 60 */
console.log("Numero:",numero);
var sorteio = Math.floor(numero);               /*Math.floor arredonda sempre o valor para baixo, Ex: 4.9 será 4 */
console.log("O número sorteado foi o:",sorteio);
