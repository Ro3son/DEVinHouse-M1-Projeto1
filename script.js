const button = document.querySelector('#btn-form');
button.addEventListener('click', () => {
  adicionaLista();
});

const adicionaLista = (input, label, button) => {

  const inputItem = document.getElementById('input-form');

  const li = document.createElement('li');
  li.id = "listItem";

  li.append(...[
    input = document.createElement('input'),
    label = document.createElement('label'),
    button = document.createElement('button')

  ]);

  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', 'checklist');
  input.id = 'checked';

  label.textContent = (`${inputItem.value}`);
  label.setAttribute('for', 'checked');

  button.id = 'btn-xmark';
  button.innerHTML = `
  <i class='fa-solid fa-rectangle-xmark'></i>`;

  document.querySelector('ul').appendChild(li);
  document.querySelector('ul').style.backgroundColor = '#2b2a33';

  riscaLista();
  deletaLista();
  checkList();
  confirmaValor();
  
};

const riscaLista = (inputs) => {
  inputs = document.querySelectorAll('input[type="checkbox"]');
  for (let input of inputs) {
    input.addEventListener('click', riscaLista);
    function riscaLista() {
      let risca = (this.checked) ?
        this.nextElementSibling.style.textDecoration = 'line-through' :
        this.nextElementSibling.style.textDecoration = 'none';
    };
  }
};

const deletaLista = (buttons) => {
  buttons = document.querySelectorAll('#btn-xmark');
  for (let btn of buttons) {
    btn.addEventListener('click', remove);
    function remove() {
      this.parentElement.remove();
    };
  };
};

const checkList = (inputs) => {
  inputs = document.querySelectorAll('input[type="checkbox"]'); // retorna um nodelist
  console.log(inputs);
  for (let input of inputs) {
    input.addEventListener('click', checked);
    function checked() {
      let confirmaValor = (this.checked) ?
        document.querySelector('.container-price-div').style.display = 'block' :
        document.querySelector('.container-price-div').style.display = 'none';
    };
  };
};

const confirmaValor = (input, button) => {

  input = document.createElement('input');
  button = document.createElement('button');

  input.id = 'inputHidden';
  input.setAttribute('type', 'number');
  input.setAttribute('placeholder', 'Digite o valor');

  button.id = 'btnHidden';
  button.textContent = 'Confirmar';
  button.setAttribute('type', 'submit');

  document.querySelector('.container-price-div').append(input);
  document.querySelector('.container-price-div').append(button);
  document.querySelector('.container-price-div').style.backgroundColor = '#2b2a33';

};
