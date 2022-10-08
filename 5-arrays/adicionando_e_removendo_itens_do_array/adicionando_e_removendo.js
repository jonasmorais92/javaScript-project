//ADICIONANDO ELEMENTOS USANDO O PRÓXIMO CAMPO DISPONÍVEL (PUSH)\\

var emails = [];

emails.push('jonas@1.com');     //Adicionando elemento na array
console.log('Quantos arrays existem em emails?',emails.length);

emails.push('Paulo@1.com');     //Adicionando elemento na array
console.log('Quantos arrays existem em emails?',emails.length);

emails[10] = 'rodrigo@1.com';   //Adicionando elemento no campo 10 da array
console.log('Quantos arrays existem em emails?',emails.length);

emails.push('marcos@1.com');    //Adicionando elemento na array
console.log('Quantos arrays existem em emails?',emails.length);

//emails.push vai adicionar elemento na próxima casa após maior casa numérica declarada em uma array. Ex: Se a maior array declarada foi a 100, ela vai adicionar na array 101. Mesmo que exista alguma array vazia antes do 100.

//ADICIONANDO ELEMENTOS USANDO O PRIMEIRO CAMPO DA ARRAY (UNSHIFIT)\\

emails.unshift('matheus@1.com');
console.log('Adicionando matheus no começo da array',emails);

//REMOVENDO ITENS DO ARRAY (POP)\\

console.log('Mostrando conteúdo da array emails antes de apagar',emails);

emails.pop();   //esse comando apaga o último ítem do array
console.log('Mostrando conteúdo da array emails depois de apagar',emails);

//REMOVENDO O PRIMEIRO ITEN DO ARRAY (SHIFT)\\

emails.shift();
console.log('Repare que foi removido matheus do primeiro campo',emails);

