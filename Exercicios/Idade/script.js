
function calcular(){ 

var agora = new Date()
var idade = document.querySelector('input#ano')
var texto = document.querySelector('div#texto')
var sexo = document.getElementsByName('sexo')

idade = agora.getFullYear() - Number(idade.value) 



if(sexo[0].checked){
    texto.innerHTML = `Você é um <strong>homem</strong> com <strong>${idade}</strong> anos`
    if(idade <= 10){
        alert('criança')
    }else if(idade <= 21){
        alert('adolecente')
    }else if(idade <= 60){
        alert('adulto')
    }else if(idade > 60){
       alert('idoso')
    }
    
}
if(sexo[1].checked){
    texto.innerHTML = `Você é uma <strong>mulher</strong> com <strong>${idade}</strong> anos`
    if(idade <= 10){
        alert('criança')
    }else if(idade <= 21){
        alert('adolecente')
    }else if(idade <= 60){
        alert('adulto')
    }else if(idade > 60){
       alert('idoso')
    }
}
}

