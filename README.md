# DEVinHouse-Módulo1-Projeto1

Problema I

O usuário ENTRA com um pedido "texto".
Ao clicar no botão "Adicionar" dispara uma ação
que tem como SAÍDA na "lista de pedidos" o que foi digitado.

Palavras chaves: input, value, button, createElement, AddEventListener.

Subproblema I

Para cada "elemento li" criada eu preciso de um input type "checkbox", um
label com conteúdo sendo o valor de entrada, um button para deletar a lista.

Palavras chaves: innerHTML, createElement, append, range.createContextualFragment


  let documentFragment = document.createRange().createContextualFragment(`<i class='fa-solid fa-rectangle-xmark'></i>`);
  button.append(documentFragment);

  https://stackoverflow.com/questions/36798005/append-multiple-items-in-javascript/45215917


Subproblema II

O usuário pode riscar o texto digitado marcando a checkbox.

checked / unchecked state

Palavras chaves: text-decoration: line-through


Subproblema III

O usuário em um 'click' pode deletar todo o pedido.

Palavras chaves: remove, removeChild, parentElement

  

