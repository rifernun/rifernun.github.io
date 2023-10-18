var numberToFind = 0;
    var attempts = 0;

    function refresh(){
        var element = document.getElementById('bet');
        element.value = '';
        
        numberToFind = parseInt(Math.random() * 31);//número para achar
        vattempts = 0;

        console.log('The number to find: '+numberToFind);
    }

    refresh();

    function verifyNumber(){
        var element = document.getElementById('bet');
        var bet = element.value;

        if(bet > 31 || bet < 0)
        {
            alert('🚨 Aposta é inválida');
            return;
        }
        if(parseInt(bet).toString()=='NaN')
        {
            alert('🚨 Digite um número, não deixe sem nada :(');
            return
        }

        if(bet > numberToFind)
        {
            attempts++;
            alert('🚨 O número para ser encontrado é MENOR');
        }
        else if(bet < numberToFind)
        {
            attempts++;
            alert('🚨 O número para ser encontrado é MAIOR')
        }
        else
        {
            alert('✅ Parabéns você acertou!! Com '+attempts+' erros!');
            refresh();
        }
    }