const button = document.querySelector('#btn-form');
button.addEventListener('click', () => {
  adicionaLista();
});

const adicionaLista = (input, label, button, div) => {

const inputItem = document.getElementById('input-form');

const li = document.createElement('li');
li.id = "listItem";

li.append(...[
  input = document.createElement('input'),
  label = document.createElement('label'),
  button = document.createElement('button'),
  div = document.createElement('div')
  ]);

  console.log(li);

  input.setAttribute('type', 'checkbox');
  input.id = 'checked';

  label.textContent = (`${inputItem.value}`);

  button.id = 'btn-xmark';
  button.innerHTML = `
  <i class='fa-solid fa-rectangle-xmark'></i>`;

  div.className = 'container-confirm';
  div.innerHTML = `
  <input id="inputHidden" type="number" />
  <button id="btnHidden" type="submit">Confirmar Valor</button>`;

  document.querySelector('ul').appendChild(li);
  document.querySelector('ul').style.backgroundColor = 'lightslategrey';

};

const riscaLista = () => {

};
const deletaLista = () => {

};
const popUp = () => {

};