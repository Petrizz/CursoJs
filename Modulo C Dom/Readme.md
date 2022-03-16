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
   - por Calsse
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
        
        







