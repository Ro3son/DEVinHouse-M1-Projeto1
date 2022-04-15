const button = document.querySelector('#button-form');
button.addEventListener('click', () => {
  adicionaLista();
  clearInput();
});

const adicionaLista = () => {

  const inputItem = document.getElementById('input-form');
  
  let input, label, button; // Variáveis para criar elementos //

  const li = document.createElement('li');
  li.id = "listItem";

  li.append(...[            // Criando e anexando elementos na tag <li> //
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

  document.querySelectorAll('#confirm-form').forEach((form) => { form.remove() });

  riscaLabel();
  deletaLista();
  checkList();
  confirmaValor();

};

const  clearInput = () => {
  const inputItem = document.getElementById('input-form').value='';
};

const riscaLabel = () => {

  const inputs = document.querySelectorAll('#checked');

  for (let input of inputs) {
    input.addEventListener('click', riscaLabel);
    function riscaLabel() {
      let risca = (this.checked) ?
        this.nextElementSibling.style.textDecoration = 'line-through' :
        this.nextElementSibling.style.textDecoration = 'none';
    };
  };
};

const deletaLista = () => {

  const buttons = document.querySelectorAll('#btn-xmark');

  for (let btn of buttons) {
    btn.addEventListener('click', remove);
    function remove() {
      this.parentElement.remove();
    };
  };
};

const checkList = () => {

  const inputs = document.querySelectorAll('#checked');

  for (let input of inputs) {
    input.addEventListener('click', checked);
    function checked() {

      let check = (this.checked) ?
        document.querySelector('.container-value-div').style.display = 'block' : 
        document.querySelector('.container-value-div').style.display = 'none';

        input.addEventListener('change', function() {
        const span = document.createElement('span');
          span.id = 'confirm-span';
          span.setAttribute('style', 'color: #d9eee1');
          span.textContent = (`${this.nextElementSibling.innerText}`); // label //

        document.querySelectorAll('#confirm-span').forEach((span) => { span.remove() }); // Limpa saída span //
        document.querySelector('#h3').append(span);
      });
    };
  };
};

const confirmaValor = () => {

  let input, button;

  const form = document.createElement('form');
  form.append(...[
    input = document.createElement('input'),
    button = document.createElement('button')]);

  form.id = 'confirm-form';

  input.id = 'inputHidden';
  input.setAttribute('type', 'number');
  input.setAttribute('placeholder', 'Digite o valor');

  button.id = 'btnHidden';
  button.textContent = 'Confirmar';
  button.setAttribute('type', 'submit');

  document.querySelector('.container-value-div').append(form);
  document.querySelector('.container-value-div').style.backgroundColor = '#2b2a33';

};
