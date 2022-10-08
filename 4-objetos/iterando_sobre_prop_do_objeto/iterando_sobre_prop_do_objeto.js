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

for (var prop in joao) {        //modelo de código para mostrar as propriedades dentro de um objeto, nesse caso foi criado uma variável com o nome 'prop' para representar as propriedades dentro de 'joao'. o comando 'in' define que será mostrado as propriedades dentro de 'joao'
    console.log(prop,'-->',joao[prop]); //modelo para mostrar tanto as propriedades quanto os valores delas
}