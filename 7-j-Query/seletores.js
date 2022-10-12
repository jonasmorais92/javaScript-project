$(function() {
    var selecaoTodosUsuarios = $('#selecao-todos-usuarios'); //direcionando o elemento HTML com o id #seleção-todos-usarios para se tornar um objeto do j.query, nesse caso é preciso usar a o caractere $ para se tornar j.query
    var selecaoUsuarios = $('.js-selecao-usuarios'); //direcionando o elemento HTML com a classe .js-selecaoUsuarios (existem 3 usuarios com essa classe, os 3 foram selecionados aqui) para se tornar um objeto do j.query $

    selecaoUsuarios.on('click',function() { //definindo o que deve acontecer com o clique no checkbox desses elementos, ira preencher o checkbox de cada um deles
        var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;  //criando variáveis pra controle dentro da função, nesse caso estamos colocando o total de usuarios com o mesmo valor de usuarios selecionados no checkbox, a intenção é que quando tiver o mesmo valor, ative o checkbox de (selecionar todos os usuários), dessa forma preenche todos os checkbox
        var checked = selecaoUsuarios.length === totalUsuariosSelecionados; //selecaoUsuarios.length retorna quantos checkbox foram marcados, ele compara se tem o mesmo valor de totalUsuariosSelecionados, obtendo um resultado true ou false

        selecaoTodosUsuarios.prop('checked',checked);   //se for true, marcará o checkbox Selecionar todos os usuários, se for false permanecerá desmarcado.
    });

    selecaoTodosUsuarios.on('click',function() {    //definindo o que deve acontecer com o click no checkbox de selecionar todos usuários
        selecaoUsuarios.prop('checked',selecaoTodosUsuarios.prop('checked'));   //ele ira comparar se ele foi clicado ou não, caso for clicado retornara true, e ativara a checkbox de todos os usuários, caso seja false ele desmarcará todos.
    });
});