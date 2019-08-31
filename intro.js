var i = 0;
var ah = new Audio("ah.mp3");
$('#texto_intro').hide();
$('#texto_intro').fadeIn(2000);
const falas = ["<span>Precisamos que você consiga 1000$$$.</span>",
                "<span>Tome esse dinheiro, é tudo que nos sobrou.</span> ",
            "<span>Boa sorte!</span>"]

function comeca(){
    if(i > 2){
        ah.play();
        setTimeout(function(){window.location.href = "slotmachine.html";},4000);
    }
}
$(function(){
    $('#texto_intro').typeChar({
        html: $('<span>Obrigado por vir jogador, não sei o que fariamos sem você.</span>'),
        completed: $.noop
    });
});

$('#conteudo_intro').click(function(){
 
    document.getElementById("texto_intro").innerHTML = "";
    $(function(){
        $('#texto_intro').typeChar({
            html: $(falas[i]),
            completed: $.noop
        });
        i = i+1;
        if(i > 2){
            $('#texto_intro').fadeOut(4000);
            $("#botao_intro").css("opacity","1");
        }
    });
    
});
