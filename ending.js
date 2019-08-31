$('#texto_ending').hide();
$('#texto_ending').fadeIn(2000);
var fundo = document.getElementById("fundo");
fundo.loop = true;
fundo.autoplay = true;
fundo.play();
var i = 0;
var falas = [
    "<span>Ainda não acredito que você conseguiu!</span>",
    "<span>Agora finalmente posso gravar um novo hit de sucesso.</span>",
    "<span>Ahhhhhhhhhhhhhh eu vou gravar.</span>",
    "<span>Muito obrigado jogador, graças a você o Kasinão está de volta!</span>",
    ""
]

$('#conteudo_ending').click(function(){
 
    document.getElementById("texto_ending").innerHTML = "";
    $(function(){
        $('#texto_ending').typeChar({
            html: $(falas[i]),
            completed: $.noop
        });
        i = i+1;
        if(i == 3){
            //$('#texto_ending').fadeOut(4000);
            $("#conteudo_ending").css("background-image","url('end_game2.jpg')");
        }
        if(i == 4){
            //$('#texto_ending').fadeOut(4000);
            $("#conteudo_ending").css("background-image","url('end_game3.jpg')");
        
            setInterval(function(){$('#texto_ending').hide();
            $("#conteudo_ending").css("background-image","url('game_over2.jpg')");},7000);
        }
     

    });
});