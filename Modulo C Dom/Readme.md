### O que é o DOM(Document Object Model)

## Criando um conceitos

---

    _Basicamente é uma superclasse master do site, atravez dele podemos acessar varias outras areas do site_
    foto 1 

    location referente a url do site a pagina atualizada
    document documento autual
    history guarad de onde eu veio para onde eu vou 

    podemos acessalos 
    
    por marca
        var p1 = window.document.getElementsByTagName('nome da Tag')['ordem em que ela parece'] // vai retornar o valor da tag escolida
            
            para texto podemos usar p1.innerText e nos trás apenas o texto
            se usarmos p1.innerHTML trás todas as tags ue estão dentro dela

            assim podemos usar esse inner para modificar textos quando quisermos 
            p1.innerText = 'Bom Dia!!'
            

    - por ID
        window.document.getElementById('valor do Id')
    - por Nome 
        window.document.getElementsByName()
    - por Calsse
        window.document.getElementsByClassName()
    - por Seletor
       - window.document.querySelector()
       - window.document.querySelectorAll()

        querySelector('div#NOMEDOID')
        querySelector('div.NOMEDACLASSE')
        querySelectorAll()


## Fazendo ações

---

 _Para o mouse no Js podemos ter alguns eventos como:_

 - mouseenter: Mouse dentro de algum lugar
 - mousemove: mouse ainda dentro de algo se mexe
 - mousedown: click e segurar
 - mouseup: depois de estar segurando soltar o mouse
 - click: click simples
 - mouseout: tirar o mouse de algum elemento

# Como chamar essas ações

    _Podemos chamar as function de duas maneiras:_

    - HTML
        _Você declara as ações na proprio elemento e faz suas funçoes no Js_

        `<div id="area" onclick = "clicou()" onmouseenter = "entrou()" onmouseout = "saiu()">
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
        </script>






