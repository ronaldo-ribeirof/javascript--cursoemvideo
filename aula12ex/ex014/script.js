function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var opa = window.document.getElementById('opa')
    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        var hora = new Date(), displayDate;
        if (navigator.userAgent.toLowerCase().indexOf('edge') > -1) {
            displayDate = hora.toLocaleTimeString('pt-BR');
        } else {
            displayDate = hora.toLocaleTimeString('pt-BR', { timeZone: 'America/Recife'});
        }

        msg.innerHTML = displayDate;

        // hora = 2 //para testar as condicionais

        if (hora >= 0 && hora < 5) { //como resolver o problema de 00h?
            opa.innerText = 'Boa madrugada!'
            img.src = 'fotogada.png'
            document.body.style.background = '#bbb9ae'
            // 187 185 174 1
        } else if (hora >= 5 && hora < 12) {
            opa.innerText = 'Bom dia!'
            img.src = 'fotomanha.png'
            document.body.style.background = '#d6c491'
            // 214 196 145 1
        } else if (hora >= 12 && hora < 18) {
            opa.innerText = 'Boa tarde!'
            img.src = 'fototarde.png'
            document.body.style.background = '#875139'
            // 135 81 57 1
        } else {
            opa.innerText = 'Boa noite!'
            img.src = 'fotonoite.png'
            document.body.style.background = '#49606c'
            // 73 96 108 1
        }
    }
}

/* function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('div#foto')
    var myVar = setInterval(myTimer, 1000);
    function myTimer() {
        var hora = new Date(), displayDate;
        if (navigator.userAgent.toLowerCase().indexOf('edge') > -1) {
            displayDate = hora.toLocaleTimeString('pt-BR');
        } else {
            displayDate = hora.toLocaleTimeString('pt-BR', { timeZone: 'America/Recife' });
        }
        document.getElementById("msg").innerHTML = displayDate;

        if (hora >= 0 && hora < 12) {
            img.innerHTML = '<img src="fotomanha.png">'

        } else if (hora >= 12 && hora < 18) {
            img.innerHTML = '<img src="fototarde.png">'

        } else {
            img.innerHTML = '<img src="fotonoite.png">'
        }
    }
} */
