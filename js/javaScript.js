const qt = 10;
    var tentativas = [];
    //Vamos iniciar o jogo
    var numeroAleatorio = Math.floor(Math.random() * 100 + 1);
        console.log(numeroAleatorio);
    var textArea = document.querySelector('.textArea');    
    var meuNumero = document.querySelector('.meuNumero');  
    var lastResult = document.querySelector('.lastResult');
    var dicas = document.querySelector('.dicas');
    var armazenaNum;
    var continuar = true;
    var resetButton;

    aperte = document.getElementById('aperte');
    aperte.onclick = meuJogo; //função meuJogo fim do codigo

    resetButton = document.getElementById('resetButton');
    resetButton.onclick = gameOver;

    function meuJogo() {
       
        if (continuar){

            armazenaNum = Number(meuNumero.value);
            tentativas.push(armazenaNum); 

            lastResult.textContent = "Suas tentativas: ";
            lastResult.textContent += tentativas.join(", ") + '.';
            console.log(armazenaNum);
            
            if (armazenaNum > numeroAleatorio) {
                dicas.textContent = "Seu palpite está ALTO, tente outro numero! ";
            } else if(armazenaNum < numeroAleatorio) {
                dicas.textContent = "Seu palpite está BAIXO, tente outro numero! ";
            } 
            
            if (armazenaNum == numeroAleatorio){ 
                dicas.textContent = "Parabens!!!Acertou, ganhou em " + tentativas.length +" tentativas. ";
                continuar = false;
            } else if (tentativas.length == qt) {
                dicas.textContent = "Fim do jogo, excedeu o numero de tentativas. O número que a máquina sorteou foi: "  + numeroAleatorio;
                continuar = false;
            }
            meuNumero.value ="";
        }
    }

    function gameOver() {
        continuar = true;
        lastResult.textContent = "";
        dicas.textContent = "";
        tentativas = [];
        meuNumero.value ="";
        numeroAleatorio = Math.floor(Math.random() * 100 + 1);
        console.log(numeroAleatorio);
        
    }
    
