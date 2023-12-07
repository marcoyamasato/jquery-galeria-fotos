$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('header button'))
})


$('header button').click(function(){
    $('form').slideDown();
})

$('#botao_cancelar').click(function(){
    $('form').slideUp();
})

$('form').on('submit', function(e){
    e.preventDefault();
    
    const url_nova_img = $('#input_img_nova').val()

    var novo_item = $('<li style="display: none"></li>')

    $(`<img src= "${url_nova_img}" title='Ver imagem em tamanho real'/>`).appendTo(novo_item);

    $(`
    <div class="overflow-img">
        <a href="${url_nova_img}" target="_blank"> Ver imagem em tamanho real </a>
    </div>`).appendTo(novo_item);

    novo_item.appendTo('ul')

    novo_item.fadeIn()

    $('#input_img_nova').val('')

})


/*Faremos agora o mesmo código acima, porém em JS ao invés de JQuery

document.querySelector('header button').addEventListener('click', function(){
    alert('Expandir Formulário')
})


document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Ouvimos o submit')
})

*/


