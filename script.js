const button = document.querySelector('#btn-form');
button.addEventListener('click', adicionaItem);

function adicionaItem() {

    const inputItem = document.getElementById('input-form');
    const li = document.createElement("li");
    li.id = 'listItem';
    li.innerHTML = `<input id='check' type='checkbox'/><span>${inputItem.value}</span>
    <button id="btn-xmark"><i class="fa-solid fa-rectangle-xmark"></i></button>`;
    document.querySelector('ul').append(li);
    document.querySelector('ul').style.backgroundColor = 'lightslategrey';
    document.getElementById('container2').style.backgroundColor = '#2a2d2f';
}


