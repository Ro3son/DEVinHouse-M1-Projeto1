const ul = document.createElement('ul');
ul.id = 'ul';
document.querySelector('#list').append(ul);

const button = document.querySelector('button');
button.addEventListener('click', adicionaItem);

function adicionaItem() {
  const inputItem = document.getElementById('input');
      let li = document.createElement('li');
      li.innerText = inputItem.value;
      document.querySelector("#ul").appendChild(li);
}
adicionaItem();