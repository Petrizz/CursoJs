
function calcular(){ 

var agora = new Date()
var idade = document.querySelector('input#ano')
var texto = document.querySelector('div#texto')
var img = document.querySelector('div#img')
var sexo = document.getElementsByName('sexo')


idade = agora.getFullYear() - Number(idade.value) 



if(sexo[0].checked){
    texto.innerHTML = `Você é <strong>masculino</strong> com <strong>${idade}</strong> anos`
    if(idade <= 10){
        img.innerHTML = '<img src="img/menino.png" alt="menino">'
    }else if(idade <= 21){
        img.innerHTML = '<img src="img/adolecenteM.png" alt="adolecenteMasculino">'
    }else if(idade <= 60){
        img.innerHTML = '<img src="img/homem.png" alt="adulto">'
    }else if(idade > 60){
       img.innerHTML ='<img src="img/velho.png" alt="velho">'
    }
    
}
if(sexo[1].checked){
    texto.innerHTML = `Você é <strong>feminina</strong> com <strong>${idade}</strong> anos`
    if(idade <= 10){
        img.innerHTML = '<img src="img/menina.png" alt="menina">'
    }else if(idade <= 21){
        img.innerHTML = '<img src="img/adolecenteF.png" alt="adolecenteFeminino">'
    }else if(idade <= 60){
        img.innerHTML = '<img src="img/mulher.png" alt="adulta">'
    }else if(idade > 60){
       img.innerHTML ='<img src="img/velha.png" alt="velha">'
    }
}
}

