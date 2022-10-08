var nome = 'jonas'; /*variável global */

var funcaoTeste = function() {
    nome = 'jonas'.toUpperCase(); /*Variável local da função, sempre declarar a palavra var antes do nome, dessa forma sera entendido que essa variável é uma local da função*/
}

funcaoTeste(); /*Chamando a função, caso não chame não irá obter a informação de dentro dessa função. */
console.log('nome',nome);   /*Esta sendo executado a função de fora (global) */

/*Uma boa pratica é sempre declarar a variável dentro da própria função, evita problemas */