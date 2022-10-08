var ativo = true; /*true e false serão sempre boolean, nesse caso a variavel ativo tem o type boolean */
console.log(typeof ativo);

if (0) {
    console.log("0 é verdadeiro"); /*Usando o if e else podemos usar o 0 como valor falso */
    }else {
        console.log("0 é falso");
    }

    if (1) {
        console.log("1 é verdadeiro"); /*Qualquer valor diferente de 0 é considerado verdadeiro */
        }else {
            console.log("1 é falso");
        }

console.log(!0,'!0'); /*Usa - se o sinal de (!) para negar um valor, se for verdadeiro será falso e vice versa */
console.log(!!0,'!!0');/*Usando dois sinais de (!) nega a negação, ou seja, elimina a negação anterior, mostrando o valor real daquele elemento, nesse caso o 0 e falso. */
console.log(!!null,'!!null'); /*false */
console.log(!!false,'!!false'); /*false */
console.log(!!NaN,'!!NaN'); /*false */
console.log(!!undefined,'!!undefined'); /*false */
console.log(!!'',"!!''"); /*false */

var nome = ''; /*Nesse exemplo a variável nome recebeu um valor vazio ('') */
if (!nome) {    /*O simbolo de negação antes da variável nome significa "se não tem nome" tornando a condição verdadeira executando o if */
    console.log('Insira o nome');
}else {
    console.log('Obrigado');
}

console.log(!nome, 'condição do !nome'); /*testando o valor de nome */

var nome = 'Jonas'; /*Nesse exemplo a variável nome recebeu um valor Jonas */
if (!nome) {    /*O simbolo de negação antes da variável nome significa "se não tem nome" tornando a condição falsa executando o else */
    console.log('Insira o nome');
}else {
    console.log('Obrigado');
}

console.log(!nome, 'condição do !nome'); /*testando o valor de nome */