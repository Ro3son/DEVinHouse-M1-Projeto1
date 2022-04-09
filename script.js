const ul = document.createElement('ul');
ul.id = 'ul';
document.querySelector('#list').append(ul);

// const li = ['listItem1', 'listItem2', 'listItem3', 'listItem4', 'listItem5',
//   'listItem6', 'listItem7', 'listItem8', 'listItem9', ' listItem10'];

// li.forEach(() => {
//   let li = document.createElement('li');
//   li.id = 'li';
//   document.querySelector("#ul").appendChild(li);
// });

const button = document.querySelector('button');
button.addEventListener('click', adicionaItem);

function adicionaItem() {
  const inputItem = document.getElementById('input');
  let li = document.createElement('li');
  li.innerText = inputItem.value;
  document.querySelector("#ul").appendChild(li);
}