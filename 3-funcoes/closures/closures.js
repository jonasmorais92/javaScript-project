function incrementar() {  /*criando a função incrementar */
  var valor=0;					/*atribuindo valor na variável local "valor" */
  return function() { 	/*sera retornado outra função, método usado para isolar a variável "valor" acima, fazendo com que ela guarde o valor do incremento++ */
		return ++valor;			/*adicionando o incremento em "valor" */
    }
}

var fn = incrementar();	/*criando uma variável pra ser usada para demonstrar no console.log */
console.log(fn());	/*Sempre que desejar ver o retorno de uma função, deve usar os parenteses apos o nome da função */
console.log(fn());
console.log(fn());