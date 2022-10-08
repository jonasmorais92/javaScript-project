console.log('Iniciando...');

var valorElement = document.getElementById('valor'); //pegando o input do campo valor pelo ID
var totalElement = document.getElementById('total');    //pegando input do campo valor total pelo ID

valorElement.addEventListener('keyup', function(e){ //função com a opção keyup serve para adicionar um conteúdo que foi digitado em um campo, ser transferido automático pra um outro, nesse exemplo o que for digitado no campo valor, será digitado também no campo valor total
    var total = 0;      //atribuindo valor 0 para variável total
    var valor = parseFloat(valorElement.value ? valorElement.value : 0); //valor esta recebendo o valor de valorElement,value. parseFloat transforma o valor que foi recebido em um valor numérico. Nesse caso o tipo passou de string para number
    //acima foi usado o operador ternário, se a condição parseFloat(valorElement.value) for verdadeiro (?), valor = valorElement.valor, caso seja falso (:) valor = 0; isso será mostrado em total na tela. quando o campo de valor estiver vazio, não mostrará mais NaN, com essa operação ou mostra o numero digitado ou o valor 0.

    if (valor > 0 && valor < 10) {
        total = valor + valor * 0.3 + 5;    //caso o numero digitado seja maior que 0 e menor que 10, sera feito um cálculo diferente (juros), para o valor de total
    }else if (valor >=10 && valor < 50) {   //se valor for igual ou maior que 10 e valor menor que 50, diminuir os juros
        total = valor + valor * 0.1 + 2;
    }else {     //se o valor for maior ou igual a 50, não cobrará juros
        total = valor;
    }
    
    totalElement.innerHTML = total;     //essa tag mostrará na tela o valor total que será resolvido no final
});