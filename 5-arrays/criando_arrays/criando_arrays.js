var emails = [];        //criando uma array
console.log(typeof emails); //seu tipo será objeto

emails[0] = 'joão@1.com';   //declarando um elemento na posição 0 do array emails
emails[1] = 'maria@1.com';  //declarando um elemento na posição 1 do array emails

console.log('Acessando o email',emails[0]); //apresenta a posição 0 do array emails
console.log('Acessando o email',emails[1]); //apresenta a posição 1 do array emails
console.log('Campo do array não declarado',emails[2]); //apresenta undifined, pois nada foi declarado na posição 2 do array emails

//CRIANDO ARRAY JÁ COM OS ELEMENTOS\\

var nomes = ['João','Maria']; //Criando array com elementos adicionados
console.log('Quantos nomes tem nesse array nomes?',nomes.length);//nomes.length mostra o último campo preenchido daquela array, mesmo que tenha campos sem preenchimento, esse comando retornará o tamnho usado considerando o último campo.

//ALGUMAS DICAS\\

var testeArray = [];    //Criando array sem elementos
testeArray[6] = 'teste'; //Adicionando apenas um elemento, no campo 6 da array

console.log('Quantos arrays existem nessa variavel testeArray?',testeArray.length); //Mesmo existindo apenas um elemento na array, ela vai ler que essa array tem 7 campos. são eles: 0,1,2,3,4,5,6.
