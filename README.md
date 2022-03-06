# CursoJs anotações minhas ignorem se quiser
 Minhas anotações e exercicios feitos durante o curso de Js do curso em video
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
//////////////////////////////////////////////////////////////////////////////////////////// falar sobre isso tambem 
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
if(sexo[0].checked){ // falar sobre isso as escolhas radio
