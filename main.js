$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#tarefa').val();
        const novoItem = $('<li></li>');
        $(`<p>${enderecoDaNovaImagem}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })

    $('ul').on('click','li', function (){
        $(this).css('text-decoration', 'line-through');
    })
})