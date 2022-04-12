const button = document.querySelector('#btn-form');
button.addEventListener('click', () => {
    adicionaLista();
});

const adicionaLista = () => {

    const inputItem = document.getElementById('input-form');

    const li = document.createElement("li");
    li.id = 'listItem';
    li.innerHTML = `<input id='checked' type='checkbox'/>
    <label>${inputItem.value}</label>
    <button id="btn-xmark">
        <i class="fa-solid fa-rectangle-xmark"></i>
    </button>

    <div class="container-confirm">
        <input id="inputHidden" type="number" />
        <button id="btnHidden" type="submit">Confirmar Valor</button>
    </div>
    `;
    document.querySelector('ul').appendChild(li);
    document.querySelector('ul').style.backgroundColor = 'lightslategrey';
    
    // popUp();
    // rabiscaLista();
    deletaLista();

}
// const rabiscaLista = () => {
//     const checked = document.querySelectorAll('#check');
//     for(let check of checked) {
//         check.addEventListener('click', function() {
//             document.querySelector('span').style.textDecoration = 'line-through';
//         });
//     }
// };
const deletaLista = () => {
    const buttons = document.querySelectorAll('#btn-xmark');
    for (let btn of buttons) {
        btn.addEventListener('click', function() {
            this.parentElement.remove();
        });
    };
};
// const popUp = () => {
//     const checks = document.querySelectorAll('#checked');
//     for(let check of checks) {
//         check.addEventListener('click', function() {
//             if (this.checked) {
//                 document.querySelector('.container-confirm').style.display = 'flex';
//             } else {
//                  document.querySelector('.container-confirm').style.display = 'none';
//             }
            
//         });
//     }
// };