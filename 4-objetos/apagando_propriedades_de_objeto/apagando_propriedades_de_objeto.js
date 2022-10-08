var joao = {
    nome: 'joão',
    idade: 25,
    endereco: {                     //endereço é um objeto dentro do objeto 'joão'
        logadouro: 'Av Brasil',
        numero: 100,
        complemento:'Apto 202',
        cidade:'Rio de Janeiro',
        estado:'Rj'}
}

console.log(joao);

delete joao.idade;      //apagando propriedade 'idade' dentro do objeto 'joao'
console.log(joao);

delete joao['endereco'].estado; //apagando propriedade 'estado' dentro do objeto 'endereco' dentro do objeto 'joao', os objetos podem ser acessads por strings ['string1] ou por pontos (.)
console.log(joao);