const object = document.querySelector('#object');
const vertical = document.querySelector('#input-vert');
const horizontal = document.querySelector('#input-hori');
const board = document.querySelector('.board');

vertical.addEventListener('input', (e) => {
    const valor = Number(vertical.value);
    board.style.position = 'relative';
    object.style.top = `${valor}%`;
    object.style.bottom = `auto`;
    // if(valor>=80) object.style.top = '80%'
});

horizontal.addEventListener('input', (e) => {
    const valor = Number(horizontal.value);
    board.style.position = 'relative';
    object.style.left =  `${valor}%`
    object.style.right = `auto`;
    object.classList.add('white');
    // if(valor>=90) object.style.left = '90%';
})




