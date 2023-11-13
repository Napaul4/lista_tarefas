$(document).ready(function() {

    $('form').submit(function(e) {
        e.preventDefault();
        
        var novaTarefa = $('#nova-tarefa').val();
        if (novaTarefa.trim() !== '') {
            $('#tarefa-lista').append('<li>' + novaTarefa + '</li>');
            $('#nova-tarefa').val('');
        }
    })

    $('#tarefa-lista').on('click','li', function() {
        $(this).toggleClass('completed');
    })
})