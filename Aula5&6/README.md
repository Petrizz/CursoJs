# Variaveis e Comandos

 *Meus exercicios* usando como base material do __Curso em video__

## Algumas anotações
---
   ### Comandos

   Abrir o note.js pelo VisualCode é so abrir um novo terminal e escrever node, para sair .exit

   *Tome cuidado para não abrir varios, ele apenas fecha escrevendo .exit*

     window.alert("Olá mundo") // aparece uma janela mostrando algo   
     document.write("Olá mundo")//escreve no ducumento esse texto
     window.confirm("Deseja continuar"); // mostra 2 opções ok ou cancelar
     window.prompt("Digite seu nome"); // aparece um espaço para digitar
     
---

   ### Variaveis 

   _Js tem tipo 3 tipos e **typeof** retorna seus tipos._

   Principais:
  
 - number
     - inteiro
     - float ou double sla a diferença
     - NaN 
     - Infinity
- String 
    - "Texto"
    - 'Texto'
    -  Texto{ entre ` }
- Boolean
    - True
    - False

---
  ## Armazenamento

  _Podemos armazenar atribuindo usando as **variaveis** declaradas seguida de `=` e os **comandos**_

  ### Tratando de String
  __
    var string
    string = window.prompt("Escreva algo"); // ira armazenar o que for digitado como string
    string.length; // retorna a quantidade de caracters
    string.toUpperCase();//todas as letras vão para maiusculas
    string.toLowerCase();//todas as letras vão para minusculas

    
- Podemos concatena uma `string` com outra usando + 
- Caso tenhamos um numero e queiramos passa-lo para `String` podemos usar String(variavel) ou variavel.toString();

 ### Tratando de numeros

 _Para usarmos numeros temos que **converter as Strings para o tipo number** com Number.parseInt(varivavel): **int**, Number.parseFloat(varivavel): **float** ou simplesmente Number(variavel): **automatico**_

    var numero
    numero = Number.parseInt(window.prompt("Escreva algo"));
    numero = Number.parseFloat(window.prompt("Escreva algo"));
    numero = Number(window.prompt("Escreva algo"));
    numero.toFixed(2)// Faz com que independente do numero ele tenha 2 casas decimais
    //por padrão é usado "." mas podemos trocar isso usando `.replace('_Troque isso_','_Por isso_')`
    numero.toFixed(2).replace('.',',');
  
- Podemos somar `number` usando +
- Comandos muito útil para padrão de dinheiro é o
  - variavel.toLocaleString('pt-br', {style: 'currency' currency: 'BRL'});//podemos trocar BRL para USD(dólar), EUR(euro)

---

 ### Imprimindo

 _Podemos usar 2 manerias para imprimir informações no Js, pelo metodo da concatenação ou com template_

 Concatenação:
    var Texto
    window.alert('meu texto é ' + Texto)//note que aqui usamos aspas simples
    document.write('Olá mundo' + Texto)
   

  Template:
    var Texto
    window.alert(´meu texto é ${Texto}´) //note que aqui usamos crase





