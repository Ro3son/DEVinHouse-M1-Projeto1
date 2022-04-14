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
  console.log(input);

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

  const inputNumber = document.createElement('input'),
    button2 = document.createElement('button');

  inputNumber.id = 'inputHidden';
  inputNumber.setAttribute('type', 'number');
  inputNumber.setAttribute('placeholder', 'Digite o valor');

  button2.id = 'btnHidden';
  button2.textContent = 'Confirmar';
  button2.setAttribute('type', 'submit');

  // const span = document.createElement('span');
  // span.textContent = (`${inputItem.value}`);
  // document.querySelector('#h3').append(span);

  document.querySelector('.container-price-div').append(inputNumber);
  document.querySelector('.container-price-div').append(button2);
  document.querySelector('.container-price-div').style.backgroundColor = '#2b2a33';

  deletaLista();
  checkList();
  riscaLista();
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
  for (let value of inputs) {
    value.addEventListener('click', checked);
    function checked() {
      let checkbox = (this.checked) ?
        document.querySelector('.container-price-div').style.display = 'block' :
        document.querySelector('.container-price-div').style.display = 'none';
    };
  };
};

const riscaLista = (inputs) => {
  inputs = document.querySelectorAll('input[type="checkbox"]');
  for (let check of inputs) {
    check.addEventListener('click', function () {
      let crossOut = (this.checked) ?
        document.querySelector('label').style.textDecoration = 'line-through' :
        document.querySelector('label').style.textDecoration = 'none';
    });
  };
};