function carregar() {
    var msg = document.querySelector('div#msg');
    var img = document.querySelector('div#img');
    var agora = new Date()
    var hora = agora.getHours()

    msg.innerHTML = `<p>Agora são ${hora} horas</p>`

   if(hora >= 0 && hora <= 6) {

        msg.innerHTML += '<p> Boa Madrugada!!</p>'
        img.innerHTML = '<img src="img/boaMadrugada-240.png">'
        window.document.body.style.background = 'black'



    }else if( hora >= 6 && hora < 12){

        msg.innerHTML += '<p> Bom dia!!</p>'
        img.innerHTML = '<img src="img/bomDia-240.png">'
        window.document.body.style.background = 'blue'

    }else if(hora >= 12 && hora <= 18){

        msg.innerHTML += '<p> Boa tarde!!</p>'
        img.innerHTML = '<img src="img/boaTarde-240.png">'
        windom.document.body.style.background = 'red'

    }else if( hora > 18){

        msg.innerHTML += '<p> Boa noite!!</p>'
        img.innerHTML = '<img src="img/boaNoite-240.png">'
        window.document.body.style.background = 'grey'
    }
}