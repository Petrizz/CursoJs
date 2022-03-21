
function calcular() {

    var inicio = document.querySelector('input#inicio')
    var final = document.querySelector('input#final')
    var passo = document.querySelector('input#passo')
    var texto = document.querySelector('div#texto')

    // É importante nesse inicio que não temos validações criar nossas proprias 
    if (inicio.value.length == 0 && final.value.length == 0 && passo.value.length == 0) {
        alert('[ERRO] Preencha todos os campos')

    } else {

        inicio = Number(inicio.value)
        final = Number(final.value)
        passo = Number(passo.value)
        
        if (inicio > final) {

            alert('[ERRO] Inicio tem que ser maior que final')

        } else if (final >= 0) {

            texto.innerHTML = 'Contando:\n'

            if (passo <= 0) {
                alert('[ALERT] Passo menor ou igual a 0 iremos considerar como 1')
                passo = 1
            }
            //contagem crescente
            for (i = inicio; i <= final; i += passo) {
                texto.innerHTML += `👉${i} `
            }

        } else {
            //contagem decrescente
            texto.innerHTML = 'Contando:'
            for (i = inicio; i >= final; i -= passo) {
                texto.innerHTML += `👉${i} `
            }
        }
        texto.innerHTML += `👉❌`
    }
}


