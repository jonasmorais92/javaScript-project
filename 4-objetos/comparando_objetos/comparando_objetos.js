var joao = {
    nome: 'João',
    idade: 25,
    email: 'teste@email.com',       
    igualA: function(obj) {             //a propriedade igualA recebe uma função que compara os emails
        return this.email===obj.email;  //ela retorna a comparação do email do João (this.email) com o email da Maria (obj.email)
    }
}

var maria = {
    nome: 'Maria',
    idade: 27,
    email: 'teste@email.com'
}

console.log('João e Maria tem o mesmo e-mail?',joao.igualA(maria));     //aqui esta pedindo pra mostrar a propriedade igualA, que esta dentro de joao, dessa forma sera chamado joao.igualA. como a função deve receber um obj, para comparação, vai ficar da seguinte forma: joao.igualA(maria). assim vão ser comparados o e mail de joao com o e mail de maria.