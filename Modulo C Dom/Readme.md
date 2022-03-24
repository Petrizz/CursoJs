# O que é o DOM(Document Object Model)

## Criando uns conceitos

---

   _Basicamente é uma superclasse master do site, atravez dele podemos acessar varias outras areas do site_
   - location: referente a url do site a pagina atualizada
   - document: documento autual
   - history guarad: de onde eu veio para onde eu vou 
   
   ![1](https://user-images.githubusercontent.com/99295752/156671636-610dab5d-8cd7-4c00-a3a5-7e4ce430d501.png) 


   

   podemos acessalos:
    
   - por marca
        - window.document.getElementsByTagName('Nome')['1']
             
           var p1 = window.document.getElementsByTagName('nome da Tag')['ordem em que ela parece'] 
        
   - por ID
       -  window.document.getElementById('valor do Id')
   - por Nome 
       - window.document.getElementsByName()
   - por Classe
       - window.document.getElementsByClassName()
   - por Seletor
       - window.document.querySelector()
       - window.document.querySelectorAll()

        querySelector('div#NOMEDOID')
        querySelector('div.NOMEDACLASSE')
        querySelectorAll()
       
## Modificando texto

---
        
   _*para textos podemos usar p1.innerText e nos trás apenas o texto*_
     
   _se usarmos p1.innerHTML trás todas as tags ue estão dentro dela assim podemos usar esse inner para modificar textos quando quisermos_
         
   p1.innerText = 'Bom Dia!!'


## Fazendo ações

---

 _Para o mouse no Js podemos ter alguns eventos como:_
   
 - onmouseenter: Mouse dentro de algum lugar
 - onmousemove: mouse ainda dentro de algo se mexe
 - onmousedown: click e segurar
 - onmouseup: depois de estar segurando soltar o mouse
 - onclick: click simples
 - onmouseout: tirar o mouse de algum elemento

   Mais algumas funções aqui https://developer.mozilla.org/pt-BR/docs/Web/Events

## Como chamar essas ações

   _Podemos chamar as function de duas maneiras:_

   - HTML
       _Você declara as ações na proprio elemento e faz suas funçoes no Js_

          <div id="area" onclick = "clicou()" onmouseenter = "entrou()" onmouseout = "saiu()">
          <script> 
          var area = document.getElementById("area")

          function clicou(){

          }...
          </script>`
       
   - js
        _Você separa um id e declara as funções que ele deverá receber dentro do Js_

           <script>
           var area = document.getElementById("area")
           area.addEventListener('nomedoenvento', nomedafunction)
           area.addEventListener('click', clicou)
           area.addEventListener('mouseenter', entrou)
           area.addEventListener('mouseout', saiu)

          function clicou() {

          }
         </script>` 
     
  ## Criando elementos html e css
  
  ---
  
  _Podemos acessar css atravez do DOM utilizando .style.AlgumacaracteristicaCSS, podemos também, criar tag de formas dinamicas usando o Js_
        
   - tag normalmente é composta de varios valores como o src alt
      exemplo: `<img src="img/menino.png" alt="menino">`
    
          var img = document.createElement('img')//criou uma tag img
          img.setAttribute('src', 'img/menina.png', 'alt', 'menino') //adicionando src e alt
          //podemos também setar um id
           img.setAttribute('id', 'foto')
           
        - no final a tag ficou assim: `<img src="img/menino.png" alt="menino" id = "foto">` e podemos adicionar essa tag a uma div por exemplo
        
         var imagem = document.querySelector('div#img')
         imagem.appendChild(img)
   
   - *se reescrevermos um setAttribute nos tambem reescrevemos os valores*

 [Exemplo em prática](https://github.com/Petrizz/CursoJs/blob/main/Exercicios/Idade/script.js)
 
 imagem.appendChild(img)
      








