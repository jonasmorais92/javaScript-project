var n = 10;
console.log(n);
console.log('O tipo dessa variável é: ',typeof n); /*valor numérico inteiro 10 */

n = n / 'teste';
console.log(n);
console.log('O tipo dessa variável é: ',typeof n); /*valor numérico NaN (Not a number)*/

var n = 5;
n = n/0;
console.log(n);
console.log('O tipo dessa variável é: ',typeof n);  /*valor numérico + infinyt */

var n = -5;
n = n/0;
console.log(n);
console.log('O tipo dessa variável é: ',typeof n); /*valor numérico -infinyt */

/* ################################/    OBSERVAÇÃO     \############################## */

var x = 0.3 - 0.2;
console.log(x);         /*ATENÇÃO ## repare a baixo como fazer esse calculo de maneira exata*/
console.log('O tipo dessa variável é: ',typeof n);

var x = (0.3*10 - 0.2*10)/10; /*Dessa maneira o resultado sai o mais esperado */
console.log(x); 
console.log('O tipo dessa variável é: ',typeof n);