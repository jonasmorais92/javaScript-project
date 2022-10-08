for (var j=0; j<5;j++) {  /*for padrão */
    console.log('j',j);
}

var z = 0;
for (;z<5;z++) { /*for sem atribuir valor no primeiro parâmetro */
    console.log('z',z);
}

var i = 0;
for (;i<5;) { /*for sem atribuir valor no primeiro e segundo parâmetro, porém deve incrementar valor ++ na variável de contagem (i++) dentro da execussão da condição   */
    console.log('i',i);
    i++; /*incremento fora do for, será executado dentro da condição */
}

/*######################[ LOOP INFINITO]########################## */

var l = 0;
for (;;) {
    console.log(l++);/*Observe que o l tem incremento dentro da função console.log */
    
    if (l===101) { /*if criado para encerrar no loop assim que a contagem chegar em 100 */
        break;
    }
}
