var nomes = ['João','Pedro','Maria','José'];    //Criado a array nomes com alguns elementos

for (var i = 0; i < nomes.length; i++) {        //É possivel ler os elementos com o comando for, nesse exemplo de modelo
    console.log('Nome [',i,'] =',nomes[i]);
}

//MODELO MAIS PRÁTICO DE PERCORRER OS ELEMENTOS DE UMA ARRAY\\

nomes.forEach(function(e) { //forEach é uma função, que recebe em seu escopo outra função, que respectivamente tem em seu escopo o elemento 'e'
    console.log(e); //imprimir função 'e' na tela, aparecerá
});