var joao = {
    nome: 'joão',
    idade: 25,
    endereco: {                     //endereço é um objeto dentro do objeto joão
        logadouro: 'Av Brasil',
        numero: 100,
        complemento:'Apto 202',
        cidade:'Rio de Janeiro',
        estado:'Rj'}
}

console.log(joao);

console.log('Cidade que o João mora:',joao.endereco.cidade);    //os elementos são separado por pontos (.) para acessar os objetos, ex: joao.endereco.cidade mostrara o conteúdo contido em cidade, que nesse caso é Rio de Janeiro.
console.log('idade do João :',joao.idade);

joao.endereco.numero = 101;     //alterando o numero do endereço de joão.
console.log(joao);

console.log('O estado do João é:',joao['endereco']['estado']); //acessando por string, dará o mesmo resultado que acessar com pontos (.)