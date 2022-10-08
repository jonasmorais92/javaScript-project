/* O operador ternário é usado em uma condição de apenas duas saídas de execussão, ou faz uma ou outra, EX:(SE É VERDADEIRO OU SE É FALSO) sem exessão. A baixo vamos substituir um if-else pela operação ternária */

var temFoto = false;

/*Se o usuário possui foto: perfil.jpg */
/*Se o usuário não tem foto: mock-perfil.jpg (mock é a foto padrão pra colocar quando o usuário não adiciona foto ao perfil) */

var pathFoto = '';
if (temFoto) {
    pathFoto = 'jonas-perfil.jpg';
}else {
    pathFoto = 'mack-perfil.jpg';
}

console.log(pathFoto);

/*#############[ TODO O CÓDIGO ACIMA PODE SER SUBSTITUÍDO PELO OPERADOR TERNÁRIO ABAIXO ]################# */

var temFoto = true;
var pathFoto = temFoto ? 'jonas-perfil.jpg' : 'mack-perfil.jpg';

console.log(pathFoto);