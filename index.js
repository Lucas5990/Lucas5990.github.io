
$("#texto_info").hide();
$("#botao_jogar").click(function(){
    window.location.href = "intro.html";
});
$("#botao_info").click(function(){
    $("#texto_info").fadeIn(1000);
});
$("#texto_info").click(function(){
    $("#texto_info").hide();
});