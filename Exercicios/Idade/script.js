
function calcular(){ 

var agora = new Date()
var idade = document.querySelector('input#ano')
var texto = document.querySelector('div#texto')
var imagem = document.querySelector('div#img')
var sexo = document.getElementsByName('sexo')

// É importante nesse inicio que não temos validações criar nossas proprias 
if(idade.value.lenght == 0 || idade.value > agora.getFullYear()){
    alert('[ERRO] Valor de nascimento invalido! Escreva um valor valido.')

}else{


idade = agora.getFullYear() - Number(idade.value) 

//podemos acessar css atravez do DOM utilizando .style.AlgumacaracteristicaCSS
//podmeos também criar tag de formas dinamicas usando o js
var img = document.createElement('img')//criou uma tag img
// a tag normalmente é composta de varios valores como o src alt 
//'<img src="img/menino.png" alt="menino">'
//foi criado uma tag sem nem um desses valores entao podemos setar eles usando
img.setAttribute('src', 'img/menina.png', 'alt', 'menino')
//se reescrevermos um setAttribute nos tambem reescrevemos os valores
//podemos também setar um id
img.setAttribute('id', 'foto')

//checked seguinifica verificado
if(sexo[0].checked){
    texto.innerHTML = `Você é <strong>masculino</strong> com <strong>${idade}</strong> anos`
    if(idade <= 10){
        img.setAttribute('src', 'img/menino.png', 'alt', 'menino')
        
    }else if(idade <= 21){
        img.setAttribute('src', 'img/menino.png', 'alt', 'menino')
        img.innerHTML = '<img src="img/adolecenteM.png" alt="adolecenteMasculino">'
    }else if(idade <= 60){
        img.setAttribute('src', 'img/menino.png', 'alt', 'menino')
        img.innerHTML = '<img src="img/homem.png" alt="adulto">'
    }else if(idade > 60){
        img.setAttribute('src', 'img/menino.png', 'alt', 'menino')
       img.innerHTML ='<img src="img/velho.png" alt="velho">'
    }
    imagem.appendChild(img)
    
}
if(sexo[1].checked){
    texto.innerHTML = `Você é <strong>feminina</strong> com <strong>${idade}</strong> anos`
    if(idade <= 10){
        img.setAttribute('src', 'img/menina.png', 'alt', 'menina')
       
    }else if(idade <= 21){
        img.setAttribute('src', 'img/adolecenteF.png', 'alt', 'adolecenteFeminino')
        
    }else if(idade <= 60){
        img.setAttribute('src', 'img/mulher.png', 'alt', 'adulta')
     
    }else if(idade > 60){
        img.setAttribute('src', 'img/velha.png', 'alt', 'velha')
    }
    imagem.appendChild(img)

}
}

}

