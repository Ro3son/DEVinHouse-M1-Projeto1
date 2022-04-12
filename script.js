const button = document.querySelector('#btn-form');
button.addEventListener('click', () => {
    adicionaLista();
});

const adicionaLista = () => {

    const inputItem = document.getElementById('input-form');

    const li = document.createElement("li");
    li.id = 'listItem';
    li.innerHTML = `<input id='check' type='checkbox'/>
    <span>${inputItem.value}</span>
    <button id="btn-xmark">
        <i class="fa-solid fa-rectangle-xmark"></i>
    </button>`;
    document.querySelector('ul').appendChild(li);
    document.querySelector('ul').style.backgroundColor = 'lightslategrey';

    rabiscaLista();
    deletaLista();

}
const rabiscaLista = () => {
    const checked = document.querySelectorAll('#check');
    checked.forEach((check) => {
        check.addEventListener('click', function() {
            document.querySelector('span').style.textDecoration = 'line-through';
        });
    })
        
};
const deletaLista = () => {
    const buttons = document.querySelectorAll('#btn-xmark');
    for (let btn of buttons) {
        btn.addEventListener('click', function() {
            this.parentElement.remove();
        });
    };
};