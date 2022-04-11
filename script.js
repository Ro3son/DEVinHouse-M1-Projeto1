const button = document.querySelector('#btn-form');
button.addEventListener('click', adicionaItem);

function adicionaItem() {

    const inputItem = document.getElementById('input-form');

    const li = document.createElement("li");
    li.id = 'listItem';
    li.innerHTML = `<input id='check' type='checkbox'/>
    <label>${inputItem.value}</label>
    <button id="btn-xmark"><i class="fa-solid fa-rectangle-xmark"></i></button>`;
    document.querySelector('ul').append(li);

    // let checkbox = ('#check:checked') ?
    //     document.querySelector('label').style.textDecoration = 'line-through' :
    //     document.querySelector('label').style.textDecoration = 'none';
}


