var x = 'algaworks'; /* O string em JavaScript pode ser colocada dentro de aspas simples('') ou aspas duplas("")*/
console.log(x);
console.log(typeof x); /* typeof mostra o tipo da variavel, nesse caso o tipo da variável x / O comando em terminal é somente typeof nomeVariavel  */
console.log(x.length); /* length mostra quantos caracteres existem naquela string / O comando em terminal é somente nomeVariavel.length */

var a = 'AlgaWorks';
var b = 'AlgaWorks';
console.log(a === b); /*Sinal de (=) para comparação pode ser usado 3x, e dessa forma é mais aconselhavel */
console.log(a == b);4

var m = 'Seja bem vindo a AlgaWorks';
console.log(m.indexOf('vindo')); /*nomeVariavel.indexOf('palavra') mostra em qual índice começa a palavra desejada*/
console.log(m.indexOf('a')); /*Quando coloca um caractere, ele contará o índice do primeiro*/
console.log(m.lastIndexOf('a')); /*Pra selecionar a ultima letra referenciada o comando é nomeVariavel.LastIndexOf */
console.log(m.indexOf('z')); /*Quando a letra não existe naquela string, ele coloca o valor de -1 no resultado, como no exemplo da letra z */

var s = 'A arte de programar';
console.log(s.substring(2,6)); /*nomeVariavel.substring retorna o valor dos parâmetros indicado, nesse caso pega o indice que começa no 2 e termina no ultimo índice que é o 5, que vem antes do 6, nesse caso aparecerá a palavra arte.*/
console.log(s.substring(2)); /*Quando colocado apenas um parâmetro, nesse caso o 2, mostrara na tela a string do índice 2 ate o final, nesse caso mostrará arte de programar*/
console.log(s.slice(-17,-13)); /*nomeVariavel.slice reproduz o mesmo que o nomeVariavel.substring, mas tem o diferencial de reproduzir de tras pra frente, nesse caso ele conta entre -17 e -13 que resulta na palavra arte */
console.log(s.substr(2,7)); /*nomeVariavel.substr usa o segundo parametro (7) para dizer quantos caracteres irão aparecer após o primeiro parâmetro (2) */

var n = 'Seja bem vindo <nome>';
console.log(n.replace('<nome>', 'Jonas')); /*nomeVariavel.replace permite substituir um pedaço de string por outra, trocamos <nome> por Jonas. */
console.log(n.toUpperCase()); /*nomeVariavel.toUpperCase deixa toda a string em letras maiúsculas */
console.log(n.toLowerCase()); /*nomeVariavel.toLowerCase deixa toda a string em letras minúsculas */

var n = 'Olá'+' '+'jonas'; /*Concatenando uma palavra com a outra usando o operador (+) */
console.log(n);

var n = 'Olá'.concat(' ', 'Jonas funç concat'); /*Adicionando uma variável com a função */
console.log(n);
console.log(n.charAt(4)); /*nomeVariavel.charAt mostra o caractére que ta pedindo no parâmetro (4), nesse caso é o caractére J */