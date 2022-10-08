var fox = { cor:'Prata', modelo:'Fox', fabricante:'VW'} //Criando um objeto

console.log('fox',fox);
console.log(typeof fox);

console.log('Cor do fox:',fox.cor); //Acessando uma propriedade do objeto

//ALTERANDO PROPRIEDADES DO OBJETO\\

fox.cor = 'Branco'; //Alterando a propriedade cor do fox
console.log('Alterado a cor do fox:',fox);

fox['modelo']= 'fox 1.8';   //Outra forma de acessar as propriedades de um objeto
console.log('Modelo do fox alterado para:',fox['modelo']);
console.log('Alterando o modelo do fox',fox);

//ADICIONANDO PROPRIEDADES AO OBJETO\\

fox.peso = 1100;    //Adicionando peso ao objeto fox
console.log(fox);

//ADICIONANDO UMA FUNÇÃO AO OBJETO\\

fox.ligar = function() {    //Adicionando função ligar ao fox
    console.log('Ligando o carro');
};

console.log(fox);
fox.ligar(); //Chamada a função ligar o fox

//CRIANDO OUTRO OBJETO DE OUTRA FORMA\\

var celta = {
    cor: 'Preto',
    modelo: 'Celta',
    fabricante: 'GM',
    ligar: function() {
        console.log('Ligando o carro');
    }
};
console.log('celta',celta);