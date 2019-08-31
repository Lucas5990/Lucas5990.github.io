//Abertura do jogo



//Com intervalo de 1 segundo, a função deveria ser executada, não funcionou

/*
var telaJogo = document.getElementById("conteudo");
function loadGame(){
    telaJogo.style.opacity = telaJogo.style.opacity + 0.1;
    if(telaJogo.style.opacity === 1){
        clearInterval();
    }
}

window.setInterval("loadGame()",1000);


*/

$('#texto').hide();
//$('#fala').hide();
$('#texto').fadeIn(2000);


$('#conteudo').click(function(){
//Plugin do jQuery - typeChar() Digita letras uma a uma
$(function(){
    $('#texto').typeChar({
        html: $('<span>Bem vindo ao Cassinão, eu sou Gilbert Muds, sou o dono desse lugar.</span>'),
        completed: $.noop
    });
});
});

