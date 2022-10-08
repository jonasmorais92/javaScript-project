var pessoa = 'fisica';
if (pessoa === 'fisica') {
    console.log('Emitir formulário para pessoa física'); /*APARECERA ESTE */
}else if (pessoa === 'juridica') { /*Usar 'else if' quando tiver uma outra opção expecífica, nesse caso so tem a jurídica */
    console.log('Emitir formulário para pessoa jurdica');
} else {
    console.log('Tipo de pessoa inválido');
}

var pessoa = 'juridica';
if (pessoa === 'fisica') {
    console.log('Emitir formulário para pessoa física');
}else if (pessoa === 'juridica') { /*Usar 'else if' quando tiver uma outra opção expecífica, nesse caso so tem a jurídica */
    console.log('Emitir formulário para pessoa jurdica'); /*APARECERA ESTE */
} else {
    console.log('Tipo de pessoa inválido');
}

var pessoa = 'nenhum';
if (pessoa === 'fisica') {
    console.log('Emitir formulário para pessoa física');
}else if (pessoa === 'juridica') { /*Usar 'else if' quando tiver uma outra opção expecífica, nesse caso so tem a jurídica */
    console.log('Emitir formulário para pessoa jurdica');
} else {
    console.log('Tipo de pessoa inválido'); /*APARECERA ESTE */
}

/*###################################( Outro conteúdo de if_else )###################################### */

var valor = 0;
if (valor === 0) {   /*ou (!valor) */
    console.log('O valor deve ser maior que zero');
}

var idade = 10;
if (idade) { /*Qualquer valor que tiver a variavél idade, que for diferente de 0, vai executar esse if */
    console.log('Daqui a 5 anos você terá ',idade + 5, ' anos');
}