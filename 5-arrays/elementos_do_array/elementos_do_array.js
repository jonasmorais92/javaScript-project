var acessorio = {som:'Pioneer',banco:'Couro'};  //Criando objeto acessorio

var ligar = function(a) {   //Criando função ligar, com o parâmetro 'a' para ser adicionado algo futuramente
    console.log('Ligar o carro!',a);    //Função a ser executada, chamando o parâmetro 'a' dessa mesma função
}

var fox = ['fox', 4, acessorio, ligar]; //Criando array fox e adicionando os elementos de vários tipos, inclusive o objeto acessórios e a fução ligar

console.log(fox);   //Printando o conteúdo do array fox
console.log(fox[2].som);    //Printando modelo do som no campo 2 do array fox
fox[3]('agora!');   //Executando a função ligar no campo 3 do array fox

//OS CAMPOS DOS ARRAYS PODEM RECEBER QUALQUER TIPO DE DADO, DESDE NUMÉRICOS ATE FUNÇÕES ENTRE OUTRAS\\