            $("#texto_jackpot").hide();
            vetorImagens = ["img/ibagem1.jpg","img/ibagem2.jpg","img/ibagem3.jpg","img/ibagem4.jpg","img/ibagem5.jpg"];
            const botaoParar = document.formulario.parar;
            var x = 0; // Indice do vetor vetorImagens
            var y = 0; //Indice dos elementos document.images[y]
            var img1, img2, img3;
            var mostraDinheiro = document.getElementById("dinheiro");
            var limpaTexto = document.getElementById("texto_jackpot");
            dinheiro = 100;
            var win = new Audio("win.mp3");
            var win2 = new Audio("win2.mp3");
            var lose = new Audio("lose.mp3");
            var lose2 = new Audio("lose2.mp3");
            var ae = new Audio("ae.mp3");
            var primeiravez = true;
            var fundo = document.getElementById("fundo");
            var mult = 1;
            var background = document.getElementById("conteudo_jackpot");

            fundo.volume = 0.1;
            fundo.loop = true;
            fundo.autoplay = true;
            fundo.play();

   

            function slotMachine(){
                document.images[y].src = vetorImagens[x];
                x++;
                if(x == 5){
                    x = 0;
                }    
            }



            function checaVitoria(parametro1,parametro2,parametro3){
                if(parametro1 == parametro2){
                    if(parametro2 == parametro3){
                        if(parametro1 == "ibagem1"){
                            dinheiro += 50*mult;
                            mult = 2;
                            mostraDinheiro.textContent = dinheiro;
                            win2.play();
                            win.play();
                            $("#texto_jackpot").fadeIn(2000);
                            $(function(){
                                $('#texto_jackpot').typeChar({
                                    html: $('<span>Você venceu! B-Ô-N-U-S R-O-U-N-D!</span>'),
                                    completed: $.noop
                                });
                            });
                            if(dinheiro >= 500 && dinheiro < 1000){
                                $("#conteudo_jackpot").css("background-image","url(fundo_jackpot2.jpg)");
                                if(primeiravez){
                                    ae.play();
                                    primeiravez = false;
                                }
                            } else if(dinheiro < 500){
                                $("#conteudo_jackpot").css("background-image","url(fundo_jackpot.jpg)");
                            } else if(dinheiro >= 1000){
                                $("#conteudo_jackpot").css("background-image","url(fundo_jackpot3.jpg)");    
                            }
                        } else{
                            dinheiro += 40*mult;
                            mult = 1;
                            mostraDinheiro.textContent = dinheiro;
                            win2.play();
                            $("#texto_jackpot").fadeIn(2000);
                            $(function(){
                                $('#texto_jackpot').typeChar({
                                    html: $('<span>Você venceu!</span>'),
                                    completed: $.noop
                                });
                            });
                            if(dinheiro >= 500 && dinheiro < 1000){
                                $("#conteudo_jackpot").css("background-image","url(fundo_jackpot2.jpg)");
                                if(primeiravez){
                                    ae.play();
                                    primeiravez = false;
                                }
                            } else if(dinheiro < 500){
                                $("#conteudo_jackpot").css("background-image","url(fundo_jackpot.jpg)");
                            } else if(dinheiro >= 1000){
                                $("#conteudo_jackpot").css("background-image","url(fundo_jackpot3.jpg)");    
                            }
                        }
                        
                    } else{
                        lose.play();
                        mult = 1;
                        $("#texto_jackpot").fadeIn(2000);
                        $(function(){
                            $('#texto_jackpot').typeChar({
                                html: $('<span>Você perdeu...</span>'),
                                completed: $.noop
                            });
                        });
                        if(dinheiro >= 500 && dinheiro < 1000){
                            $("#conteudo_jackpot").css("background-image","url(fundo_jackpot2.jpg)");
                            if(primeiravez){
                                ae.play();
                                primeiravez = false;
                            }
                        } else if(dinheiro < 500){
                            $("#conteudo_jackpot").css("background-image","url(fundo_jackpot.jpg)");
                        } else if(dinheiro >= 1000){
                            $("#conteudo_jackpot").css("background-image","url(fundo_jackpot3.jpg)");    
                        }
                    }
                } else{
                    lose2.play();
                    mult = 1;
                    $("#texto_jackpot").fadeIn(2000);
                    $(function(){
                        $('#texto_jackpot').typeChar({
                            html: $('<span>Você perdeu...</span>'),
                            completed: $.noop
                        });
                    });
                    if(dinheiro >= 500 && dinheiro < 1000){
                        $("#conteudo_jackpot").css("background-image","url(fundo_jackpot2.jpg)");
                        if(primeiravez){
                            ae.play();
                            primeiravez = false;
                        }
                        
                    } else if(dinheiro < 500){
                        $("#conteudo_jackpot").css("background-image","url(fundo_jackpot.jpg)");
                    } else if(dinheiro >= 1000){
                        $("#conteudo_jackpot").css("background-image","url(fundo_jackpot3.jpg)");    
                    }
                }
            }
 

            var timer = setInterval(slotMachine,125);
    
          

            botaoParar.addEventListener("click",function() {
                clearInterval(timer);
                y++;
                timer = setInterval(slotMachine,125);
                if(y == 3){
                    img1 = document.images[0].src.substr(document.images[0].src.lastIndexOf("ibagem"),7);
                    img2 = document.images[1].src.substr(document.images[1].src.lastIndexOf("ibagem"),7);
                    img3 = document.images[2].src.substr(document.images[2].src.lastIndexOf("ibagem"),7);
                    checaVitoria(img1,img2,img3);
                }
                if(y == 4){

                    dinheiro -= 10;
                    mostraDinheiro.textContent = dinheiro;
                    y = 0;
                    $("#texto_jackpot").hide();
                    limpaTexto.textContent = "";
                    if(dinheiro <= 0){
                        window.location.href = "game_over.html";
                    }
                    if(dinheiro >= 1000){
                        window.location.href = "ending.html";
                    }
                
                }
            });





        